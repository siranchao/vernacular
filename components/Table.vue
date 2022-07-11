<template>
  <table class="table table-hover table-bordered table-responsive">
    <thead>
      <tr class="table-primary">
        <th scope="col">acronym:</th>
        <th scope="col">Meaning:</th>
        <th scope="col">Contributor:</th>
        <th scope="col">Link:</th>
      </tr>
    </thead>
    <tbody v-for="rec in records" :key="rec.acronym">
      <tr>
        <th scope="row" class="key">{{ rec.acronym }}</th>
        <td class="meaning">{{ rec.explication }}</td>
        <td class="creator">{{ rec.creator }}</td>
        <td class="link">
          <a v-if="rec.reference" target="_blank" :href="rec.reference">More</a>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
const props = defineProps({
  records: Array,
});
</script>

<style scoped>
.table {
  margin: 3rem auto;
  width: 80%;
}
a {
  text-decoration: none;
  color: #0066cc;
}
a:hover {
  color: #002142;
}
a:visited {
  color: #551a8b;
}

@media screen and (max-width: 600px) {
  table {
    border: 0;
  }
  table .key {
    border-top: 1px solid #1a1a1a;
  }
  table .meaning {
    border-top: 1px solid #1a1a1a;
  }
  table thead {
    display: none;
  }
  table tr {
    margin-bottom: 10px;
    display: block;
    border-bottom: 2px solid #1a1a1a;
  }
  table td {
    display: block;
    text-align: right;
    font-size: 14px;
    border-bottom: 1px solid #fff;
  }
  table td:last-child {
    border-bottom: 1;
  }
}
</style>