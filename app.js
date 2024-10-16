const linkList = [
    {
        id: 1,
        title: "Counter",
        path: "counter/index.html"
    },
    {
        id: 2,
        title: "Colour Flipper",
        path: "flip/index.html"
    },
    {
        id: 3,
        title: "Review",
        path: "review/index.html",
    },
    {
        id: 4,
        title: "Navbar",
        path: "Navbar/index.html",
    },
    {
        id: 5,
        title: "Sidebar",
        path: "sidebar/index.html",
    }
];

/* Preloader */
const preloader = document.querySelector('.preloader');

window.addEventListener('load', function(){
    preloader.classList.add('hide-preloader');
})

/* Links */
const links = document.querySelector('.links');

window.addEventListener('DOMContentLoaded', function(){
    let displayLinks = linkList.map(function(item){
        return (`<li>
                    <a href=${item.path}>${item.title}</a>
                 </li>`);
    });
    displayLinks = displayLinks.join('');
    links.innerHTML = displayLinks;
});


/* Navbar */
const navToggle = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container');

navToggle.addEventListener('click', function(){
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const linksHeight = links.getBoundingClientRect().height;

    console.log(linksHeight);

    if (containerHeight === 0){
        linksContainer.style.height = `${linksHeight}px`;
    }
    else {
        linksContainer.style.height = 0;
    }
});

/* Date */
const date = document.getElementById('date');

date.innerHTML = new Date().getFullYear();