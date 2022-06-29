<template>


  <div class="ontario-callout">
      <h2 class="ontario-callout__title ontario-h5">Start searching your acronyms</h2>
      
      <div class="info-bar">
        <p class="num">{{ numResults }} Results Found</p>
        <p class="num">{{ totalResults }} Acronyms In Total</p>
      </div>
      <p class="info-text">No results found? <a href="/create">Click here</a> and contribute your acronyms to our dictionary!</p>
  </div>

</template>


<script setup>
const props = defineProps({
  numResults: Number,
  totalResults: Number
})
</script>


<style scoped>
.ontario-callout{
  max-width: 70%;
  margin: 1.5rem auto;
  padding: 1rem;
}
.info-bar{
  color:#1a1a1a;
  display: flex;
  justify-content: space-around;
  margin: 0 auto;

}
.num {
  display: inline-block;
  font-size:18px;
  font-weight: 500;
  line-height: 18px;
  padding: 10px;
  margin-bottom: 0;
}

.ontario-callout__title, .info-bar, .inf-text{
  margin-bottom: 0.5rem;
}


</style>