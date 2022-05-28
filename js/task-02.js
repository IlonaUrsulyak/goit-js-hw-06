const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsPotatoesEl = document.createElement('li');
ingredientsPotatoesEl.textContent ='Potatoes';
ingredientsPotatoesEl.classList.add('ingredients-item');

const ingredientsMushroomsEl = document.createElement('li');
ingredientsMushroomsEl.textContent ='Mushrooms';
ingredientsMushroomsEl.classList.add('ingredients-item');

const ingredientsGarlicEl = document.createElement('li');
ingredientsGarlicEl.textContent ='Garlic';
ingredientsGarlicEl.classList.add('ingredients-item');

const ingredientsTomatoEl = document.createElement('li');
ingredientsTomatoEl.textContent ='Tomatos';
ingredientsTomatoEl.classList.add('ingredients-item');

const ingredientsHerbsEl = document.createElement('li');
ingredientsHerbsEl.textContent ='Herbs';
ingredientsHerbsEl.classList.add('ingredients-item');

const ingredientsCondimentsEl = document.createElement('li');
ingredientsCondimentsEl.textContent ='Condiments';
ingredientsCondimentsEl.classList.add('ingredients-item');

const ingredientsEl = document.querySelector('#ingredients');
ingredientsEl.append(ingredientsPotatoesEl, ingredientsMushroomsEl, ingredientsGarlicEl, ingredientsTomatoEl, ingredientsHerbsEl, ingredientsCondimentsEl);
console.log(ingredientsEl);

// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul.ingredients.