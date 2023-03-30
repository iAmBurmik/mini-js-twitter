class ApiService { // класс ApiService
    constructor(baseUrl) { // принимаем ссылку на базу данных
        this.url = baseUrl; // присваиваем значение
    }

    async createPost(post) { // метод createPost, принмаем данные
        try { // пытаемся
            const request = new Request(this.url + '/posts.json', { // создаем Request куда передаем ссылку и объект
                method: 'post', // метод - post
                body: JSON.stringify(post) // содержимое - наша форма
            })
            return useRequest(request); // возвращаем функцию useRequest
        } catch (error) { // в случае ошибки
            console.error(error) // выводим ошибку
        }
        
    }

    async fetchPosts() { // метод fetchPosts
        try { // пытаемся
            const request = new Request(`${this.url}/posts.json`, { // создаем Request куда передаем ссылку и объект 
                method: 'get' // метод для получения информации
            })
            return useRequest(request); // возвращаем функцию useRequest 
        } catch(error) { // в случае ошибки
            console.error(error); // выводим ошибку
        }
    }

    async fetchPostsById (id) { // метод fetchPostsById
        try { // пытаемся
            const request = new Request(`${this.url}/posts/${id}.json`, { // создаем Request куда передаем ссылку на id и объект 
                method: 'get' // метод для получения информации
            })
            return useRequest(request); // возвращаем функцию useRequest 
        } catch(error) { // в случае ошибки
            console.error(error); // выводим ошибку
        }
    }
}

async function useRequest(request) { // функция useRequest
    const response = await fetch(request); // делаем запрос на сервер 
    return await response.json(); // возвращаем нашу форму в виде json
}

export const apiService = new ApiService('https://js-practice2-default-rtdb.firebaseio.com'); // объект apiService