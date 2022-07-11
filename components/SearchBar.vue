<template>
  <div class="search-bar">
    <h3>Acronyms Dictionary</h3>
    <div class="input-bar">
      <input
        id="search"
        type="text"
        v-model="keywordStore.keywords"
        placeholder="Search OPS acronym"
        autofocus
        list="datalistOptions"
        @keyup.enter="search(keywordStore.keywords)"
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
      class="btn ontario-button"
      @click="search(keywordStore.keywords)"
      :disabled="keywordStore.keywords == ''"
    >
      Search
    </button>
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
  border-radius: 0.375rem;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
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

.input-bar {
  display: inline-block;
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