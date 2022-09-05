<template>
  <div id="app">
    <Home/>
    <Expenses/>
  </div>
</template>

<script>
import Expenses from './views/Expenses.vue'
import Home from './views/Home.vue'
export default {
  components:{Expenses, Home},
  beforeCreate() { this.$store.commit('expenses/initialiseStore');},
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@400;700;900&display=swap');
*{
  box-sizing: border-box;
  font-family: 'Rubik', 'Arial', sans-serif;
}
html, body {
  height: 100%;
  margin: 0;
  overflow-y: hidden;
}

#app{
  display: flex;
}


.expenses{
  
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

@media screen and (max-width: 600px) {
  body,html{
    overflow-y: auto;
  }
}

</style>
