const gamePage = document.querySelector(".game__page");
let board = document.querySelector(".board");
let row = document.querySelectorAll(".row");
let cube__for__number = document.querySelectorAll(".cube__for__number");
let num = document.querySelectorAll(".num");
let menu = document.querySelector(".menu");
let startBtn = document.querySelector(".menu .start");
let numbers__for__selection = document.querySelector('.numbers__for__selection')
let boardNumbers = [
  "--74916-5",
  "2---6-3-9",
  "-----7-1-",
  "-586----4",
  "--3----9-",
  "--62--187",
  "9-4-7---2",
  "67-83----",
  "81--45---",
];
let solution = [
  "387491625",
  "241568379",
  "569327418",
  "758619234",
  "123784596",
  "496253187",
  "934176852",
  "675832941",
  "812945763",
];
startBtn.addEventListener("click", () => {
  gamePage.classList.add("active");
  menu.classList.remove("active");
});

boardNumbers = boardNumbers.join('');
solution = solution.join('');

for(let i = 0; i < cube__for__number.length; i++){
  if(boardNumbers[i] === '-'){
    continue;
  } else {
    cube__for__number[i].innerHTML = boardNumbers[i];
    cube__for__number[i].style.color = 'black';
  }
}

let x;
board.addEventListener('click', elem => {
  if(elem.target.innerHTML !== '' || elem.target.style.color === 'red'){
    for (let i = 0; i < cube__for__number.length; i++) {
      if(cube__for__number[i].innerHTML === elem.target.innerHTML && cube__for__number[i].style.color !== 'red'){
        cube__for__number[i].style.backgroundColor = 'rgba(63, 100, 250, 0.5)'
      } else {
        cube__for__number[i].style.backgroundColor = 'rgba(128, 128, 128, 0.16)';
      }
    }
  } else {
    for (let i = 0; i < cube__for__number.length; i++) {
      cube__for__number[i].style.backgroundColor = 'rgba(128, 128, 128, 0.16)';
    }
  }
  x = elem.target;
})
let n = 0;
document.addEventListener('keyup', function(number){
  if(x.style.color !== "black" && x.style.color !== "rgb(35, 153, 60)" && !isNaN(+number.key)){
    x.innerHTML = number.key;
    let index = [...cube__for__number].indexOf(x);
    if(cube__for__number[index].innerHTML !== solution[index]){
      cube__for__number[index].style.color = 'red';
      n++;
      if(n === 3) setTimeout(function(){alert(`You couldn't win`)}, 1000)
    } else {
      cube__for__number[index].style.color = 'rgb(35, 153, 60)';
    }
  }
})

numbers__for__selection.addEventListener('click', number => {
  if(x.style.color !== "black" && x.style.color !== "rgb(35, 153, 60)"){
    x.innerHTML = number.target.innerHTML;
    let index = [...cube__for__number].indexOf(x);
    if(cube__for__number[index].innerHTML !== solution[index]){
      cube__for__number[index].style.color = 'red';
      n++;
      if(n === 3) setTimeout(function(){alert(`You couldn't win`)}, 1000)
    } else {
      cube__for__number[index].style.color = 'rgb(35, 153, 60)';
    }
  }
})
