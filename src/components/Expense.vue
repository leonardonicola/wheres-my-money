<template>
  <div class="expenses">
      <div class="expenses__title">
        <h1>{{category}}</h1>
        <h1>expenses</h1>
      </div>
      <div class="expenses__historic">
        <div v-for="expense in categoryGetter.historic" 
        :key="expense.name" class="expenses__card">
          <div class="expenses__name">
            <h4>{{expense.name}}</h4>
          </div>
          <div class="expenses__price">
            <p>{{expense.price | toCurrency}}</p>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    props:['category'],
    computed:{
    ...mapGetters('expenses',{
      categoryGetter: `get_${category}`
    })
  }
}
</script>

<style lang="scss">
  .expenses{
    grid-column-start: 1;
    grid-column-end: 5;

    &__historic{
      height: 100%;
      overflow-y: scroll;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      padding-right: 2rem;
      gap: 2rem;
    }

    &__card{
      border-radius: 2rem;
      width: 35%;
      height: 10rem;
      background-color: rgb(219, 219, 219);
      display: flex;
      flex-direction: column;
      overflow: hidden;
    }
    
    &__name{
      height: 50%;
      padding: 1.5rem;
      color: white;
      background-color: #293366;
    }
    &__price{
      height: 50%;
      padding: 1.5rem;
      p{
        font-weight: bolder;
      }
    }

  }
</style>