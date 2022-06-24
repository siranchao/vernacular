<template>
    <button @click="scrollToTop()" class="ontario-back-to-top--default">
        <svg class="ontario-icon" alt="" aria-hidden="true" focusable="false" sol:category="primary" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet">
            <use href="@/src/assets/ontario-icon-arrow-up.svg"></use>
        </svg>
        Top
    </button>
</template>

<script setup>

// window.addEventListener("scroll", function () {
//     let scroll = document.getElementById("actual-btt-button");
//     scroll.classList.toggle("active", window.scrollY > 200);
// });

// function scrollToTop() {
//     window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
// }

</script>

<style scoped>

</style>