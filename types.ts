interface Image {
	thumbnail: string
	mobile: string
	tablet: string
	desktop: string
}

export interface Product {
	id: number
	image: Image
	name: string
	category: string
	price: number
}