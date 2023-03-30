export class TransformService { // экспортируем класс TransformService
    static fbObjectToArray(fbData) { // статический метод fbObjectToArray
        return Object.keys(fbData).map(key => { // возвращаем новый массив, где перебираем наши ключи
            const item = fbData[key]; // заносим в переменную item данные
            item.id = key; // добавляем id каждого ключа
            return item; // возвращаем item
        })
    }
}