//using selectors inside the element

const questions = document.querySelectorAll('.question');
console.log(questions);

questions.forEach(question => {
  console.log(question)
  const btn = question.querySelector('.question-btn')
  btn.addEventListener('click', () => {

    questions.forEach((item) => {
      if (item !== question){
        item.classList.remove('show-text')
      }
    });
    question.classList.toggle('show-text')
  })
})




// traversing the dom

// just do the same thing but for all btns

// const btns = document.querySelectorAll('.question-btn');
// btns.forEach((btn) => {
//   btn.addEventListener('click', e => {
//     const question = e.currentTarget.parentElement.parentElement;
//     question.classList.toggle('show-text')
//   })
// })


// select all plus buttons. for each button, add event listener that will change class of parent
// const plusBtns = document.querySelectorAll('.plus-icon')
// const minusBtns = document.querySelectorAll('.minus-icon')

// plusBtns.forEach((btn) => {
//   btn.addEventListener('click', () => {
//     let parent = btn.parentElement.parentElement.parentElement;
//     console.log(parent)
//     parent.classList.add('show-text')
//   })
// })

// minusBtns.forEach((btn) => {
//   btn.addEventListener('click', () => {
//     let parent = btn.parentElement.parentElement.parentElement;
//     parent.classList.remove('show-text')
//   })
// })
