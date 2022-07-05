<template>
  <div class="search-bar">
    <h3>Acronyms Dictionary</h3>
    <input
      id="search"
      type="text"
      v-model="keywordStore.keywords"
      placeholder="Search OPS acronym"
      autofocus
      @keyup.enter="search(keywordStore.keywords)"
    />
    <button
      class="btn ontario-button"
      @click="search(keywordStore.keywords)"
      :disabled="keywordStore.keywords == ''"
    >
      Search
    </button>
    <div>
      <ul>
        <li
          :key="autocompleteItem.acronym"
          v-for="autocompleteItem in autocompleteItems()"
          v-text="autocompleteItem.acronym"
          @click="
            itemClicked(autocompleteItem);
            search(keywordStore.keywords);
          "
          class="item"
        ></li>
      </ul>
    </div>
  </div>
</template>


<script setup>
import { useKeywordStore } from "@/stores/keywords";
const keywordStore = useKeywordStore();
const { data: rawData } = await useFetch("/api/data");
const results = rawData.value;

const props = defineProps({
  search: Function,
});

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
function itemClicked(autocompleteItem) {
  keywordStore.keywords = autocompleteItem.acronym;
}
</script>


<style scoped>
.search-bar {
  margin: auto;
  background-color: rgba(255, 255, 255, 0.85);
  padding-top: 2rem;
  padding-bottom: 2rem;
  width: 32rem;
}

#search {
  display: inline-block;
  vertical-align: middle;
  font-size: 1.5em;
  height: 1.5em;
  line-height: normal;
  margin-right: 5px;
  text-transform: uppercase;
}
#search::placeholder {
  font-size: 0.9em;
  text-transform: none;
  padding-left: 5px;
}

.btn {
  display: inline-block;
  vertical-align: middle;
  background-color: #0066cc;
  color: white;
  margin: 10px;
  max-width: 55%;
}
ul {
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
}

@media screen and (max-width: 320px) {
  .search-bar {
    width: 100vw;
  }
  #search {
    width: 80vw;
  }
}
@media screen and (min-width: 320px) and (max-width: 520px) {
  .search-bar {
    width: 90vw;
  }
  #search {
    width: 60%;
  }
}
</style>