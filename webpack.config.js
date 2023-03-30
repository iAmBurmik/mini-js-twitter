// тут у нас будут конфигурация для вебпака

const HTMLPlugin = require('html-webpack-plugin') // подключаем класс, скаченный нами плагин

module.exports = {
    entry: ['@babel/polyfill', './src/index.js'], // путь к входной точке нашего приложения
    output: { // место, куда надо складывать скрипты
        path: __dirname + '/dist', // в папку дист 
        filename: 'bundle.js' // в файл bundle
    },
    devServer: { // сервер для разработки
        static: __dirname + '/dist' // путь к папке, где нужно запускать наш сервер
    },
    plugins: [ // поле для добавления плагинов
        new HTMLPlugin({ // создаем экземпляр класса, в который передаем объект
            filename: 'index.html', // название выходного файла
            template: './src/index.html' // путь в файл, с которого берем HTML
        })
    ],
    resolve: {
        extensions: ['.js'] // не обязательно писать .js
    },
    module: {
        rules: [ // прописываем правила для babel
          {
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            }
          }
        ]
      }
}
// после этого вводим команду "$(npm bin)/webpack" и выбираем мод $(npm bin)/webpack --mode development  
// npm run start - запуск проекта