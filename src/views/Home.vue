<template>
  <div class="home">
    <Card/>
    <div class="home__balance">
      <h2>Wallet Balance</h2>
      <h1>{{balance | toCurrency}}</h1>
    </div>
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<script>
import Card from '../components/Card.vue'
export default {
    components:{Card},
    computed:{
      balance(){
        return this.$store.state.walletBalance
      }
    }
}
</script>

<style lang="scss">
  .home{
    display: grid;
    width: 100%;
    height: 100vh;
    padding: 30px;
    grid-template-columns: repeat(4,1fr);
    grid-template-rows: repeat(4, 1fr);

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
  }

</style>