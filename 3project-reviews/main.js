// local reviews data
// below we have aray of objects and each object represents a person
const reviews = [
    {
      id: 1,
      name: "susan smith",
      job: "web developer",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
      text:
        "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: "anna johnson",
      job: "web designer",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
      text:
        "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
      id: 3,
      name: "peter jones",
      job: "intern",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
      text:
        "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
      id: 4,
      name: "bill anderson",
      job: "the boss",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
      text:
        "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },
  ];
  // select items
  const img = document.querySelector('#person-img');
  // element = document.getElementById(id);
  // Returns a reference to the element by its ID. If the element with the specified ID is not in the document, it will returns null
  const author = document.querySelector('#author');
  const job = document.querySelector('#job');
  const info = document.querySelector('#info');
  
  const prevBtn = document.querySelector(".prev-btn");
  // element = document.querySelector(selectors);
  // Returns the first element within the document that matches the specified group of selectors, or null if no matches are found.
  const nextBtn = document.querySelector(".next-btn");
  const randomBtn = document.querySelector(".random-btn");
  
  // set starting item
  let currentItem = 0;
  
  // load initial item
  window.addEventListener("DOMContentLoaded", function () {
    showPerson(currentItem);
  });
  // original target for this event(DOMContentLoaded) is the Document that has loaded.  
  // dom= document object model
  
  // show person based on item
  function showPerson(person) {
    const item = reviews[person];
    img.src = item.img;
    // it could also be done by:
    // img.src = reviews[currentItem].img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
  }
  // show next person
  nextBtn.addEventListener("click", function () {
    currentItem++;
    if (currentItem > reviews.length - 1) {
    // this if statement is used because our reviews array length is 4 and current item which starts from 0 will give an error after 3.  
    // here reviews.length - 1 is used because the length of reviews array is four. which means we can still get an error when current item is 4 
      currentItem = 0;
    }
    showPerson(currentItem);
  });
  // show prev person
  prevBtn.addEventListener("click", function () {
    currentItem--;
    if (currentItem < 0) {
      currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
  });
  // show random person
  randomBtn.addEventListener("click", function () {
    console.log("currentItem");
  
    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson(currentItem);
  });