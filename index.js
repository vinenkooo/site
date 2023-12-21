function add_post(post) {
    // Создаем элементы для заголовка и текста поста
    var postElement = document.createElement('div');
    var titleElement = document.createElement('h2');
    var bodyElement = document.createElement('p');

    // Устанавливаем текст для заголовка и текста
    titleElement.textContent = post.title;
    bodyElement.textContent = post.body;

    // Добавляем заголовок и текст в элемент поста
    postElement.appendChild(titleElement);
    postElement.appendChild(bodyElement);

    // Добавляем класс 'post' для стилей
    postElement.classList.add('post');

    // Добавляем элемент поста на страницу
    document.getElementById('posts').appendChild(postElement);
    }

    // Запрос на получение данных
fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((json) => json.forEach((post) => add_post(post)));

document.querySelector('.arrow-up').addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
});