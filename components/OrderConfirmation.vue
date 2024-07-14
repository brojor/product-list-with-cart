<template>
	<div class="backdrop">
		<div class="content">
			<IconsOrderConfirmation />
			<h2>Order Confirmed</h2>
			<p>We hope you enjoy your food!</p>
			<div>
				<ul>
					<OrderConfirmationItem v-for="item in cartStore.items" :key="item.product.id" :item="item" />
				</ul>
				<div class="total-price">
					<span>Order Total</span>
					<span>{{ formatPrice(cartStore.totalPrice) }}</span>
				</div>
			</div>
			<button @click="handleSubmit">Start New Order</button>
		</div>
	</div>
</template>


<script setup lang="ts">
import { useCartStore } from '~/stores/cart'

const cartStore = useCartStore()
const emit = defineEmits(['submit'])

const handleSubmit = () => {
	emit('submit')
	cartStore.clearCart()
}

</script>


<style scoped>
.backdrop {
	position: fixed;
	inset: 0;
	background-color: rgba(0, 0, 0, 0.5);
	display: flex;
	justify-content: center;
	align-items: center;
}

.content {
	width: 100%;
	max-width: 37rem;
	background-color: #fff;
	border-radius: 0.75rem;
	padding: 2.5rem;
}

.content>div {
	margin-top: 2rem;
	background-color: hsl(var(--clr-neutral-100));
	padding: 1.5rem;
	border-radius: 0.5rem;
	max-height: 60vh;
	overflow-y: auto;
}

h2 {
	font-size: 2.5rem;
	font-weight: 700;
	margin-top: 1rem;
}

p {
	color: hsl(var(--clr-neutral-400));
	margin-top: 0.5rem;
}

.total-price {
	display: flex;
	justify-content: space-between;
	align-self: center;
	margin-top: 2rem;
}

.total-price>span:first-child {
	line-height: 2;
	font-size: 0.875rem;
}

.total-price>span:last-child {
	font-size: 1.5rem;
	font-weight: 700;
}

button {
	width: 100%;
	background-color: hsl(var(--clr-red));
	color: #fff;
	padding: 1rem;
	border-radius: 1000px;
	margin-top: 2rem;
}
</style>