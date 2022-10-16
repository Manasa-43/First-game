const readline = require("readline-sync")
const user = readline.question("What is your name ")
console.log(`Welcome ${user} to KBC`)
var score=0
function play(qn,ans){
   if(qn.answer===ans){
     score=score+1
   }
  console.log(score)
 }

questionOne = {
  question: "Who is my favorite superhero?",
  answer: "Naruto"
}
questionTwo = {
  question: "Which is my favorite sad song?",
  answer: "Agar tum sath ho",
}
questionThree = {
  question: "What is my favourite food?",
  answer: "Panipuri",
}
questionFour = {
  question: "Who is my bestfriend?",
  answer: "Anirudh",
}
questionFive = {
  question: "Who do I hate the most?",
  answer: "Suresh"
}
let questions=[questionOne,questionTwo,questionThree,questionFour,questionFive]

for(let i=0; i< questions.length; i++){
var quiz = questions[i] 
 var answer = readline.question(quiz.question)
 play(quiz,answer) 
}
console.log(`Final score is ${score}`)
