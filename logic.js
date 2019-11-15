let results = document.getElementsByClassName("result");
let moves = ["Rock", "Paper", "Scissors"];

function play(userChoice) {
  let cpu = Math.floor(Math.random() * 3) + 1;
  let result = document.getElementsByClassName(userChoice * cpu)[0];
  for(let i = 0; i < 3; i++) {
    results[i].style.display = "none";
  }
  result.style.display = "flex";
  result.childNodes[0].innerHTML = moves[userChoice - 1];
  result.childNodes[2].innerHTML = moves[3 * cpu % 4 - 1];
}
