<template>
    <div class="container">
        <main>
            <div class="slot">
                <Header />
            </div>
            <div class="slot">
                <Logo />
            </div>

            <div class="slot search-bar">
                <h3>Acronyms Dictionary</h3>
                <!-- <input id="search" type="text" v-model="keyword" placeholder="Enter acronym"
                    @keyup.enter="search(keyword)" /> -->
                <!-- <button class="btn ontario-button" to="/search" @click="search(keyword)" :disabled="keyword == ''">
                    Search
                </button> -->
                <!-- <button class="btn ontario-button" to="/search">
                    <a href="/search">Start Playing</a>
                </button> -->

                <a class="btn ontario-button" href="/search">Start Playing</a>

            </div>
        </main>
        <div class="slot">
            <Footer />
        </div>
    </div>
</template>

<script setup>
import list from '@/src/data/MOCK_DATA.json'

</script>


<style>
@import "@/ontario-design-system/styles/ds-theme.css";

.container {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}

main {
    flex: 1;
}

#search {
    font-size: 1.5em;
    height: 1.5em;
    padding: 5px;
    margin-right: 10px;
}

.search-bar {
    margin: 2.5rem auto;
    text-align: center;
}

.btn a {
    text-decoration: none;
}
</style>
