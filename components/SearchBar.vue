<template>
  <div class="search-bar">
    <h3>Acronyms Dictionary</h3>
    <input id="search" type="text" v-model="keywordStore.keywords" placeholder="Search OPS acronym" autofocus @keyup.enter="search(keywordStore.keywords)" />
    <button class="btn ontario-button" @click="search(keywordStore.keywords)" :disabled="keywordStore.keywords == ''">
      Search
    </button>
  </div>
</template>


<script setup>
import {useKeywordStore} from "@/stores/keywords"
const keywordStore = useKeywordStore()

const props = defineProps({
  search: Function
})

</script>


<style scoped>
.search-bar {
  margin: auto;
  background-color: rgba(255,255,255,0.85);
  padding-top: 2rem;
  padding-bottom: 2rem;
  width: 32rem;
}

#search {
  display: inline-block;
  vertical-align: middle;
  font-size: 1.5em;
  height: 1.5em;
  margin-right: 5px;
}

.btn {
  display: inline-block;
  vertical-align: middle;
  background-color: #0066CC;
  color: white;
  margin: 0px;
}
</style>