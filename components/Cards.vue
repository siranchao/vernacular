<template>
  <div class="card" v-for="card in cards" :key="card._id">
    <h5 class="card-header">{{ card.acronym }}</h5>
    <div class="card-body">
      <h5 class="card-title">{{ card.explication }}</h5>
      <p v-if="card.info" class="card-text">{{ card.info }}</p>
      <div class="btn-group position-absolute bottom-0">
        <button
          v-if="card.reference"
          @click="followLink(card.reference)"
          class="learn-more-btn active-btn ontario-button"
        >
          Learn More
        </button>

        <button v-else disabled class="learn-more-btn ontario-button">
          Learn More
        </button>

        <LikeButtons :likes="card.likes" :id="card._id" />
      </div>
    </div>
  </div>
</template>

<script setup>
import LikeButtons from "@/components/button/LikeButtons.vue";
const props = defineProps({
  cards: Array,
});

function followLink(reference) {
  console.log("following " + reference);
  window.open(reference, "_blank");
}
</script>


<style scoped>
.card {
  border: none;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
.card-text {
  padding-bottom: 2rem;
}
.card-header {
  background-color: #e2f0f4;
}
.btn-group {
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.learn-more-btn {
  font-size: 0.8rem;
  padding: 4px 0;
  margin: 10px 0px;
  min-width: 6rem;
  max-width: 8rem;
}
.active-btn:hover {
  background: #06c;
  color: #fff;
}
</style>