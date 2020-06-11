# Timecafix - Dropdown List

Тестовое задание: сделать выпадающий список на React и styled-components + hedron, используя сторонний json как данные для генерации списка.
[Live demo](https://timecafix-filipenko.netlify.app/)

### Описание

1. Все кнопки кликабельные
2. При наведении все кнопки окрашиваются в #DF9047, при клике в #FFF, в idle состоянии остаются #FFF
3. Если у кнопки нет ссылки и функции, то она #CCC цвета
4. Высота всех кнопок: 2em
5. При клике на кнопку из выпадающего списка происходит переход на страницу из `url` и вызывается функция из `callback`
6. Для разметки используется Hedron
7. Для верстки используется styled-components
8. Для выделения элементов относительно фона рисуется ~~блюр~~ белая тень
9. В каждой кнопке отображается SVG-круг и меняется в зависимости от поведения кнопки
10. Пару простых тестов

### Пример JSON данных

https://www.npoint.io/docs/63ed3a290e62850efefd (его можно менять прямо там и данные изменятся в демке)

```json
{
  "name": "Dropdown list",
  "active": false,
  "list": [
    {
      "id": 1,
      "name": "My Telegram",
      "url": "https://t.me/lomeat",
      "callback": "function() { console.log('You already know my telegram contact :D'); }"
    },
    {
      "id": 2,
      "name": "My VK",
      "url": "https://vk.com/lomeat",
      "callback": "function() { console.log('Yeah, its my VK page. There I post soul`s music tracks and create author`s playlists'); }"
    },
    {
      "id": 3,
      "name": "Example Disabled Button",
      "url": null,
      "callback": null
    },
    {
      "id": 4,
      "name": "My art on Instagram",
      "url": "https://instagram.com/lomeat.art",
      "callback": "function() { console.log('You just visited page of my hobbie. Sometimes I draw these stickers when feel inspiration of my girl'); }"
    }
  ]
}
```
