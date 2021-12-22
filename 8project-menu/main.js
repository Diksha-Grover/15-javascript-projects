const menu = [
    {
      id: 1,
      title: "buttermilk pancakes",
      category: "breakfast",
      price: 15.99,
      img: "images/item-1.jpeg",
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 2,
      title: "diner double",
      category: "lunch",
      price: 13.99,
      img: "images/item-2.jpeg",
      desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
      id: 3,
      title: "godzilla milkshake",
      category: "shakes",
      price: 6.99,
      img: "images/item-3.jpeg",
      desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
      id: 4,
      title: "country delight",
      category: "breakfast",
      price: 20.99,
      img: "images/item-4.jpeg",
      desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
      id: 5,
      title: "egg attack",
      category: "lunch",
      price: 22.99,
      img: "images/item-5.jpeg",
      desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
      id: 6,
      title: "oreo dream",
      category: "shakes",
      price: 18.99,
      img: "images/item-6.jpeg",
      desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
      id: 7,
      title: "bacon overflow",
      category: "breakfast",
      price: 8.99,
      img: "images/item-7.jpeg",
      desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
      id: 8,
      title: "american classic",
      category: "lunch",
      price: 12.99,
      img: "images/item-8.jpeg",
      desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
      id: 9,
      title: "quarantine buddy",
      category: "shakes",
      price: 16.99,
      img: "images/item-9.jpeg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
      id: 10,
      title: "bison steak",
      category: "dinner",
      price: 22.99,
      img: "images/item-10.jpeg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
      id: 11,
      title: "peri-peri",
      category: "snack",
      price: 22.99,
      img: "images/item-10.jpeg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    }
  ];
  
  // selected elements
  const sectionCenter = document.querySelector(".section-center");
  const btnContainer = document.querySelector(".btn-container");
  
  window.addEventListener("DOMContentLoaded", function () {
  // when my page loads I will access my menu(means my array) and I dynamically add these items
    displayMenuItems(menu);
    displayMenuButtons();
  });
  
  function displayMenuItems(menuItems) {
  // using this function we are loading the menu array items to our HTML document
    let displayMenu = menuItems.map(function (item) {
      // map() creates a new array from calling a function for every array element
      // console.log(item);
  
      return `<article class="menu-item">
            <img src=${item.img} alt=${item.title} class="photo">
            <div class="item-info">
              <header>
                <h4>${item.title}</h4>
                <h4 class="price">$${item.price}</h4>
              </header>
              <p class="item-text">
                ${item.desc}
              </p>
            </div>
          </article>`;
    });
    displayMenu = displayMenu.join("");
    // here we joint all the menu items using join()  
    // join() method returns an array as a string.
    // due to these "" it will not show commas in between article tags in console 
    // console.log(displayMenu);
  
    sectionCenter.innerHTML = displayMenu;
    // the value that we returned in function displayMenuItems , we need to store those values in our section-center class
  }

  
  function displayMenuButtons() {
  // this function is used sort the items according to the category
    const categories = menu.reduce(
    // The reduce () method returns a single value: the function's accumulated result.
    // Reduce() accepts two parameters in its callback function.
    // two parameters, the total and the current amount
    // here total is values and current is item
      function (values, item) {
        if (!values.includes(item.category)) {
        // so here we are checking whether values property is in the array or not
        // item refer each and every item 
        // values refer the array that i am returning 
        // includes () method determines whether a string contains the characters of a specified string.
          values.push(item.category);
          // push () method is used to add one or more elements to the end of an array.
        }
        return values;
      },["all"]
      // since "all" is not a category so i need to add it manually 
    );
    const categoryBtns = categories.map(function (category) {
      // we are adding categories as buttons
        return `<button type="button" class="filter-btn" data-biscuit=${category}>
            ${category}
          </button>`;
        // biscuit is the property name of data-
      })
      .join("");
      // if i don't use join method then commas will come between buttons

    // selected filter-btn
    btnContainer.innerHTML = categoryBtns;
    const filterBtns = btnContainer.querySelectorAll(".filter-btn");
        console.log(filterBtns);
  
    filterBtns.forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        // console.log(e.currentTarget.dataset);
        const category = e.currentTarget.dataset.biscuit;
        // basically we know that we can filter out array on the basis of its category. so that's what we are doing here
        // current target will be the one that will be clicked
        // dataset property allows you to set and get data values from your HTML elements
        const menuCategory = menu.filter(function (menuItem) {
        // filter() method creates a new array filled with elements that pass a test provided by a function.
          // console.log(menuItem.category);
          if (menuItem.category === category) {
            return menuItem;
          }
        });
        if (category === "all") {
        // since we don't have any category named all in our array that is why we need to  tell our document what to return
          displayMenuItems(menu);
        } else {
          displayMenuItems(menuCategory);
        }
      });
    });
  }



  