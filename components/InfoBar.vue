<template>
<div class="info-bar">
    <div class="info-items">
        <div class="num-results"><p>{{ numResults }} results found</p></div>
        <div class="num-acronyms"><p>_ total acronyms</p></div>
        <div class="num-per-page">
            <p>acronyms per page</p>
        </div>
    </div>
</div>
</template>

<script>
export default {
  props: ["numResults"],
};
</script>

<style scoped>
.info-bar {
  border-top: 1px solid black;
  background-color: #0066CC;
  padding: 0px 100px 0px 100px;
}
.info-items{
  color: white;
  display: flex;
  justify-content: space-between;
}
.info-items div {
  display: inline-block;
  font-size: 20px;
}
</style>