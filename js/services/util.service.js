'use strict'

var idCount = 112

function makeId(length = 6) {
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    var txt = ''
    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return txt
}

function randInt(){
    return Math.floor(Math.random() * 11)+1
}

function makeRandomPrice() {
    return Math.floor(Math.random() * 60) + '.' + Math.floor(Math.random() * 100)
}

function _makeBookTitle() {
    const words = ['The sky', 'above', 'the port', 'was', 'the color of television', 'tuned', 'to', 'a dead channel', 'All', 'this happened', 'more or less', 'I', 'had', 'the story', 'bit by bit', 'from various people', 'as generally', 'happens', 'in such cases', 'each time', 'it', 'was', 'a different story', 'It', 'was', 'a pleasure', 'burn']
    const randIdx = () => Math.floor(Math.random() * words.length)
    const firstword = words[randIdx()]
    words.splice(words.indexOf(firstword), 1)
    const secondWords = words
    return `${firstword} ${secondWords[randIdx()]}`
}


function makeLorem(wordCount = 100) {
    const words = ['The sky', 'above', 'the port', 'was', 'the color of television', 'tuned', 'to', 'a dead channel', '.', 'All', 'this happened', 'more or less', '.', 'I', 'had', 'the story', 'bit by bit', 'from various people', 'and', 'as generally', 'happens', 'in such cases', 'each time', 'it', 'was', 'a different story', '.', 'It', 'was', 'a pleasure', 'to', 'burn']
    var txt = ''
    while (wordCount > 0) {
        wordCount--
        txt += words[Math.floor(Math.random() * words.length)] + ' '
    }
    return txt
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min //The maximum is inclusive and the minimum is inclusive 
}