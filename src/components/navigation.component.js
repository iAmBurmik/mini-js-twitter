import { Component } from "../core/component"; // импортируем наш базовый класс

export class NavigationComponent extends Component { // экспортируем класс с навигацией, который наследуется от класса Component
    constructor(id) { // конструктор принимает id елемента
        super(id); // вызываем конструктор базового класса

        this.tabs = []; // создаем пустой массив, где будут елементы навигации
    }

    init() { // инициализируем метод init
        this.$el.addEventListener('click', tabClickHandler.bind(this)) // проверяем наше меню на клик
    }

    registerTabs(tabs) { // метод registerTabs, который принимает в себя массив
        this.tabs = tabs // заносим табы в наш пустой массив
    }
}

function tabClickHandler(event) { 
    event.preventDefault(); // отменяем дефолтное поведение при клике (перезагрузку страницы)
    if(event.target.classList.contains('tab')) { // если клик был по меню, с классом tab
        Array.from(this.$el.querySelectorAll('.tab')).forEach(tab => { // делаем массив из наших табов
            tab.classList.remove('active'); // убираем класс active
        })
        event.target.classList.add('active'); // добавляем класс active элементу, по которому был клик

        const activeTab = this.tabs.find(t => t.name === event.target.dataset.name); // находим имя таба, по которому кликнули
        this.tabs.forEach(t => t.component.hide()) // скрываем все табы
        activeTab.component.show(); // показываем всю информацию в табе, по которому кликнули
    }

}