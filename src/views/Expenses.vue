<template>
  <div class="budgets">
    
    <router-link to="/addexpense">
      <div class="budgets__addexpense">
        <p>+ ADD EXPENSE</p>
      </div>
    </router-link>

    <h2>Expenses per category</h2>

    <router-link to="/health">
      <div class="budgets__category health">
        <fa icon="heart"/>
      </div>
    </router-link>

    <router-link to="/">
      <div class="budgets__category essentials">
        <fa icon="shopping-bag"/>
      </div>
    </router-link>

    <router-link to="/entertainment">
      <div class="budgets__category entertainment">
        <fa icon="film"/>
      </div>
    </router-link>

  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss">
.budgets{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 10rem;
  padding: 5.5rem;
  height: 100vh;
  background-color: #F6F7FF;

  a{
    text-decoration: none;
  }

  svg{
    color: black;
    font-size: 1.3rem;
  }

  p{
    font-size: .9rem;
  }

  &__addexpense{
    width: 7rem;
    border: 0;
    padding: 1.25rem;
    border-radius: 1.25rem;
    background-color: #2BC3A9;
    color: #fff;
    font-weight: bold;
  }

  &__navbar{
    display: flex;
    gap: 2rem;
    padding: 1.3rem .2rem;
  }

  
  &__text{
      position: absolute;
      right: 1.875rem;
  }

  &__category{
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    gap: 1.3rem;
    height: 4rem;
    width: 4rem;
    margin: 0.625rem 0;
    padding: 0 1.875rem;
    border-radius: 1.25rem;
    background-color: #E9EBF4;
    color: #fff;
    font-weight: bold;


  }

  .health{

    background-color: #D2ECF3;

    svg, p{
      color: #4f8391;
    }
  }

  .essentials{
    background-color: #E1E3FF;

    svg, p{
      color: #a888c0;
    }
  }

  .entertainment{

    background-color: #E1E3FF;

    svg,p{
      color: #8288C1;
    }
  }

}

@media screen and (max-width: 760px) {
  .budgets{
    display: none;
  }
}
</style>