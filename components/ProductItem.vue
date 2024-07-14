<template>
	<div class="product-card" :class="{ active: isActive  }">
		<picture>
			<source media="(min-width: 70rem)" :srcset="product.image.desktop">
			<source media="(min-width: 37.5rem)" :srcset="product.image.tablet">
			<img :src="product.image.mobile" :alt="product.name">
		</picture>
		<ProductButton :product="product" :isActive="isActive" />
		<p class="product-category">{{ product.category }}</p>
		<h3 class="product-name">{{ product.name }}</h3>
		<p class="product-price">{{ formatPrice(product.price) }}</p>
	</div>
</template>

<script setup lang="ts">
import type { Product } from '~/types'
import { useCartStore } from '~/stores/cart'

const props = defineProps<{ product: Product }>()

const cartStore = useCartStore()
const isActive = computed(() => cartStore.isInCart(props.product.id))
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

.product-card.active img {
	border: 2px solid hsl(var(--clr-red));
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