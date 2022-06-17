<template>
  <div class="search-bar">
    <h3>Acronyms Dictionary</h3>
    <input id="search" type="text" v-model="keyword" placeholder="Enter acronym" @keyup.enter="search(keyword)" />
    <button class="btn ontario-button" @click="search(keyword)" :disabled="keyword == ''">
      Search
    </button>
  </div>
</template>


<script setup>
const props = defineProps({
  search: Function
})

const keyword = ref("")
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