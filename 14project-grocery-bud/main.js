
const form = document.querySelector(".grocery-form");
const alert = document.querySelector(".alert");
const grocery = document.getElementById("grocery");
const submitBtn = document.querySelector(".submit-btn");
const container = document.querySelector(".grocery-container");
const list = document.querySelector(".grocery-list");
const clearBtn = document.querySelector(".clear-btn");


//=====edit option======
let editElement;
let editFlag = false;
let editID = "";


//====event listeners=====


// submit form
form.addEventListener("submit", addItem);
// clear list
clearBtn.addEventListener("click", clearItems);
// display items onload
window.addEventListener("DOMContentLoaded", setupItems);



//===========functions==============

// 1st function to add items

function addItem(e) {
e.preventDefault();
//  default behaviour is to add items to the server but we want to prevent that 
  const value = grocery.value;
  // here grocery.value= objectname.propertyname
  // value property in javascript Specifies the value of the attribute
  // grocery is my input
  const id = new Date().getTime().toString();
  // getTime() returns the number of milliseconds since January 1, 1970 00:00:00.
  // here we are getting date and converting it into string 
  // toString() method converts a number to a string

  if (value && !editFlag) {
  // it means if value is not empty and editflag is false(means i am not editing)
  // we can also write it as:
  // if (value !== "" && editFlag=false) 
  // or   
  // if (value && !editFlag)
    const element = document.createElement("article");
    //  createElement() method creates an Element Node with the specified name
    // To add a new element to the HTML DOM, you must create the element (element node) first,
    // and then append it to an existing element.
    let attr = document.createAttribute("data-id");
    // data-* attribute and its corresponding DOM dataset.property modify their shared name according 
    // data-* attribute gives us the ability to embed custom data attributes 
    // createAttribute() method creates an attribute with the specified name, and returns the attribute as an Attr object
    attr.value = id;
    // did not get this
    // don't know the meaning of it
    element.setAttributeNode(attr);
    // setAttributeNode() method adds the specified attribute node to an element
    element.classList.add("grocery-item");
    element.innerHTML = `<p class="title">${value}</p>
                          <div class="btn-container">
                          <!-- edit btn -->
                          <button type="button" class="edit-btn">
                              <i class="fas fa-edit"></i>
                          </button>
                          <!-- delete btn -->
                          <button type="button" class="delete-btn">
                              <i class="fas fa-trash"></i>
                          </button>
                          </div>`;
                        
    // add event listeners to both buttons;
    const deleteBtn = element.querySelector(".delete-btn");
    deleteBtn.addEventListener("click", deleteItem);
    const editBtn = element.querySelector(".edit-btn");
    editBtn.addEventListener("click", editItem);

    // append child
    list.appendChild(element);
    // appendChild() method appends a node as the last child of a node.

    // display alert
    displayAlert("you added item to the list", "success");
    // show container
    container.classList.add("show-container");
    // show-container is class for trash, edit, clear-item buttons    
    // set local storage
    addToLocalStorage(id, value);
    // localStorage object allows you to save key/value pairs in the browser
    // set back to default
    setBackToDefault();
  } else if (value && editFlag) {
    // it means if value is not empty and editflag is true(means i am editing)
    // we can also write it as:
    // if (value !== "" && editFlag=true) 
    // or   
    // if (value && editFlag)

    editElement.innerHTML = value;
    displayAlert("value is changed", "success");
    // Setting the value of innerHTML lets you easily replace the existing contents of an element with new content
    // for more info of innerHTML:
    // https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML 

    // edit  local storage
    editLocalStorage(editID, value);
    setBackToDefault();
  } else {
    displayAlert("you have not enter anything", "danger");
  }
}


// 2nd function to display alert

function displayAlert(text, action) {
  alert.textContent = text;
  alert.classList.add(`alert-${action}`);
  // remove alert
  setTimeout(function () {
    alert.textContent = "";
    alert.classList.remove(`alert-${action}`);
  }, 1000);
}



// 3rd function to clear items

function clearItems() {
  const items = document.querySelectorAll(".grocery-item");
  if (items.length > 0) {
    items.forEach(function (item) {
      list.removeChild(item);
    });
  }
  container.classList.remove("show-container");
  displayAlert("empty list", "danger");
//   setBackToDefault();
  localStorage.removeItem("list");
}


// 4th function to delete items

function deleteItem(e) {
  const element = e.currentTarget.parentElement.parentElement;
  const id = element.dataset.id;

  list.removeChild(element);

  if (list.children.length === 0) {
    container.classList.remove("show-container");
  }
  displayAlert("you removed the item", "danger");
  
  setBackToDefault();
  // remove from local storage
  removeFromLocalStorage(id);
}


// 5th function to edit item

function editItem(e) {
  const element = e.currentTarget.parentElement.parentElement;
  // did not get this
  // set edit item
  editElement = e.currentTarget.parentElement.previousElementSibling;
  // did not get this
// previousElementSibling property returns the previous element of the specified element, in the same tree level.

  // set form value
  grocery.value = editElement.innerHTML;
  editFlag = true;
  editID = element.dataset.id;
  //
  submitBtn.textContent = "edit";
}


// 6th function to set back to defaults
function setBackToDefault() {
  grocery.value = "";
  editFlag = false;
  editID = "";
  submitBtn.textContent = "submit";
}

//=========funtions for local storage========

// list of functions to add items to local storage

function addToLocalStorage(id, value) {
// localStorage opject allows you to save key/value pairs in the browser
  const grocery = { id, value };
  let items = getLocalStorage();
  items.push(grocery);
  // push() method adds new items to the end of an array
  localStorage.setItem("list", JSON.stringify(items));
  // setItem() method sets the value of the specified Storage Object item
  // setItem() method belongs to the Storage Object, which can be either a localStorage object or a sessionStorage object
}

function getLocalStorage() {
  return localStorage.getItem("list")?JSON.parse(localStorage.getItem("list")):[];
  // means if there is an item with name of list then get that item otherwise return empty
  // getItem() method of the Storage interface, when passed a key name, will return that key's
  // value, or null if the key does not exist, in the given Storage object.  
  // Use the JavaScript function JSON.parse() to convert text into a JavaScript object   
}

function removeFromLocalStorage(id) {
  let items = getLocalStorage();

  items = items.filter(function (item) {
    if (item.id !== id) {
    // it means if item.id that we are getting from local storage does not match with the id we entered 
      return item;
    }
  });
  
  localStorage.setItem("list", JSON.stringify(items));
  // JSON.stringify() method converts a JavaScript object or value into string
  // JSON is purely a string with a specified data format — it contains only properties, no methods. JSON requires double quotes to be used around strings and property names
}
// so here we have access to the id and items from local storage, then we run filter
// then we set new items and we send it to our local storage 

function editLocalStorage(id, value) { 
  let items = getLocalStorage();

  items = items.map(function (item) {
    if (item.id === id) {
      item.value = value;
    }
    return item;
  });
  localStorage.setItem("list", JSON.stringify(items));
}


// SETUP LOCALSTORAGE.REMOVEITEM('LIST');

// functons for setup items 

function setupItems() {
  let items = getLocalStorage();

  if (items.length > 0) {
    items.forEach(function (item) {
      createListItem(item.id, item.value);
    });
    container.classList.add("show-container");
  }
}

function createListItem(id, value) {
  const element = document.createElement("article");
  let attr = document.createAttribute("data-id");
  attr.value = id;
  element.setAttributeNode(attr);
  element.classList.add("grocery-item");
  element.innerHTML = `<p class="title">${value}</p>
            <div class="btn-container">
              <!-- edit btn -->
              <button type="button" class="edit-btn">
                <i class="fas fa-edit"></i>
              </button>
              <!-- delete btn -->
              <button type="button" class="delete-btn">
                <i class="fas fa-trash"></i>
              </button>
            </div>
          `;
  // add event listeners to both buttons;
  const deleteBtn = element.querySelector(".delete-btn");
  deleteBtn.addEventListener("click", deleteItem);
  const editBtn = element.querySelector(".edit-btn");
  editBtn.addEventListener("click", editItem);

  // append child
  list.appendChild(element);
}
