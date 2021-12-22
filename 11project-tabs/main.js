const about = document.querySelector(".about");
const btns = document.querySelectorAll(".tab-btn");
const articles = document.querySelectorAll(".content");
about.addEventListener("click", function (e) {
  const orange = e.target.dataset.kaju;
  // here we are not targeting current target but we are targeting event target. 
  // Event.target, which identifies the element on which the event occurred and which may be 
  // its descendant.
  // event.target is the node from which the event originated, ie. wherever you place your event
  //  listener (on paragraph or span), event.target refers to node (where user clicked).
  // event.currentTarget, on the opposite, refers to the node on which current-event listener 
  // was attached. Ie. if we attached our event listener on paragraph node, then event.currentTarget
  //  refers to paragraph 
  if (orange) {
    // remove selected from other buttons
    btns.forEach(function (btn) {
      btn.classList.remove("active");
      e.target.classList.add("active");
    });
    // hide other articles
    articles.forEach(function (article) {
      article.classList.remove("active");
    });
    const element = document.getElementById(orange);
    // the id here is const id = e.target.dataset.kaju; 
    element.classList.add("active");
  }
});