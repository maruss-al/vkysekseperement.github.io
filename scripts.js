// Функция для обработки нажатия на рецепт
function goToRecipe(recipe) {
    const recipeItem = document.getElementById(recipe);
    recipeItem.classList.add('animate');

    // Перенаправление через 1 секунду после анимации
    setTimeout(() => {
        window.location.href = 'рецепты/' + recipe + '.html'; // Переход на страницу с полным рецептом
    }, 1000); // 1000 мс = 1 секунда
}

// Функция для фильтрации рецептов
function filterRecipes() {
    const input = document.getElementById('searchInput');
    const filter = input.value.toLowerCase();
    const recipeList = document.getElementById('recipeList');
    const recipes = recipeList.getElementsByClassName('recipe-item');

    // Проходим по всем рецептам и скрываем или отображаем их
    for (let i = 0; i < recipes.length; i++) {
        const title = recipes[i].getElementsByClassName('recipe-title')[0].innerText.toLowerCase();
        const description = recipes[i].getElementsByClassName('recipe-description')[0].innerText.toLowerCase();
        
        if (title.includes(filter) || description.includes(filter)) {
            recipes[i].style.display = ""; // Показываем рецепт
        } else {
            recipes[i].style.display = "none"; // Скрываем рецепт
        }
    }
}

// Функция для переключения темы
document.getElementById('themeToggle').addEventListener('click', () => {
    const body = document.body;
    body.classList.toggle('dark'); // Переключаем класс 'dark'
    body.classList.toggle('light'); // Переключаем класс 'light'
    
    // Меняем текст кнопки в зависимости от текущей темы
    const themeToggleButton = document.getElementById('themeToggle');
    if (body.classList.contains('dark')) {
        themeToggleButton.innerText = 'Светлая тема'; // Если темная тема, показываем кнопку для переключения на светлую
    } else {
        themeToggleButton.innerText = 'Темная тема'; // Если светлая тема, показываем кнопку для переключения на темную
    }
});



