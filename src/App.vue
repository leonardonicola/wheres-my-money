<template>
  <div id="app">
    <Home/>
    <Menu :toggle="toggle" @closeSidebarOnClick="toggle = $event"/>
    <div class="hamburguer">
      <fa v-if="toggle" @click="toggle = false" icon="close"/>
      <fa v-else @click="toggle = true" icon="bars"/>
    </div>
  </div>
</template>

<script>
import Menu from './views/Menu.vue'
import Home from './views/Home.vue'
export default {
  components:{Menu, Home},
  data(){
    return{
      toggle:false
    }
  },
  mounted(){
    this.$store.dispatch('expenses/initialiseStore');
  },
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@400;700;900&display=swap');
*{
  box-sizing: border-box;
  font-family: 'Rubik', 'Arial', sans-serif;
}
html, body {
  margin: 0;
}

.fade-enter-active,
.fade-leave-active{
  transition: all .3s ease;
}

.fade-enter,
.fade-leave-to{
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active{
  transition: all .5s ease;
}

.slide-enter,
.slide-leave-to{
  transform: translate(100%,0);
}

.hamburguer{
    position: fixed;
    top: 2rem;
    right: 2rem;
    z-index: 2;

    svg{
      color: black;
      font-size: 2rem;
      cursor: pointer;
      transition: all .2s ease;

      &:hover{
        transform: scale(1.1);
      }
    }
  }


</style>
