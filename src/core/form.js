export class Form { // экспортируем класс формы
    constructor(form, contorls) { // принимаем форму и объект
        this.form = form; // присваиваем значения
        this.contorls = contorls; // присваиваем значения
    }

    value() { // метод value
        const value = {} // пустой объект

        Object.keys(this.contorls).forEach(control => { // перебираем наш contorls, в котором тайтл и текст
            value[control] = this.form[control].value; // в переменную заносим значения
        })

        return value; // возвращаем объект
    }

    clear() { // метод clear
        Object.keys(this.contorls).forEach(control => { // перебираем наш contorls, в котором тайтл и текст
            this.form[control].value = ''; // в переменную заносим значения пустые значения, чтобы очистить форму
        })
    }

    isValid() { // метод isValid
        let isFormValid = true; // переменная валидности формы

        Object.keys(this.contorls).forEach(control => { // перебираем наш contorls, в котором тайтл и текст
            const validators = this.contorls[control]; // заносим в переменную наш массив из объекта
            let isValid = true; // создаем переменную, чтобы проверить каждый control
            validators.forEach(validator => { // перебираем массив
                isValid = validator(this.form[control].value) && isValid; // вызываем метод в который передаем содержимое инпута и тд
            })
            if (!isValid) { // если control не валиден
                clearControl(this.form[control]) // очищаем control
                this.form[control].insertAdjacentHTML('afterend', `<p class="validation-error"> Введите корректное значение </p>`); // добавляем текст
                this.form[control].classList.add('invalid'); // добавляем класс invalid для control
            } else { // если control валиден 
                clearControl(this.form[control]) // очищаем control
            }
            isFormValid = isFormValid && isValid; // проверка на то, валидна ли форма
        })

        
        return isFormValid; // возвращаем true или false в зависимости от того, валидна форма или нет
    }
}

function clearControl($control) { // функция для очистки контрола
    $control.classList.remove('invalid'); // убираем класс invalid
    if($control.nextSibling) { // если есть тег p
        $control.closest('.form-control').removeChild($control.nextSibling); // то убираем этот тег p
    }
}