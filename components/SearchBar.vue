<template>
  <div class="search-bar">
    <h3>Acronyms Dictionary</h3>
    <input id="search" type="text" v-model="keyword" placeholder="Enter acronym" @keyup.enter="search(keyword)" />
    <button class="btn ontario-button" @click="search(keyword)" :disabled="keyword == ''">
      Search
    </button>
  </div>
</template>

<script>
export default {
  props: ["search"],

  data() {
    return {
      keyword: "",
    };
  },
};
</script>

<style scoped>
#search {
  font-size: 1.5em;
  height: 1.5em;
  padding: 5px;
  margin-left: 10px;
  padding-left: 10px;
}

.btn {
  margin-left: 10px;
}
</style>