import { Component } from "../core/component"; // импортируем наш базовый класс
import { Form }  from '../core/form';
import { Validators } from '../core/validators'
import { apiService } from '../services/api.service'

export class CreateComponent extends Component { // экспортируем класс с созданием, который наследуется от класса Component
    constructor(id) { // конструктор принимает id елемента
        super(id); // вызываем конструктор базового класса
    }

    init() { // метод init
        this.$el.addEventListener('submit', submitHandler.bind(this)) // добавляем событие submit
        this.form = new Form(this.$el, { // создаем новый экземпляр класса: передаем нашу форму и объект
            title: [Validators.required], // наш тайтл
            fulltext: [Validators.required, Validators.minLength(10)] // и текст
        })
    }
}

async function submitHandler(event) { // функция submitHandler
    event.preventDefault();
    if(this.form.isValid()) { // проверяем валидна ли наша форма
        const formData = { // объект formData
            type: this.$el.type.value, // тип поста
            date: new Date().toLocaleDateString(),
            ...this.form.value() // вызываем метод value у формы
        }
        await apiService.createPost(formData); // вызываем метод createPost, отправляет форму в базу данных
        this.form.clear(); // после нажатия на кнопку и проверки на валидность очищаем форму
        alert('Запись создана в базе данных');
    }
}