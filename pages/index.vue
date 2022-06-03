<template>
  <div class="slot">
    <Header />
  </div>

  <div class="slot">
    <Logo />
  </div>

  <div id="search-bar">
    <SearchBar :search="search" />
  </div>
  <div id="letter-search">
    <LetterSearch :classify="classify"/>
  </div> 
  <div id="results">
    <div id="grid" >
      <Cards :cards="data" />
    </div>
  </div>
  <Footer />
</template>

<script>
import SearchBar from "@/src/components/SearchBar.vue";
import Cards from "@/src/components/Cards.vue";
import Logo from '@/src/components/Logo.vue'
import LetterSearch from '@/src/components/letterSearch.vue'
import Footer from '@/src/components/Footer.vue'
import Header from '@/src/components/Header.vue'
import list from '@/src/data/MOCK_DATA.json'
export default {
  name: "App",
  components: {
    SearchBar: SearchBar,
    Cards: Cards,
    Logo: Logo,
    Footer: Footer,
    Header: Header,
    LetterSearch: LetterSearch,
  },
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

<style>
@import "@/ontario-design-system/styles/ds-theme.css";

#app {
  font-family: Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#search-bar {
  margin: 0 auto;
  text-align: center;
}

#grid {
  background-color:#EDEDED;
  width: 80vw;
  margin: auto;
  padding: 30px;
  margin-bottom: 3rem;
  display: grid;
  gap: 15px;
  grid-template-columns: repeat(2, 1fr);
}
#results {
  background-color:#EDEDED; 
}
</style>
