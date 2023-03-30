export class Component { // создаем и экспортируем класс для создания елементов и с множеством методов
    constructor(id) { // конструктор принимает id елемента
        this.$el = document.getElementById(id) // забираем наш елемент
        this.init() // вызываем метод инит, у всех он будет разный
    }

    init () {} // метод init

    onShow() {}

    onHide() {}

    hide() { // метод для скрытия елементов
        this.$el.classList.add('hide');
        this.onHide();
    }

    show() { // метод для показа елементов
        this.$el.classList.remove('hide');
        this.onShow();
    }
}