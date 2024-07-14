<template>
  <div class="container">
    <main>
      <h1>Desserts</h1>
      <div class="cards">
        <ProductItem v-for="product in productList" :product="product"></ProductItem>
      </div>
    </main>
    <aside>
      <ACart @submit="modalOpen = true" />
    </aside>
    <OrderConfirmation @submit="modalOpen = false" v-if="modalOpen" />
  </div>
</template>

<script setup lang="ts">
import productList from './data.json'

const modalOpen = ref(false)
</script>

<style>
.container {
  max-width: 80rem;
  width: 100%;
  margin-inline: auto;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

main {
  flex: 1;
}

h1 {
  font-weight: 700;
  font-size: 2.5rem;
  margin-bottom: 1.75rem;
}

aside {
  width: 100%;
  /* border: 1px solid red; */
  /* background-color: rgb(162, 162, 246); */
}

.cards {
  display: grid;
  gap: 1.5rem;
}

@media(min-width: 37.5rem) {
  .container {
    padding: 2rem;
  }

  .cards {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media(min-width: 48rem) {
  .cards {
    grid-template-columns: repeat(3, 1fr);
  }

  aside {
    width: 50%;
    align-self: center;
  }
}

@media(min-width: 70rem) {
  .container {
    flex-direction: row;
    padding: 2rem;
    margin-block: 3.4rem;
  }

  aside {
    width: 24rem;
    align-self: flex-start;
  }
}
</style>
