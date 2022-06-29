<template>
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="display:none" aria-hidden="true">
        <symbol id="ontario-icon-arrow-up"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="m4 12 1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"></path></symbol>
    </svg>
    <button @click="scrollToTop" id="top-btn" class="ontario-back-to-top--default">
        <svg class="ontario-icon" alt="" aria-hidden="true" focusable="false" sol:category="primary" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet"><use href="#ontario-icon-arrow-up"></use></svg>
        Top
    </button>
</template>

<script setup>

function scrollToTop() {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
}

</script>

<style scoped>
#top-btn {
    visibility: visible;
    opacity: 1;
}
</style>