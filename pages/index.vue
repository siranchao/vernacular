<template>
    <Head>
        <Title>Vernacular - Home</Title>
        <Meta name="description" content="Home page" />
    </Head>
    <div id="main-slot">
        <div id="search-bar">
            <h3>Acronyms Dictionary</h3>
            <input id="first-search" type="text" v-model="keyword" placeholder="Enter acronym" />
            <button class="start-btn ontario-button" type="button">
                <a id="start-btn-text" href="/search">Search</a>
            </button>
        </div>
    </div>
</template>

<script setup>
</script>


<style scoped>
.start-btn {
    display: inline-block;
    vertical-align: middle;
    background-color: #0066CC;
    margin: 0px !important;
}
#start-btn-text {
    color: white;
    text-decoration: none;
}
#first-search {
    display: inline-block;
    vertical-align: middle;
    font-size: 1.5em;
    height: 1.5em;
    margin-right: 5px;
}
#main-slot {
    min-height: 70vh;
    background: url(@/src/assets/spring.jpg);
    display: flex;
    justify-content: center;
    align-items: center; 
}
#search-bar {
    padding-top: 3rem;
    text-align: center;
    background-color: rgba(255,255,255,0.85);
    padding-top: 2rem;
    padding-bottom: 2rem;
    width: 32rem;
}
</style>