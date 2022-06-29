<template>
  <Head>
    <Title>Vernacular - Search Acronym</Title>
    <Meta name="description" content="Search an acronym" />
  </Head>

  <div id="search-bar">
    <SearchBar :search="search" />
  </div>

  <div id="letter-search">
    <LetterSearch :classify="classify" />
  </div>

  <div id="info-bar">
    <InfoBar :numResults="data.length" :totalResults="rawArr.length"/>
  </div>

  <div id="results">
    <div id="grid" v-if="data.length > 0">
      <Cards :cards="data" />
    </div>
    <NoResults v-if="data.length === 0" id="no-results"/>
  </div>

  <BackToTop />
</template>

<script setup>
import {useKeywordStore} from "@/stores/keywords"
const keywordStore = useKeywordStore()

const {data: rawData} = await useFetch('/api/data')
const rawArr = rawData.value
let data = rawData;

search(keywordStore.keywords);

function search(keywords) {
  resetData();
  data.value = data.value.filter((card) => {
    return card.acroynm.toLowerCase().includes(keywords.toLowerCase()) || card.explication.toLowerCase().includes(keywords.toLowerCase());
  });
}

function classify(letter) {
  resetData();
  data.value = data.value.filter((card) => {
    return card.acroynm.charAt(0).toLowerCase().includes(letter.toLowerCase());
  })
}

function resetData() {
  data.value = rawArr
  console.log(`data reset`)
}
</script>


<style scoped>
#search-bar {
  padding-top: 7rem;
  padding-bottom: 7rem;
  text-align: center;
  background: url(@/src/assets/spring.jpg);
}

#grid {
  background-color: #EDEDED;
  width: 80vw;
  margin: auto;
  padding-top: 30px;
  padding-bottom: 3rem;
  display: grid;
  gap: 15px;
  grid-template-columns: repeat(2, 1fr);
}

#results {
  background-color: #EDEDED;
}

#no-results{
  opacity: 50%;
}
</style>
