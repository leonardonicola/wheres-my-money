<template>
  <div class="expenses">
      <div class="expenses__title">
        <h1>Entertainment</h1>
        <h1>expenses</h1>
      </div>
      <div v-for="expense in this.$store.state.entertainment.historic" 
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

<style lang="scss">

</style>