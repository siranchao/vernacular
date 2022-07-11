<template>
  <div>
    <Head>
      <Title>Vernacular - Full Acronym List</Title>
      <Meta name="description" content="Full acronym list" />
    </Head>

    <div class="container">
      <Table :records="list" />
    </div>

    <BackToTop />
  </div>
</template>

<script setup>
import BackToTop from "@/components/button/BackToTop.vue";

const { data: list } = await useFetch("/api/data");
</script>

<style scoped>
@media screen and (max-width: 600px) {
  .container {
    width: 90vw;
  }
}
</style>