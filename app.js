const linkList = [
    {
        id: 1,
        title: "Counter",
        path: "counter/index.html",
        desc: "A counter that can be increased, decreased and reset with changing number colours."
    },
    {
        id: 2,
        title: "Colour Flipper",
        path: "flip/index.html",
        desc: "A colour flipper that changes the pages background with either a set array of colour or a random hexadecimal value."
    },
    {
        id: 3,
        title: "Review",
        path: "review/index.html",
        desc: "A page with multiple reviews to cycle through, either sequentially or at random"
    },
    {
        id: 4,
        title: "Navbar",
        path: "Navbar/index.html",
        desc: "A page with a navbar that is hidden depending on the windows size"
    },
    {
        id: 5,
        title: "Sidebar",
        path: "sidebar/index.html",
        desc: "A page with a sidebar that is hidden depending on the windows size"
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

    displayItems(linkList);
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

/* Menu */
const sectionCenter = document.querySelector('.section-center');
function displayItems(menuItems){
    let displayMenu = menuItems.map(function(item){
        return(`<article class="menu-item">
            <div class="item-info">
                <header>
                    <h4>${item.title}</h4>
                    <h4 class="link-btn">
                        <a href=${item.path}><i class="fas fa-eye"></i></a>
                    </h4>
                </header>
                <p class="item-text">${item.desc}</p>
            </div>
        </article>`);
    });
    displayMenu = displayMenu.join('');
    sectionCenter.innerHTML = displayMenu;
};


/* Date */
const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();