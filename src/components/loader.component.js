import { Component } from "../core/component"; // импортируем класс Component

export class LoaderComponent extends Component { // экспортируем класс LoaderComponent, который наследуется от класса Component
    constructor(id) { // конструктор принимает id
        super(id) // вызываем конструктор базового класса, куда передаем id
    }
}