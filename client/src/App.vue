<template>
  <div>
    <TableComponent />
    <TaskComponent/>
  </div>
</template>

<script>
import TableComponent from './components/TableComponent.vue'
import TaskComponent from './components/TaskComponent.vue'

export default {
  name: 'App',
  components: {
    TableComponent, TaskComponent
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
