<template>
	<li>
		<div>
			<h3 class="name">Classic Tiramisu</h3>
			<p>
				<span class="amount">1x</span>
				<span class="unit-price">@ $5.50</span>
				<span class="total-price">$5.50</span>
			</p>
		</div>
		<button>
			<IconsRemoveItem />
		</button>
	</li>
</template>


<script setup lang="ts">

</script>


<style scoped>
li {
	padding: 1rem 0;
	border-bottom: 1px solid hsl(var(--clr-neutral-400)/.25);
	font-size: 0.875rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.name {
	font-size: inherit;
	font-weight: 600;
	margin-bottom: 0.5rem;
}

p {
	color: hsl(var(--clr-neutral-400));
}

.amount {
	color: hsl(var(--clr-red));
	font-weight: 600;
	margin-right: 1rem;
}

.unit-price {
	margin-right: 0.5rem;
}

.total-price {
	font-weight: 600;
}

button {
	background-color: transparent;
	color: hsl(var(--clr-neutral-400));
	cursor: pointer;
}

button:hover,
button:focus {
	color: hsl(var(--clr-neutral-900));
}
</style>