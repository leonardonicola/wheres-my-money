<template>
  <transition name="slide" mode="out-in">
    <div v-if="toggle" class="menu">
      <div class="menu__add expenses" @click="changeViewer(4)">
        <p>+ ADD EXPENSE</p>
      </div>

      <div class="menu__add funds" @click="changeViewer(3)">
        <p>+ ADD FUNDS</p>
      </div>

      <h2>Expenses per category</h2>

      <div class="menu__category health" @click="changeViewer(0)">
        <fa icon="heart" />
        <p>Health</p>
      </div>

      <div class="menu__category essentials" @click="changeViewer(1)">
        <fa icon="shopping-bag" />
        <p>Essentials</p>
      </div>

      <div class="menu__category entertainment" @click="changeViewer(2)">
        <fa icon="film" />
        <p>Entertainment</p>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: ['toggle'],
  methods:{
    changeViewer(id){
      this.$store.commit('changeViewerId',id)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/_shared';

.menu {
  position: fixed;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 10rem;
  padding: 5.5rem;
  height: 100vh;
  background-color: #f6f7ff;

  a {
    text-decoration: none;
  }

  svg {
    color: black;
    font-size: 1.5rem;
  }

  p {
    font-size: 0.9rem;
  }

  &__add {
    width: 7rem;
    border: 0;
    padding: 1.25rem;
    border-radius: 1.25rem;
    color: #fff;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.6s ease;
    margin: 1rem 0;
  }

  &__navbar {
    display: flex;
    gap: 2rem;
    padding: 1.3rem 0.2rem;
  }

  &__text {
    position: absolute;
    right: 1.875rem;
  }

  &__category {
    display: flex;
    position: relative;
    align-items: center;
    cursor: pointer;
    justify-content: center;
    gap: 1.3rem;
    height: 4rem;
    width: 4rem;
    margin: 0.625rem 0;
    padding: 0 1.875rem;
    border-radius: 1.25rem;
    background-color: #e9ebf4;
    color: #fff;
    font-weight: bold;
    transition: all 0.6s ease;

    &:hover {
      transform: scale(1.1);
    }

    > p {
      display: none;
    }
  }

  .health {
    background-color: #d2ecf3;

    svg,
    p {
      color: $health-main-color;
    }
  }

  .essentials {
    background-color: #e1e3ff;

    svg,
    p {
      color: $essentials-main-color;
    }
  }

  .entertainment {
    background-color: #e1e3ff;

    svg,
    p {
      color: $entertainment-main-color;
    }
  }
}

.funds {
  background-color: #26a893;

  &:hover {
    background-color: #30d6ba;
  }
}
.expenses {
  background-color: #6326a8;

  &:hover {
    background-color: #8234db;
  }
}

@media screen and (max-width: 760px) {
  .menu {
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;

    &__category {
      justify-content: flex-start;
      width: 15rem;
      > p {
        display: block;
      }
    }
  }
}
</style>
