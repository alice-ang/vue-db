<template>
  <div>
    <TableComponent />
  </div>
</template>

<script>
import TableComponent from './components/TableComponent.vue'

export default {
  name: 'App',
  components: {
    TableComponent
  }
}
</script>

<style>
body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;


}
.table {
  margin: auto;
  max-width: 800px;
}
</style>
