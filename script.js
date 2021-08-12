'use strict'

const booksList = document.querySelector('.books');
const books = document.querySelectorAll('.book');
const advertising = document.querySelector('.adv');
const bookThreeHeader = books[4].querySelector('a');
const bookTwoContents = books[0].querySelector('ul');
const bookTwoContentsList = books[0].querySelectorAll('li');
const bookFiveContents = books[5].querySelector('ul');
const bookFiveContentsList = books[5].querySelectorAll('li');
const bookSixContentsList = books[2].querySelectorAll('li');

const body = document.body;
// 1) восстанавливаем порядок книг
booksList.append(books[1]);
booksList.append(books[0]);
booksList.append(books[4]);
booksList.append(books[3]);
booksList.append(books[5]);
booksList.append(books[2]);
// 2) меняем фон body 
body.style.backgroundImage = 'url(./image/you-dont-know-js.jpg)';
// 3) bcghfdkztv название третьей книги
bookThreeHeader.textContent = 'Книга 3. this и Прототипы Объектов'
// 4) удаляем рекламу
advertising.remove();
// 5) восстанавливаем порядок глав 2ой книги
bookTwoContents.append(bookTwoContentsList[0]);
bookTwoContents.append(bookTwoContentsList[1]);
bookTwoContents.append(bookTwoContentsList[3]);
bookTwoContents.append(bookTwoContentsList[6]);
bookTwoContents.append(bookTwoContentsList[8]);
bookTwoContents.append(bookTwoContentsList[4]);
bookTwoContents.append(bookTwoContentsList[5]);
bookTwoContents.append(bookTwoContentsList[7]);
bookTwoContents.append(bookTwoContentsList[9]);
bookTwoContents.append(bookTwoContentsList[2]);
bookTwoContents.append(bookTwoContentsList[10]);
// 6) восстанавливаем порядок глав 5ой книги
bookFiveContents.append(bookFiveContentsList[0]);
bookFiveContents.append(bookFiveContentsList[1]);
bookFiveContents.append(bookFiveContentsList[9]);
bookFiveContents.append(bookFiveContentsList[3]);
bookFiveContents.append(bookFiveContentsList[4]);
bookFiveContents.append(bookFiveContentsList[2]);
bookFiveContents.append(bookFiveContentsList[6]);
bookFiveContents.append(bookFiveContentsList[7]);
bookFiveContents.append(bookFiveContentsList[5]);
bookFiveContents.append(bookFiveContentsList[8]);
bookFiveContents.append(bookFiveContentsList[10]);
// 7) добавляем 8ую главу в 6ой книге
const chapterEight = document.createElement('li');
chapterEight.textContent = 'Глава 8: За пределами ES6';
bookSixContentsList[8].after(chapterEight);







