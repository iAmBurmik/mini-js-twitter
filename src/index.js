// первый шаг, пишем в терминал команду "npm init"
// папка src - в ней находятся все исходные коды нашего приложения
// затем прописываем команду "npm install webpack webpack-dev-server webpack-cli -D"

import {HeaderComponent} from './components/header.component'; // импортируем класс HeaderComponent
const header = new HeaderComponent('header'); // создаем новый экземпляр класса и передаем наш id

import { NavigationComponent } from './components/navigation.component'; // импортируем класс NavigationComponent
import { LoaderComponent } from './components/loader.component'; // импортируем класс LoaderComponent
const navigation = new NavigationComponent('navigation'); // создаем новый экземпляр класса и передаем наш id
const loader = new LoaderComponent('loader'); // создаем новый экземпляр класса и передаем наш id

import { CreateComponent } from './components/create.component'; // импортируем класс CreateComponent
import { PostsComponent } from './components/posts.component'; // импортируем класс PostsComponent
import { FavoriteComponent } from './components/favorite.component'; // импортируем класс FavoriteComponent

const posts = new PostsComponent('posts', {loader}) // создаем новый экземпляр класса и передаем наш id и лоадер
const create = new CreateComponent('create') // создаем новый экземпляр класса и передаем наш id
const favorite = new FavoriteComponent('favorite', {loader}) // создаем новый экземпляр класса и передаем наш id

navigation.registerTabs([ // вызываем метод registerTabs, в котором будет имя и компонент
    {name:'create', component: create},
    {name:'posts', component: posts},
    {name:'favorite', component: favorite}
])