<template>
  <div class="card" v-for="card in cards" :key="card.acroynm">
    <h5 class="card-header">{{ card.acroynm }}</h5>
    <div class="card-body">
      <h5 class="card-title">{{ card.explication }}</h5>
      <p v-if="card.info" class="card-text">{{ card.info }}</p>
      <button v-if="card.reference" @click="followLink(card.reference)"
        class="learn-more-btn ontario-button">Learn More</button>
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
.learn-more-btn {
  font-size: 12pt;
  padding: 8px;
}
.learn-more-btn:hover {
  font-weight: bold;
}
</style>