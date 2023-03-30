import { Component } from '../core/component' // импортируем наш базовый класс

export class HeaderComponent extends Component { // экспортируем класс с хедером, который наследуется от класса Component
    constructor(id) {  // конструктор принимает id елемента
        super(id); // вызываем конструктор базового класса
    }

    init() { // инициализируем метод init
        if(localStorage.getItem('visited')) { // если уже нажимали на кнопку приступить
            this.hide(); // скрываем наш header
        }
        const btn = this.$el.querySelector('.js-header-start'); // находим кнопку
        btn.addEventListener('click', buttonHandler.bind(this)); // при нажатии на кнопку вызываем функцию buttonHandler
    }
}

function buttonHandler() {
    localStorage.setItem('visited', true); // добавляем в локальное хранилище переменную для того, чтобы при перезагрузке страница оставалась такой же
    this.hide();// скрываем наш хедер
}