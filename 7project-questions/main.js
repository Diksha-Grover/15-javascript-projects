//using selectors inside the element
const questions = document.querySelectorAll(".question");

questions.forEach(function (almond) {
  const btn = almond.querySelector(".question-btn");
  // console.log(btn);

  btn.addEventListener("click", function () {
    // console.log(question);

    questions.forEach(function (kaju) {
      if (kaju !== almond) {
        // means if the article does not match the actual article which means the article that is clicked
        kaju.classList.remove("show-text");
      }
    // this if statement is added so that if i open another question then previous ones automatically gets closed and open the one that I have clicked on
    });

    almond.classList.toggle("show-text");
    // toggle () method toggles between hide () and show ()
  });
});

// traversing the dom
// const btns = document.querySelectorAll(".question-btn");

// btns.forEach(function (btn) {
//   btn.addEventListener("click", function (e) {
// (here e is event object)
//     const question = e.currentTarget.parentElement.parentElement;
//(in the above line we have given the access of question to the question-btn)  
//     question.classList.toggle("show-text");
//   });
// });
