<template>
  <div class="expenses">
      <div class="expenses__title">
        <h1>Health</h1>
        <h1>expenses</h1>
      </div>
      <div v-for="expense in this.$store.state.health.historic" 
      :key="expense.name" class="expenses__historic">
        <p>{{expense.name}}</p>
        <p>{{expense.price}}</p>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>