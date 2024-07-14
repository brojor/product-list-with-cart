<template>
	<div class="product-card">
		<picture>
			<source media="(min-width: 70rem)" :srcset="product.image.desktop">
			<source media="(min-width: 37.5rem)" :srcset="product.image.tablet">
			<img :src="product.image.mobile" :alt="product.name">
		</picture>
		<button @click="addToCart(product)">
			<IconsAddToCart />
			Add to Cart
		</button>
		<p class="product-category">{{ product.category }}</p>
		<h3 class="product-name">{{ product.name }}</h3>
		<p class="product-price">{{ formatPrice(product.price) }}</p>
	</div>
</template>

<script setup lang="ts">
import type { Product } from '~/types'
import { useCartStore } from '~/stores/cart';

const cartStore = useCartStore()

defineProps<{ product: Product }>()



const addToCart = (product: Product) => {
	cartStore.addToCart(product)
}

</script>

<style scoped>
.product-card {
	display: flex;
	flex-direction: column;
	margin-bottom: 0.5rem;
}

img {
	border-radius: 0.5rem;
}

button {
	padding: 0.75rem 1.75rem;
	border-radius: 1000px;
	margin-top: -1.5rem;
	margin-inline: auto;
	border: 1px solid hsl(var(--clr-neutral-400));
	background-color: #fff;
	color: hsl(14, 65%, 9%);
	font-size: 0.875rem;
	gap: 0.5rem;
}

.product-category {
	color: hsl(var(--clr-neutral-400));
	font-size: 0.875rem;
	margin-top: 1rem;
	margin-bottom: 0.25rem;
}

.product-name {
	font-size: 1rem;
	font-weight: 600;
}

.product-price {
	color: hsl(var(--clr-red));
	font-weight: 600;
	margin-top: 0.25rem;
}
</style>