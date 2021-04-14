// //using selectors inside the element
const questions = document.querySelectorAll(".question");

questions.forEach(function (question) {
  const btn = question.querySelector(".question-btn");
  // console.log(btn);

  btn.addEventListener("click", function () {
    // console.log(question);

    questions.forEach(function (item) {
      // use the if statement to check clicked btn is on the same article, if not remove the show-text class
      if (item !== question) {
        item.classList.remove("show-text");
      }
    });
    //toggle between class show-text 
    question.classList.toggle("show-text");
  });
});

// traversing the dom
// const btns = document.querySelectorAll(".question-btn");

// btns.forEach(function (btn) {
//   btn.addEventListener("click", function (e) {
//     const question = e.currentTarget.parentElement.parentElement;
// console.log(e.currentTarget.parentElement)
//     question.classList.toggle("show-text");
//   });
// });
