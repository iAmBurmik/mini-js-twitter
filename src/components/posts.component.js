import { Component } from '../core/component'; // импортируем наш базовый класс
import { apiService } from '../services/api.service'; // импортируем apiService
import { TransformService } from '../services/transform.service' // импортируем TransformService
import { renderPost } from '../templates/post.template' // импортируем renderPost

export class PostsComponent extends Component { // экспортируем класс с постами, который наследуется от класса Component
    constructor(id, {loader}) { // конструктор принимает id елемента и объект loader
        super(id); // вызываем конструктор базового класса
        this.loader = loader; // присваиваем значение
    }

    init() { // метод init
        this.$el.addEventListener('click', buttonHandler.bind(this)) // добавляем событие клика по постам
    }

    async onShow() { // асинхронный метод onShow
        this.loader.show(); // показываем loader
        const fbData = await apiService.fetchPosts(); // вызываем метод fetchPosts, который принмает данный из БД
        const posts = TransformService.fbObjectToArray(fbData); // вызываем метод fbObjectToArray, куда передаем данные
        const html = posts.map(post => renderPost(post)); // перебираем массив и вызываем функцию renderPost
        this.loader.hide(); // скрываем loader
        this.$el.insertAdjacentHTML('afterbegin', html.join(' ')) // добавляем наш html на страницу
    }

    onHide() { // метод onHide
        this.$el.innerHTML = '' // очищаем страницу
    }
}



function buttonHandler(event) { // функция buttonHandler
    const $el = event.target; // смотрим по какому елементу был совершен клик
    const id = $el.dataset.id; // смотрим дата-атрибут id у елемента
    const title = $el.dataset.title;

    if(id) { // если есть елемент с дата-атрибутом id
        let favorites = JSON.parse(localStorage.getItem('favorites')) || []; // изначально в хранилище нет элементов с названием favorites, поэтому переменная это пустой массив
        var includes = favorites.find(p => p.id === id)
        if(includes) { // если уже есть такое id
            $el.textContent = 'Сохранить'; // то добавляем кнопку сохранить
            $el.classList.add('button-primary'); // добавляем класс button-primary
            $el.classList.remove('button-danger'); // убираем класс button-danger
            favorites = favorites.filter(p => p.id !== id) // фильтруем массив, если находим по которому был совершен клик, то не добавляем его
        } else { // если нет такого id
            $el.classList.remove('button-primary'); // убираем класс button-primary
            $el.classList.add('button-danger'); // добавляем класс button-danger
            $el.textContent = 'Удалить'; // меняем кнопку на удалить
            favorites.push({id, title}); // добавляем id в массив
        }

        localStorage.setItem('favorites', JSON.stringify(favorites)); // заносим массив favorites в localStorage
    }
}