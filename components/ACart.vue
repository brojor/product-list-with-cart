<template>
	<div class="cart">
		<h2>Your Cart ({{ cartStore.totalQuantity }})</h2>
		<div v-if="isEmpty" class="empty-cart">
			<IlustrationEmptyCart />
			<p>Your added items will appear here</p>
		</div>
		<template v-else>
			<ul>
				<CartItem v-for="item in cartStore.items" :key="item.product.id" :item="item" />
			</ul>
			<div class="order-total">
				<span>Order Total</span>
				<span>{{ formatPrice(cartStore.totalPrice) }}</span>
			</div>
			<div class="delivery-info">
				<IconsCarbonNeutral />
				<p>This is a <strong>carbon-neutral</strong> delivery</p>
			</div>
			<button @click="$emit('submit')">Confirm Order</button>
		</template>
	</div>
</template>

<script setup lang="ts">
import { useCartStore } from '~/stores/cart';

defineEmits(['submit']);

const cartStore = useCartStore()
const isEmpty = computed(() => cartStore.items.length === 0)
</script>

<style scoped>
.cart {
	background-color: #fff;
	border-radius: 0.75rem;
	padding: 1.5rem;
}

.empty-cart {
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-bottom: 1rem;
}

h2 {
	color: hsl(var(--clr-red));
	font-size: 1.5rem;
	line-height: 1.5;
	align-self: flex-start;
}

.empty-cart p {
	color: hsl(var(--clr-neutral-400));
	font-size: 0.875rem;
	font-weight: 600;
	margin-top: 1rem;
}

.empty-cart svg {
	margin-top: 2.35rem;
}

ul {
	padding: 0.5rem 0
}

.order-total {
	margin-top: 1.5rem;
	font-size: 0.8125rem;
	font-weight: 400;
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.order-total>span:last-child {
	font-size: 1.5rem;
	font-weight: 700;
}

.delivery-info {
	font-size: 0.875rem;
	color: hsl(var(--clr-neutral-900));
	background-color: hsl(var(--clr-neutral-100));
	padding: 1rem 2rem;
	border-radius: 0.5rem;
	margin-block: 1.5rem;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 0.5rem;
}

strong {
	font-weight: 600;
}

button {
	background-color: hsl(var(--clr-red));
	color: #fff;
	font-size: 1rem;
	padding-block: 1rem;
	width: 100%;
	text-align: center;
	border-radius: 1000px;
}

button:hover,
button:focus-visible {
	background-color: hsl(var(--clr-red-dark));
}
</style>