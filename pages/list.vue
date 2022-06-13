<template>

    <Head>
        <Title>Vernacular - Full Acronym List</Title>
        <Meta name="description" content="Full acronym list" />
    </Head>
    <div class="page-container">
        <main>
            <div class="slot">
                <Header />
            </div>

            <div class="slot">
                <h2>full list: </h2>
                <p>{{ list }}</p>
            </div>
        </main>


        <div class="slot">
            <Footer />
        </div>
    </div>
</template>

<script setup>
const { data: list } = await useFetch('/api/data')
</script>

<style scoped>
</style>