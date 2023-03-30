export function renderPost(post, options = true) { // функция renderPost
    const tag = post.type === 'news' // если тип тега новость
        ? '<li class="tag tag-blue tag-rounded">Новость</li>' // тогда название тега новость
        : '<li class="tag tag-rounded">Заметка</li>' // если нет, тогда - заметка

    const favorites = JSON.parse(localStorage.getItem('favorites')) || [] // заносим в переменную данные из localStorage

    const button = favorites.find(p => p.id === post.id) // если находим id, то кнопка удалить, если нет, то добавить
    ? `<button class="button-round button-small button-danger" data-id="${post.id}" data-title="${post.title}">Удалить</button>` // добавдяем кнопку сохранить
    : `<button class="button-round button-small button-primary" data-id="${post.id}" data-title="${post.title}">Сохранить</button>`
    return `
    <div class="panel">
      <div class="panel-head">
        <p class="panel-title">${post.title}</p>
        <ul class="tags">
          ${tag}
        </ul>
      </div>
      <div class="panel-body">
        <p class="multi-line">${post.fulltext}</p>
      </div>
      <div class="panel-footer w-panel-footer">
        <small>${post.date}</small>
        ${options ? button : ''}
      </div>
    </div>
    `
}