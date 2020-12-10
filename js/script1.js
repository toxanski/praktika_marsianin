/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логаннн",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};


const promoAdv = document.querySelectorAll('.promo__adv img'),
      poster = document.querySelector('.promo__bg'),
      genre = poster.querySelector('.promo__genre'),
      films = document.querySelector('.promo__interactive-list');
      


promoAdv.forEach(item => {
    item.remove();
});

genre.textContent = 'драма';

// poster.style.cssText = 'background-image: url("img/bg.jpg")';
poster.style.backgroundImage = 'url("img/bg.jpg")';


films.innerHTML = "";

movieDB.movies.sort();

movieDB.movies.forEach((item, i) => {
    films.innerHTML += `
    <li class="promo__interactive-item">${i}. ${item}
        <div class="delete"></div>
    </li>`; 
});

