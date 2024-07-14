<template>
	<li>
		<img :src="item.product.image.thumbnail" :alt="item.product.name">
		<div>
			<h3>{{ item.product.name }}</h3>
			<span class="quantity">{{ item.quantity }}x</span>
			<span class="price">@ {{ formatPrice(item.product.price) }}</span>
		</div>
		<span class="total-price">{{ formatPrice(item.product.price * item.quantity) }}</span>
	</li>
</template>

<script setup lang="ts">
import type { Product } from '~/types';

defineProps<{
	item: {
		product: Product;
		quantity: number;
	}
}>();


</script>

<style scoped>
li {
	display: flex;
	gap: 1rem;
	padding-bottom: 1rem;
	margin-bottom: 1rem;
	border-bottom: 1px solid hsl(var(--clr-neutral-400)/.25);
}

img {
	width: 3rem;
	aspect-ratio: 1;
	border-radius: 0.25rem;
}

h3 {
	font-size: 0.875rem;
	font-weight: 600;
	margin-bottom: 0.375rem;
}

.quantity {
	font-size: 0.875rem;
	color: hsl(var(--clr-red));
	font-weight: 600;
	line-height: 1;
}

.price {
	margin-left: 1rem;
	font-size: 0.875rem;
	color: hsl(var(--clr-neutral-400));
}

.total-price {
	margin-left: auto;
	font-weight: 600;
	align-self: center;
}

</style>