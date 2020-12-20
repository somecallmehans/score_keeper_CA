const p1Button = document.querySelector("#p1button");
const p2Button = document.querySelector("#p2button");
const p1sc = document.querySelector("#p1sc");
const p2sc = document.querySelector("#p2sc");

let P1Score = 0;
let P2Score = 0;
let winningScore = 5;
let isGameOver = false;

p1Button.addEventListener('click', function(){
	if(!isGameOver){
		P1Score += 1;
		if(P1Score === winningScore){
			isGameOver = true;
		}
		p1sc.textContent = P1Score;
	}
});

p2Button.addEventListener('click', function(){
	if(!isGameOver){
		P2Score += 1;
		if(P2Score === winningScore){
			isGameOver = true;
		}
		p2sc.textContent = P2Score;
	}
});