<template>
  <div>
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
      <InfoBar :numResults="data.length" :totalResults="rawArr.length" />
    </div>

    <div id="results">
      <div id="grid" v-if="data.length > 0">
        <Cards :cards="data" />
      </div>
      <NoResults v-if="data.length === 0" id="no-results" />
    </div>

    <BackToTop />
  </div>
</template>

<script>
export default {
  head() {
    return {
      htmlAttrs: {
        lang: "en",
      },
    };
  },
};
</script>

<script setup>
import BackToTop from "@/components/button/BackToTop.vue";
import { useKeywordStore } from "@/stores/keywords";
const keywordStore = useKeywordStore();

const { data: rawData } = await useFetch("/api/data");
const rawArr = rawData.value;
let data = rawData;

search(keywordStore.keywords);

function search(keywords) {
  resetData();
  data.value = data.value.filter((card) => {
    return (
      card.acronym.toLowerCase().includes(keywords.toLowerCase()) ||
      card.explication.toLowerCase().includes(keywords.toLowerCase())
    );
  });
}

function classify(letter) {
  resetData();
  data.value = data.value.filter((card) => {
    return card.acronym.charAt(0).toLowerCase().includes(letter.toLowerCase());
  });
}

function resetData() {
  data.value = rawArr;
  console.log(`data reset`);
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
  background-color: #ededed;
  width: 80vw;
  margin: auto;
  padding-top: 30px;
  padding-bottom: 3rem;
  display: grid;
  gap: 15px;
  grid-template-columns: repeat(2, 1fr);
}

#results {
  background-color: #ededed;
}

#no-results {
  opacity: 50%;
}

@media screen and (max-width: 600px) {
  #grid {
    background-color: #ededed;
    width: 90vw;
    margin: auto;
    padding-top: 30px;
    padding-bottom: 3rem;
    display: grid;
    gap: 15px;
    grid-template-columns: 1fr;
  }
}
@media screen and (min-width: 1400px) {
  #grid {
    background-color: #ededed;
    width: 80vw;
    margin: auto;
    padding-top: 30px;
    padding-bottom: 3rem;
    display: grid;
    gap: 15px;
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
