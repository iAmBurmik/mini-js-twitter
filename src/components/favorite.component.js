import { Component } from "../core/component"; // импортируем наш базовый класс
import { apiService } from "../services/api.service"; // импортируем apiService
import { renderPost } from '../templates/post.template' // импортируем renderPost

export class FavoriteComponent extends Component { // экспортируем класс с избранным, который наследуется от класса Component
    constructor(id, options) { // конструктор принимает id елемента
        super(id); // вызываем конструктор базового класса

        this.loader = options.loader;
    }

    init() {
        this.$el.addEventListener('click', linkClickHandler.bind(this)) // добавляем событие клика
    }

    onShow() { // метод onShow
        const favorites  = JSON.parse(localStorage.getItem('favorites')); // забираем из localStorage наши ключи
        const html = renderLIst(favorites); // вызываем функцию renderLIst
        this.$el.insertAdjacentHTML('afterbegin', html); // вставляем наши списки
    }
    
    onHide() { // метод onHide
        this.$el.innerHTML = ''; // чистим содержимое
    }
} 

async function linkClickHandler(event) { // функция linkClickHandler
    event.preventDefault(); // убираем событие по дефолту

    if(event.target.classList.contains('js-link')) { // если у элемента по которому кликнули есть класс js-link
        const postId = event.target.dataset.id; // записываем в переменную id
        this.$el.innerHTML = '' // чистим html
        this.loader.show(); // показываем лоадер
        const post = await apiService.fetchPostsById(postId); // делаем запрос на сервер по id
        this.loader.hide(); // скрываем лоаде
        this.$el.insertAdjacentHTML('afterbegin', renderPost(post, false)); // рендерим посты
    }
}

function renderLIst(list = [],) { // принимаем массив
    if(list && list.length) { // если в массиве есть что-то
        return `
        <ul>
            ${list.map(item => `<li><a href="#" class="js-link" data-id="${item.id}">${item.title}</a></li>`).join('')}
        </ul>
        `
    } // возвращаем список с нашими id
    
    return `<p class="center">Вы пока ничего не добавили</p>`; // если ничего нет, выводим такую надпись
}