/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

// Возьмите свой код из предыдущей практики

'use strict';

document.addEventListener('DOMContentLoaded', () => {

    const movieDB = {
        movies: [
            "Логаннн",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };
    
    const removePromoAdv = document.querySelectorAll('.promo__adv img'),
          replaceBackground = document.querySelector('.promo__bg'),
          changeGenre = replaceBackground.querySelector('.promo__genre'),
          interactiveList = document.querySelector('.promo__interactive-list'),
          addForm = document.querySelector('.add'),
          input = addForm.querySelector(".adding__input"),
          checkbox = addForm.querySelector('[type="checkbox"]');
          
      
    const deleteAdv = (arr) => {
        arr.forEach(item => {         
            item.remove();
        });
    };

    const makeChanges = (genre, bgc) => {
        genre.textContent = 'драма';  
        
        bgc.style.backgroundImage = 'url("img/bg.jpg")';
    };

    const sortArr = (arr) => {
        arr.sort();
    };

    addForm.addEventListener('submit', (event) => {
        event.preventDefault();

        let newFilm = input.value;
        const favoriteFilm = checkbox.checked;

        if (newFilm) {
            if (newFilm.length > 21) {
                newFilm = `${newFilm.slice(0, 22)}...`;
            }
            movieDB.movies.push(newFilm);
            sortArr(movieDB.movies);
            createMovieList(movieDB.movies, interactiveList);
            event.target.reset();
        }

        if (favoriteFilm) {
            console.log('Добавляем любимый фильм');
        }
    });
    
    function createMovieList(films, parent) {
        sortArr(films);

        parent.innerHTML = "";

        films.forEach((film, i) => {
            
            parent.innerHTML += `
                <li class="promo__interactive-item">${i + 1}. ${film}
                    <div class="delete"></div>
                </li>   
            `;
        });
        const deleteForm = document.querySelectorAll('.delete');
        deleteForm.forEach((basket, i) => {
            basket.addEventListener('click', () => {
                basket.parentElement.remove();
                movieDB.movies.splice(i, 1);

                createMovieList(films, parent);
            });
        });
    }
    createMovieList(movieDB.movies, interactiveList);
    deleteAdv(removePromoAdv);
    makeChanges(changeGenre, replaceBackground);
    
});





