<template>
  <div class="expenses" :class="category">
    <div class="expenses__title">
      <h1>{{ category }}</h1>
      <h1>expenses</h1>
    </div>
    <div class="expenses__historic">
      <div
        v-for="expense in getExpense(id)"
        :key="expense.name"
        class="expenses__card"
      >
        <div class="expenses__name" :class="`${category}__card`">
          <h4>{{ expense.name }}</h4>
        </div>
        <div class="expenses__price">
          <p>{{ expense.price | toCurrency }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  props: ['id'],
  computed: {
    ...mapGetters('expenses', ['getExpense']),
    category() {
      switch (this.id) {
        case 0:
          return 'Health'
        case 1:
          return 'Essentials'
        case 2:
          return 'Entertainment'
      }
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../assets/_shared';
.expenses {
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 2;
  grid-row-end: 5;
  margin-bottom: 2rem;

  &__title {
    display: flex;
    flex-wrap: wrap;

    gap: 1rem;
    color: #261d56;

    h1:first-of-type {
      font-weight: bolder;
    }

    h1:last-of-type {
      font-weight: 400;
    }
  }

  &__historic {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-content: space-between;
    padding-right: 2rem;
    gap: 2rem;
    margin-bottom: 1rem;

    &::-webkit-scrollbar-track {
      background-color: #f5f5f5;
      border-radius: 2rem;
    }

    &::-webkit-scrollbar {
      width: 6px;
      background-color: #f5f5f5;
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 2rem;
      background-color: #5c5c5c;
    }

    @media screen and (max-width: 700px) {
      grid-template-columns: 1fr 1fr;
    }
  }

  &__card {
    border-radius: 2rem;
    width: 100%;
    max-width: 20rem;
    min-width: 7.6rem;
    height: 10rem;
    background-color: rgb(219, 219, 219);
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }

  &__name {
    display: flex;
    align-items: center;
    width: 100%;
    height: 50%;
    padding: 1.5rem;
    color: white;
    background-color: #293366;
    justify-content: center;
  }
  &__price {
    height: 50%;
    padding: 1.5rem;
    p {
      font-weight: bolder;
    }
  }

  @media screen and (max-width: 700px) {
    grid-row-start: 3;
    grid-row-end: 4;
    grid-column-start: 1;
    grid-column-end: 4;
  }
}

.Health {
  h1 {
    color: $health-main-color;
  }

  &__card {
    background-color: $health-main-color;
  }
}

.Essentials {
  h1 {
    color: $essentials-main-color;
  }

  &__card {
    background-color: $essentials-main-color;
  }
}

.Entertainment {
  h1 {
    color: $entertainment-main-color;
  }

  &__card {
    background-color: $entertainment-main-color;
  }
}
</style>
