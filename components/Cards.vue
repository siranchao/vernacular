<!-- <template>
  <div id="container" v-for="card in cards" :key="card.acroynm">
    <div id="card-box">
      <h3 class="title">{{ card.acroynm }}</h3>
      <h4 class="title">{{ card.explication }}</h4>
      <article class="info">
        <h5></h5>
        <p v-if="card.info" class="info">{{ card.info }}</p>
      </article>
      <button class="btn" v-if="card.reference">
        <a href="{{card.reference}}">Learn More</a>
      </button>
    </div>
  </div>
</template> -->

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
#card-box {
  padding: 3%;
  border: 1px solid black;
  background-color: #E2F0F4;
  height: 40vh;
}

a {
  color: #1a1a1a;
  text-decoration: none;
}

.info {
  height: 50%;
}

.btn {
  background-color: #D1D1D1;
  border: none;
  padding: 5px;
  margin-bottom: 5px;
}
</style>