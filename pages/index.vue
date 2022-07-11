<template>
  <div>
    <Head>
      <Title>Vernacular - Home</Title>
      <Meta name="description" content="Home page" />
    </Head>

    <div id="main-slot">
      <div id="search-bar">
        <h3>Acronyms Dictionary</h3>
        <div class="input-bar">
          <input
            id="first-search"
            type="text"
            v-model="keywordStore.keywords"
            placeholder="Search OPS acronym"
            list="datalistOptions"
            autofocus
            @keyup.enter="itemClicked"
          />

          <datalist id="datalistOptions">
            <option
              :key="autocompleteItem.acronym"
              v-text="autocompleteItem.acronym"
              v-for="autocompleteItem in autocompleteItems()"
            ></option>
          </datalist>
        </div>

        <button
          class="start-btn ontario-button"
          type="button"
          @click="itemClicked"
        >
          Search
        </button>
      </div>
    </div>
  </div>
</template>


<script setup>
import { useKeywordStore } from "@/stores/keywords";
const keywordStore = useKeywordStore();
keywordStore.updateKeyword();

const { data: rawData } = await useFetch("/api/data");
const results = rawData.value;

function autocompleteItems() {
  if (keywordStore.keywords == "" || keywordStore.keywords.length < 2) {
    return [];
  }
  return this.results.filter((result) =>
    result.acronym
      .toString()
      .toLowerCase()
      .includes(keywordStore.keywords.toLowerCase())
  );
}
function itemClicked() {
  window.location.href = "/search";
}
</script>


<style scoped>
.start-btn {
  display: inline-block;
  vertical-align: middle;
  background-color: #0066cc;
  margin: 10px !important;
  color: white;
  max-width: 55%;
}
#start-btn-text {
  color: white;
  text-decoration: none;
}
#first-search {
  display: inline-block;
  vertical-align: middle;
  font-size: 1.5em;
  height: 1.5em;
  line-height: normal;
  margin-right: 5px;
  text-transform: uppercase;
}
#first-search::placeholder {
  font-size: 0.9em;
  padding-left: 5px;
  text-transform: none;
}

#main-slot {
  min-height: 70vh;
  background: url(@/src/assets/spring.jpg);
  display: flex;
  justify-content: center;
  align-items: center;
}
#search-bar {
  padding-top: 3rem;
  text-align: center;
  background-color: rgba(255, 255, 255, 0.85);
  padding-top: 2rem;
  padding-bottom: 2rem;
  width: 32rem;
  border-radius: 0.375rem;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
.input-bar {
  display: inline-block;
}
/* ul {
  list-style-type: none;
  margin: 10px 10px;
}
ul li {
  padding: 0 0 0;
  cursor: pointer;
  font-size: 1rem;
  font-family: Raleway;
}
.item:hover {
  border: 2px solid black;
} */

@media screen and (max-width: 320px) {
  #search-bar {
    width: 100vw;
  }
  #first-search {
    width: 80vw;
  }
}
@media screen and (min-width: 320px) and (max-width: 520px) {
  #search-bar {
    width: 90vw;
  }
  #first-search {
    width: 70%;
  }
}
</style>