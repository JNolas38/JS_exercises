const menu = [
    {
      id: 1,
      title: "buttermilk pancakes",
      category: "breakfast",
      price: 15.99,
      img: "./images/item-1.jpeg",
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 2,
      title: "diner double",
      category: "lunch",
      price: 13.99,
      img: "./images/item-2.jpeg",
      desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
      id: 3,
      title: "godzilla milkshake",
      category: "shakes",
      price: 6.99,
      img: "./images/item-3.jpeg",
      desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
      id: 4,
      title: "country delight",
      category: "breakfast",
      price: 20.99,
      img: "./images/item-4.jpeg",
      desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
      id: 5,
      title: "egg attack",
      category: "lunch",
      price: 22.99,
      img: "./images/item-5.jpeg",
      desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
      id: 6,
      title: "oreo dream",
      category: "shakes",
      price: 18.99,
      img: "./images/item-6.jpeg",
      desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
      id: 7,
      title: "bacon overflow",
      category: "breakfast",
      price: 8.99,
      img: "./images/item-7.jpeg",
      desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
      id: 8,
      title: "american classic",
      category: "lunch",
      price: 12.99,
      img: "./images/item-8.jpeg",
      desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
      id: 9,
      title: "quarantine buddy",
      category: "shakes",
      price: 16.99,
      img: "./images/item-9.jpeg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
      id: 10,
      title: "Steak Dinner",
      category: "dinner",
      price: 34.99,
      img: "./images/item-10.jpeg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
];

const sectionCenter = document.querySelector('.section-center');
const container = document.querySelector('.btn-container');

window.addEventListener('DOMContentLoaded', function(){ //loads all items on page start
  dislplayMenuItems(menu);
  dislplayMenuBtns();
});

function dislplayMenuItems(menuItems){
  let displayMenu = menuItems.map(function(item){   //breakedown the array that was received as a parameter

    return(`<article class="menu-item">
                <img src=${item.img} class="photo" alt=${item.title} />
                <div class="item-info">
                    <header>
                        <h4>${item.title}</h4>
                        <h4 class="price">${item.price}€</h4>
                    </header>
                    <p class="item-text">${item.desc}</p>
                </div>
            </article>`);
  });
  displayMenu = displayMenu.join('');           //properly save the html code as a string to be injected
  sectionCenter.innerHTML = displayMenu;        //inject the new html code
};

function dislplayMenuBtns(){
  const categories = menu.reduce(function(values, item){  //creates an array with all categories
    if(!values.includes(item.category)){                  //but only saves each once
      values.push(item.category);
    }
    return values
  },['all']);
  const categoryBtns = categories.map(function(category){   //using the categories array we dynamically create the html for the buttons
    return `<button class="filter-btn" type="button" data-id=${category}>${category}</button>`;
  }).join('');
  container.innerHTML = categoryBtns;
  
  const filterBtns = document.querySelectorAll('.filter-btn') //only once the buttons have been created can we select them to add our even listener
  filterBtns.forEach(function(btn){
    btn.addEventListener('click', function(e){
      const category = e.currentTarget.dataset.id;  //saves the buttons category in a seperate constant
      const menuCategory = menu.filter(function(menuItem){
        if (menuItem.category === category) {       //creates an array menuItem from the original menu array that includes
          return menuItem;                          //only the items with the same category as the button pressed 
        };
      });
      if (category === 'all'){                      //if the button pressed had the all category we desplay the entire menu array
        dislplayMenuItems(menu);
      }
      else{
        dislplayMenuItems(menuCategory);            //else we display the filtered menuItem array
      };
    });
  });
};
