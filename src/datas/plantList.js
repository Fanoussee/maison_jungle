import monstera from '../assets/monstera.jpg'
import lyrata from '../assets/lyrata.jpg'
import pothos from '../assets/pothos.jpg'
import succulent from '../assets/succulent.jpg'
import olivier from '../assets/olivier.jpg'
import basil from '../assets/basil.jpg'
import mint from '../assets/mint.jpg'
import calathea from '../assets/calathea.jpg'
import cactus from '../assets/cactus.jpg'

export const plantList = [
	{
		name: 'Monstera',
		category: 'Classique',
		id: '1ed',
		light: 2,
		water: 3,
		cover: monstera,
		price: 15, 
		isSpecialOffer: true,
		isBestSale: true
	},
	{
		name: 'Ficus Lyrata',
		category: 'Classique',
		id: '2ab',
		light: 3,
		water: 1,
		cover: lyrata,
		price: 16
	},

	{
		name: 'Pothos Argenté',
		category: 'Classique',
		id: '3sd',
		light: 1,
		water: 2,
		cover: pothos,
		price: 9,
		isSpecialOffer: true
	},
	{
		name: 'Calathea',
		category: 'Classique',
		id: '4kk',
		light: 2,
		water: 3,
		cover: calathea,

		price: 20
	},
	{
		name: 'Olivier',
		category: 'Extérieur',
		id: '5pl',
		light: 3,
		water: 1,
		cover: olivier,
		price: 25
	},

	{
		name: 'Cactus',
		category: 'Plante grasse',
		id: '8fp',
		light: 2,
		water: 1,
		cover: cactus,
		price: 6,
		isSpecialOffer: true,
		isBestSale: true
	},
	{
		name: 'Basilique',
		category: 'Extérieur',
		id: '7ie',
		light: 2,
		water: 3,
		cover: basil,
		price: 5,
		isBestSale: true
	},
	{
		name: 'Succulente',
		category: 'Plante grasse',
		id: '9vn',
		light: 2,
		water: 1,
		cover: succulent,
		price: 8,
		isSpecialOffer: true
	},

	{
		name: 'Menthe',
		category: 'Extérieur',
		id: '6uo',
		light: 2,
		water: 2,
		cover: mint,
		price: 4,
		isSpecialOffer: true,
		isBestSale: true
	}
]