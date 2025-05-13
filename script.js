/** @format */
const text2 = document.querySelector(".text2");
var arr = [
  "Web Developer",
  "Fitness Influncer",
  "Youtuber",
  "Vidoe Editor",
  "Freelancer",
];
var arrindex = 1;
function textreplace() {
  setInterval(timer, 5000);
  function timer() {
    if (arrindex < arr.length) {
      text2.innerHTML = arr[arrindex];
      arrindex++;
    } else {
      arrindex = 0;
      text2.innerHTML = arr[arrindex];
      arrindex++;
    }
  }
}
textreplace();

let toogle = document.querySelector(".toogle");
let menu = document.querySelector(".menu");
toogle.onclick = function () {
  menu.classList.toggle("active");
};
