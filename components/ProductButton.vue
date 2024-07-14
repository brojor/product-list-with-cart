<template>
	<button v-if="!isActive" @click="cartStore.addToCart(product)" class="button button-primary">
		<IconsAddToCart />
		Add to Cart
	</button>
	<div v-else class="button button-secondary">
		<button @click="cartStore.decrementQuantity(product.id)">
			<IconsDecrementQuantity />
		</button>
		<span>{{ cartStore.getQuantity(product.id) }}</span>
		<button @click="cartStore.incrementQuantity(product.id)">
			<IconsIncrementQuantity />
		</button>
	</div>
</template>


<script setup lang="ts">
import { useCartStore } from '~/stores/cart';
import type { Product } from '~/types';

defineProps<{ product: Product, isActive: boolean }>();

const cartStore = useCartStore()

</script>


<style scoped>
.button {
	width: 10rem;
	height: 2.75rem;
	border-radius: 1000px;
	margin-top: calc(-2.75rem / 2);
	margin-inline: auto;
}

.button-primary {
	border: 1px solid hsl(var(--clr-neutral-400));
	background-color: #fff;
	color: hsl(14, 65%, 9%);
	font-size: 0.875rem;
	gap: 0.5rem;
}

.button-primary:hover,
.button-primary:focus-visible {
	color: hsl(var(--clr-red));
	border-color: hsl(var(--clr-red));
}

.button-secondary {
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-size: 0.9375rem;
	font-weight: 600;
	background-color: hsl(var(--clr-red));
	color: #fff;
	padding-inline: 0.75rem;
}

.button-secondary button {
	border: 1px solid #fff;
	color: #fff;
	border-radius: 100%;
	width: 1.125rem;
	height: 1.125rem;
	display: flex;
}

.button-secondary button:hover,
.button-secondary button:focus-visible {
	background-color: #fff;
	color: hsl(var(--clr-red));
}
</style>