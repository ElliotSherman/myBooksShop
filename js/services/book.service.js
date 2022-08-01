'use strict'

const STORAGE_KEY = 'bookDB'
const PAGE_SIZE = 10
const BOOKS_POPULATION = 30

var gBooks
var gPageIdx = 0
var gFilterBy = { maxPrice: 60, minRating: 0, txt: '' }

_createBooks()

function getBooksForDisplay() {
    console.log(gFilterBy)
    var books = gBooks.filter(book => book.price <= gFilterBy.maxPrice && book.rating >= gFilterBy.minRating && book.title.includes(gFilterBy.txt.toLowerCase()))
    const startIdx = gPageIdx * PAGE_SIZE
    books = books.slice(startIdx, startIdx + PAGE_SIZE)
    return books
}

function nextPage() {
    gPageIdx++
    if (gPageIdx * PAGE_SIZE >= gBooks.length) {
        gPageIdx = 0
    }
}

function _createBook() {
    return {
        // id, name, price, imgUrl
        id: ++idCount,
        title: _makeBookTitle(),
        price: makeRandomPrice(),
        imageURL: `https://picsum.photos/id/${idCount}/150/200`,
        rating: randInt()
    }
}

function _createBooks() {
    var books = loadFromStorage(STORAGE_KEY)

    if (!books || !books.length) {
        books = []
        for (var i = 0; i < BOOKS_POPULATION; i++) {
            books[i] = _createBook()
        }
    }
    gBooks = books
    _saveBooksToStorage()
}

function _saveBooksToStorage() {
    saveToStorage(STORAGE_KEY, gBooks)
}

function bookDetails(bookId) {
    console.log('book details');

}

function deleteBook(bookId) {
    const bookIdx = gBooks.findIndex(book => bookId === book.id)
    console.log('book idx: ', bookIdx, 'book ID: ', bookId);
    gBooks.splice(bookIdx, 1)
    _saveBooksToStorage()
}

function setBookFilter(filterBy = {}) {
    if (filterBy.maxPrice !== undefined) gFilterBy.maxPrice = filterBy.maxPrice //console.log(filterBy);
    if (filterBy.rating !== undefined) gFilterBy.minRating = filterBy.rating
    return gFilterBy
}

// function setBookSort(sortBy = {}){
//     if(!sortBy.maxPrice){
//         gBooks.sort((b1 , b2)=>{
//             b1.price - b2.price // ascend descend
//         })
//     }else if(!sortBy.rating){
//         gBooks.sort((b1 , b2)=>{
//             b1.rating - b2.rating // ascend descend
//         })
//     }
// }

function searchByTitle(txt) {
    gFilterBy.txt = txt
}