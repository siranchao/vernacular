<template>
    <table class="table table-hover table-bordered border-primary">
        <thead>
            <tr class="table-primary">
                <th scope="col">#</th>
                <th scope="col">ID: </th>
                <th scope="col">Acroynm: </th>
                <th scope="col">Meaning: </th>
            </tr>
        </thead>
        <tbody v-for="(rec, i) in records" :key="i">
            <tr>
                <th scope="row">{{++i}}</th>
                <td>{{rec._id}}</td>
                <td>{{rec.acroynm}}</td>
                <td>{{rec.explication}}</td>
            </tr>
        </tbody>
    </table>
</template>

<script>
export default {
  props: ["records"],
};
</script>

<style scoped>
</style>