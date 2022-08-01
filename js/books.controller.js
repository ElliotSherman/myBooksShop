'use strict'

const imgLink = 'https://picsum.photos/200/150'

console.log('controller');


onInit()

function renderBooks() {
    const books = getBooksForDisplay()

    var strBookCardsHtml = ''
    books.map((book) => {
        strBookCardsHtml +=
            `<div class="book-card">\n
            <div class="book-card-details">\n
            <div class="book-card-img">\n
                <img src="${book.imageURL}" alt="pic of ${book.title} book cover">\n
            </div>\n
            <div class="book-card-text">\n
                <h3 class="book-card-title">${book.title}</h3>\n
                <p class="book-card-rating">${book.rating}</p>\n
                <p class="book-card-price">${book.price}</p>\n
            </div>\n
            </div>\n
            <div class="book-card-btns">\n
                <button class="book-card-btn btn-details" onclick="onBookDetails('${book.id}')">ℹ️ Details</button>\n
                <button class="book-card-btn btn-edit" onclick="onEditBook('${book.id}')">✏️ Edit</button>\n
                <button class="book-card-btn btn-delete" onclick="onDeleteBook('${book.id}')">🗑️ Delete</button>\n
        </div>\n
    </div>\n`
    }).join('')
    document.querySelector('main').innerHTML = strBookCardsHtml
}

function onInit() {
    renderBooks()
}

function onClickAddBook(e) {
    console.log('adding book');

}

function onBookDetails(bookId) {
    bookDetails(+bookId)
}

function onBookEdit(bookId) {
    console.log('editing');
    // BookEdit(+bookId)
}

function onDeleteBook(bookId) {
    console.log('deleting');
    deleteBook(+bookId)
    renderBooks()
    flashMsg(`Book Deleted`)

}

function onPageNav(e) {
    console.log('naving to another page');
}

function onNextPage() {
    nextPage()
    renderBooks()
}

function flashMsg(msg) {
    const el = document.querySelector('.user-msg')
    el.innerText = msg
    el.classList.add('open')
    setTimeout(() => {
        el.classList.remove('open')
    }, 3000)
}

function onSearchByTitle(txt) {
    searchByTitle(txt)
    renderBooks()
}

function onSetFilterBy(filterBy) {
    filterBy = setBookFilter(filterBy)
    renderBooks()

    // const queryStringParams = `?vendor=${filterBy.vendor}&minSpeed=${filterBy.minSpeed}`
    // const newUrl = window.location.protocol + "//" + window.location.host + window.location.pathname + queryStringParams
    // window.history.pushState({ path: newUrl }, '', newUrl)
}

// function onSetSortBy(){

// }