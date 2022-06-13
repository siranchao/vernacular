<template>

    <Head>
        <Title>Vernacular - Home</Title>
        <Meta name="description" content="Home page" />
    </Head>
    <div class="page-container">
        <div class="slot">
            <Header />
        </div>
        <main id="main-slot">
            <div class="slot search-bar">
                <h3>Acronyms Dictionary</h3>
                <input id="first-search" type="text" v-model="keyword" placeholder="Enter acronym" />
                <button class="start-btn ontario-button" type="button">
                    <a id="start-btn-text" href="/search">Search</a>
                </button>
            </div>
        </main>
        <div class="slot">
            <Footer />
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

.page-container {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}

main {
    flex: 1;
}

#main-slot {
    background: url(@/src/assets/spring.jpg);
}

.search-bar {
    padding-top: 3rem;
    text-align: center;
}

#btn-index {
    margin-top: 2rem;
}

#btn-index a {
    text-decoration: none;
    color: #EDEDED;
}
</style>
