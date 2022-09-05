<template>
  <div class="card">
    <h2>{{cardInfos.balance | toCurrency}}</h2>
    <div class="card__number">
     <fa icon="fa-brands fa-cc-mastercard"/>
     <p>{{cardInfos.number | hideNumber}}</p>
    </div>
    <div class="card__name">
      <p>{{cardInfos.name}}</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed:{
    ...mapGetters(['cardInfos'])
  }
}
</script>

<style lang="scss">
.card{
  margin: 2rem 0;
  height: fit-content;
  width: 15rem;
  padding: 1.3rem;
  padding-bottom: .2rem;
  color: #fff;
  border-radius: 2rem;
  background-color: #293366;
  font-weight: bold;
  grid-column-start:3;
  grid-column-end: 4;

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

  @media screen and (max-width: 600px) {
        grid-row-start:2;
        grid-row-end: 3;
        grid-column-start:1;
        grid-column-end: 3;
  }
}
</style>