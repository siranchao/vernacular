<template>
  <div class="card" v-for="card in cards" :key="card.acroynm">
    <h5 class="card-header">{{ card.acroynm }}</h5>
    <div class="card-body">
      <h5 class="card-title">{{ card.explication }}</h5>
      <p v-if="card.info" class="card-text">{{ card.info }}</p>
      <a v-if="card.reference" href="{{card.reference}}"
        class="text-primary stretched-link text-decoration-underline">Learn More</a>
    </div>
  </div>
</template>

<script>
export default {
  props: ["cards"],
};
</script>

<style scoped>
</style>