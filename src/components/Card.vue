<template>
  <div v-once class="card">
    <h2>{{cardBalance | toCurrency}}</h2>
    <div class="card__number">
     <fa icon="fa-brands fa-cc-mastercard"/>
     <p>{{this.$store.state.card.number}}</p>
    </div>
    <div class="card__name">
      <p>{{this.$store.state.card.name}}</p>
    </div>
  </div>
</template>

<script>
export default {
  computed:{
    cardBalance(){
      return this.$store.state.card.balance
    }
  }
}
</script>

<style lang="scss">
.card{
  display: flex;
  flex-direction: column;
  height: fit-content;
  width: 15rem;
  padding: 1.3rem;
  padding-bottom: .2rem;
  color: #fff;
  border-radius: 2rem;
  background-color: #293366;
  font-weight: bold;
  grid-column-start:4;
  grid-column-end: 5;

  h2:first-child{
    font-size: 1.1rem;
  }

  p:first-child, p:last-child{
   color: #8D8EA8;;
   font-size: .9rem;
  }

  p:first-child{
    padding-top: 1.3rem;
    font-weight: normal;
  }

  &__number{
    display: flex;
    align-items:center;
    gap: .6rem;

    > p{
      margin: 0;
    }
  }

  svg{
    font-size: 1.25rem;
    width: fit-content;
  }
}
</style>