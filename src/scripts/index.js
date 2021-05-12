import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';
import data from '../DATA.json';

const hamburgerButtonElement = document.querySelector('#hamburger');
const drawerElement = document.querySelector('#drawer');
const mainElement = document.querySelector("main");

hamburgerButtonElement.addEventListener("click", event => {
    drawerElement.classList.toggle("open");
    event.stopPropagation();
})


mainElement.addEventListener("click", event => {
    drawerElement.classList.remove("open");
    event.stopPropagation
})

const postElement = document.querySelector('post-item');
postElement.setAttribute("class", "posts");
data.restaurants.forEach(item => {
    const post = document.createElement('article');
    post.setAttribute("class", "post-item");
    post.innerHTML = `
                        <img class="post-item__thumbnail"
         src="${item.pictureId}"
         alt="${item.name}">
                        <div class="post-item__content">
                            <p class="post-item__date">${item.city} 
                            
                            </p>
                            <a href="#"class="post-item__date__author">${item.rating}</a>
                            <h1 class="post-item__title"><a href="#">${item.name}</a></h1>
                            <p class="post-item__description">${item.description}</p>
                        </div>

    `;
    postElement.appendChild(post);
})