import type { Product } from '~/types'

export const useCartStore = defineStore('cart', {
	state: () => ({
		items: [] as { product: Product; quantity: number }[],
	}),

	getters: {
		totalPrice: (state) =>
			state.items.reduce(
				(total, item) => total + item.product.price * item.quantity,
				0
			),
		totalQuantity: (state) =>
			state.items.reduce((total, item) => total + item.quantity, 0),
	},

	actions: {
		addToCart(product: Product) {
			const item = this.items.find((item) => item.product.name === product.name)
			if (item) {
				item.quantity++
			} else {
				this.items.push({ product, quantity: 1 })
			}
		},

		removeFromCart(productId: number) {
			const index = this.items.findIndex(
				(item) => item.product.id === productId
			)
			if (index !== -1) {
				this.items.splice(index, 1)
			}
		},

		updateQuantity(productId: number, quantity: number) {
			const item = this.items.find((item) => item.product.id === productId)
			if (item) {
				item.quantity = quantity
			}
		},
	},
})
