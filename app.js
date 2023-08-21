const input = document.querySelector('#fruit')
const suggestions = document.querySelector('ul')

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];
let newFruit = []

input.addEventListener('keyup', search)

// Function that takes input on search bar. Filters thru fruit array using input value
function search() {
	const inputText = input.value.toLowerCase()

	suggestions.innerHTML = ''

	if (inputText.length === 0) {
		suggestions.style.display = 'none'
		return
	}

	let sameSuggestion = fruit.filter(item => item.toLowerCase().includes(inputText)) 

	if (sameSuggestion.length === 0) {
		suggestions.style.display = 'none'
		return
	}

	suggestions.style.display = 'block'
	newFruit = sameSuggestion
	showSuggestions()
}

// Iterates thru new array. appends values to UL as a LI
function showSuggestions() {
	newFruit.forEach(item => {
		const li = document.createElement('li')
		li.textContent = item
		suggestions.appendChild(li)
	})
}

suggestions.addEventListener('click', function(e) {
	if (e.target.tagName === 'LI') {
		let text = e.target.textContent 
		input.value = text
		suggestions.style.display = 'none'
	}
})
 