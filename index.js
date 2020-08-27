function fetchBooks() {
  return fetch('https://anapioficeandfire.com/api/books')
  .then(resp => resp.json())
  .then(json => renderBooks(json));

}

function renderBooks(books) {
  const main = document.querySelector('main')
  books.forEach(book => {
    const h2 = document.createElement('h2')
    h2.innerHTML = book.name
    main.appendChild(h2)
  })
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks()
})

// pokemon api

// function fetchPokemon() {
//   return fetch('https://pokeapi.co/api/v2/pokemon')
//   .then(resp => resp.json())
//   .then(json => renderPokemon(json));

// }

// function renderPokemon(pokes) {
//   const main = document.querySelector('main')
//   total = pokes["results"]
//   total.forEach(poke => {
//     const h2 = document.createElement('h2')
//     h2.innerHTML = poke.name
//     main.appendChild(h2)
//   })
// }

// document.addEventListener('DOMContentLoaded', function() {
//   fetchPokemon()
// })
