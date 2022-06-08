<template>

  <Head>
    <Title>Vernacular - Search Acronym</Title>
    <Meta name="description" content="Search an acronym" />
  </Head>
  <div class="slot">
    <Header />
  </div>
  <div class="slot" id="search-bar">
    <SearchBar :search="search" />
  </div>
  <div class="slot" id="letter-search">
    <LetterSearch :classify="classify" />
  </div>
  <div class="slot" id="results">
    <div id="grid">
      <Cards :cards="data" />
    </div>
  </div>
  <div class="slot">
    <Footer />
  </div>
</template>

<script>
import list from '@/src/data/MOCK_DATA.json'

export default {
  data() {
    return {
      data: list
    };
  },
  methods: {
    search(keywords) {
      this.resetData();
      this.data = this.data.filter((card) => {
        return card.acroynm.toLowerCase().includes(keywords.toLowerCase()) || card.explication.toLowerCase().includes(keywords.toLowerCase());
      });
    },
    classify(letter) {
      this.resetData();
      this.data = this.data.filter((card) => {
        return card.acroynm.charAt(0).toLowerCase().includes(letter.toLowerCase());
      })
    },
    resetData() {
      this.data = list;
    },
  },
};
</script>

<style scoped>
#search-bar {
  padding-top: 4rem;
  padding-bottom: 4rem;
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
