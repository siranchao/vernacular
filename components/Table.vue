<template>
    <table class="table table-hover table-bordered">
        <thead>
            <tr class="table-primary">
                <th scope="col">Acroynm: </th>
                <th scope="col">Meaning: </th>
                <th scope="col">Contributor: </th>
                <th scope="col">Link: </th>
            </tr>
        </thead>
        <tbody v-for="rec in records" :key="rec.acroynm">
            <tr>
                <th scope="row">{{rec.acroynm}}</th>
                <td>{{rec.explication}}</td>
                <td>{{rec.id}}</td>
                <td><a v-if="rec.reference" target="_blank" :href="rec.reference">More</a></td>
            </tr>
        </tbody>
    </table>
</template>

<script setup>
const props = defineProps({
    records: Array
})
</script>

<style scoped>
.table {
    margin: 3rem auto;
    width: 90%;
}
a{
    text-decoration: none;
    color: #0066CC;
}
a:hover {
    color: #002142;
}
a:visited {
    color: #551A8B;
}
</style>