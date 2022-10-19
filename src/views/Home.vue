<template>
  <div class="home">
    <card/>
    <div class="home__balance">
      <h2>Wallet Balance</h2>
      <h1>{{this.$store.state.expenses.walletBalance | toCurrency}}</h1>
    </div>
    <viewer :id="this.$store.state.viewer.id"/>
  </div>
</template>

<script>
import Viewer from '../components/Viewer.vue'
import Card from '../components/Card.vue'
export default {
    components:{Card, Viewer}
}
</script>
<style lang="scss" scoped>
  .home{
    display: grid;
    width: calc(100% - 11rem);
    height: 100vh;
    padding: 30px;
    grid-template-columns: repeat(3,1fr);
    grid-template-rows: repeat(4, auto);

    &__balance{
      display: flex;
      flex-direction: column;
      grid-column-start: 1;
      grid-column-end: 2;
      grid-row-start: 1;
      grid-row-end: 2;

      h2{
        color: #8D8EA8;
      }

      h1{
        color: #261D56;
        font-size: 2.5rem;
        margin: 0;
      }
    }

    @media screen and (max-width: 650px) {
      width: 100%;
    }

  }

</style>