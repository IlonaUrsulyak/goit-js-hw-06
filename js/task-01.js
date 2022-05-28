
// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного элемента li.item у спику ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).
// В результаті, в консолі будуть виведені наступні повідомлення.


const categoriesEl = document.querySelector("#categories").children;
console.log(`Number of categories: ${categoriesEl.length}`);

const categoriesItemEl = document.querySelectorAll("li.item");
categoriesItemEl.forEach((item) => {console.log(`Category: ${item.firstElementChild.textContent}`),
 console.log(`Elements: ${item.lastElementChild.children.length}`)});

