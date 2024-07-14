<template>
	<div class="cart">
		<h2>Your Cart (0)</h2>
		<div v-if="isEmpty" class="empty-cart">
			<IlustrationEmptyCart />
			<p>Your added items will appears here</p>
		</div>
		<template v-else>
			<ul>
				<CartItem />
				<CartItem />
				<CartItem />
			</ul>
			<div class="order-total">
				<span>Order Total</span>
				<span>$46.50</span>
			</div>
			<div class="delivery-info">
				<IconsCarbonNeutral />
				<p>This is a <strong>carbon-neutral</strong> delivery</p>
			</div>
			<button>Confirm Order</button>
		</template>
	</div>
</template>

<script setup lang="ts">
const isEmpty = ref(false)
</script>

<style scoped>
.cart {
	background-color: #fff;
	border-radius: 0.5rem;
	padding: 1.5rem;
}

.empty-cart {
	display: flex;
	flex-direction: column;
	align-items: center;
}

h2 {
	color: hsl(var(--clr-red));
	font-size: 1.5rem;
	align-self: flex-start;
}

.empty-cart p {
	color: hsl(var(--clr-neutral-400));
	font-size: 0.8125rem;
	letter-spacing: 0.25px;
	font-weight: 600;
	margin-top: 1rem;
}

.empty-cart svg {
	margin-top: 2.5rem;
}

ul {
	list-style: none;
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
</style>