// Напиши скрипт для створення галереї зображень на підставі масиву даних. HTML містить список ul.gallery.

// <ul class="gallery"></ul>
// Використовуй масив об'єктів images для створення елементів <img>, вкладених в <li>. Для створення розмітки використовуй шаблонні рядки і метод insertAdjacentHTML().

// Усі елементи галереї повинні додаватися в DOM за одну операцію додавання.
// Додай мінімальне оформлення галереї флексбоксами або грідами через CSS класи.

const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryEl = document.querySelector('.gallery');

// const makeImageEl = ({url, alt })=> {
//   const imagesItemEl = document.createElement('li');
//   imagesItemEl.classList.add('gallery__items');
  
//   const imagesEl =document.createElement('img');
//   imagesEl.classList.add('gallery__img');
//   imagesEl.src = url;
//   imagesEl.alt = alt;
//   imagesEl.width = 200;


//   imagesItemEl.append(imagesEl);
//   return imagesItemEl;
// }
// const elements = images.map(makeImageEl);
// galleryEl.append(...elements);

// console.log(elements);

const elements = images.map(({url, alt}) => `<li class ='gallery__items'> <img class = 'gallery__img' src =${url} alt = ${alt} width = '200'></li>`)

galleryEl.insertAdjacentHTML('beforeend', elements);

console.log(galleryEl);

