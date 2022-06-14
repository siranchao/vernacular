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
    <InfoBar :numResults="dataArr.length"/>
  </div>

  <div id="results">
    <div id="grid">
      <Cards :cards="dataArr" />
    </div>
  </div>
</template>

<script setup>
const {data: rawData} = await useFetch('/api/data')
const rawArr = rawData.value
</script>

<script>
export default {
  data() {
    return {
      dataArr: this.rawArr
    }
  },

  methods: {
    search(keywords) {
      this.resetData();
      this.dataArr = this.dataArr.filter((card) => {
        return card.acroynm.toLowerCase().includes(keywords.toLowerCase()) || card.explication.toLowerCase().includes(keywords.toLowerCase());
      });
    },
    
    classify(letter) {
      this.resetData();
      this.dataArr = this.dataArr.filter((card) => {
        return card.acroynm.charAt(0).toLowerCase().includes(letter.toLowerCase());
      })
    },

    resetData() {
      this.dataArr = this.rawArr
    }
  }

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
</style>
