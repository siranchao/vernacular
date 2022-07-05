<template>
  <div class="card" v-for="card in cards" :key="card.acroynm">
    <h5 class="card-header">{{ card.acroynm }}</h5>
    <div class="card-body">
      <h5 class="card-title">{{ card.explication }}</h5>
      <p v-if="card.info" class="card-text">{{ card.info }}</p>
      <button v-if="card.reference" @click="followLink(card.reference)"
      class="position-absolute bottom-0 start-10 learn-more-btn ontario-button">Learn More</button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  cards: Array
})

function followLink(reference) {
  console.log("following " + reference)
  window.open(reference, "_blank");
}
</script>


<style scoped>
.card-text{
  padding-bottom: 2rem;
}
.learn-more-btn {
  font-size: 0.9rem;
  padding: 5px;
  margin: 10px 0px;
  min-width: 6rem;
  max-width: 8rem;
}
.learn-more-btn:hover {
  font-weight: bold;
}
</style>