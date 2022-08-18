<template>
  <div id="app">
    <Home/>
    <Budgets/>
  </div>
</template>

<script>
import Budgets from './views/Budgets.vue'
import Home from './views/Home.vue'
export default {
  components:{Budgets, Home}
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap');
*{
  box-sizing: border-box;
  font-family: 'Roboto', 'Arial', sans-serif;
}
html, body {
  height: 100%;
  overflow-y: hidden;
}

#app{
  display: flex;
}


.expenses{
  grid-row-start: 2;
  grid-row-end: 4;
  
  &__title{
    display: flex;
    gap: 1rem;
    color: #261D56;

    h1:first-of-type{
      font-weight: bolder;
    }

    h1:last-of-type{
      font-weight: 400;
    }
  }
}

.fade-enter-active,
.fade-leave-active{
  transition: all .3s ease;
}

.fade-enter,
.fade-leave-to{
  opacity: 0;
}

</style>
