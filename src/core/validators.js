export class Validators { // экспортируем класс валидатор
    static required(value = '') { // статический метод required, по умолчанию пустая строка
        return value && value.trim() // обычная проверка на то, имеется ли текст
    }

    static minLength(length) { // статический метод minLength, принимает минимальное количество символов
        return value => { // возвращаем функцию 
            return value.length >= length; // сравниваем количество символов
        }
    }
}