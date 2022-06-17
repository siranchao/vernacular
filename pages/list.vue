<template>
    <Head>
        <Title>Vernacular - Full Acronym List</Title>
        <Meta name="description" content="Full acronym list" />
    </Head>

    <div class="container">
        <Table :records="list"/>
    </div>
</template>

<script setup>
const {data: list} = await useFetch('/api/data')
</script>

<style scoped>
</style>