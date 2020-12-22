const p1Button = document.querySelector("#p1button");
const p2Button = document.querySelector("#p2button");
const p1sc = document.querySelector("#p1sc");
const p2sc = document.querySelector("#p2sc");
const resetButton = document.querySelector("#reset");
const winningScoreSelect = document.querySelector("#playto");

let P1Score = 0;
let P2Score = 0;
let winningScore = 3;
let isGameOver = false;

p1Button.addEventListener('click', function(){
	if(!isGameOver){
		P1Score += 1;
		if(P1Score === winningScore){
			isGameOver = true;
			p1sc.classList.add('winner');
			p2sc.classList.add('loser');
		}
		p1sc.textContent = P1Score;
	}
});

p2Button.addEventListener('click', function(){
	if(!isGameOver){
		P2Score += 1;
		if(P2Score === winningScore){
			isGameOver = true;
			p2sc.classList.add('winner');
			p1sc.classList.add('loser');
		}
		p2sc.textContent = P2Score;
	}
});

winningScoreSelect.addEventListener('change', function(){
	winningScore = parseInt(this.value);
	reset();
});

resetButton.addEventListener('click', reset);

function reset() {
	isGameOver = false;
	P1Score = 0;
	P2Score = 0;
	p1sc.textContent = P1Score;
	p2sc.textContent = P2Score;
	p1sc.classList.remove('winner', 'loser');
	p2sc.classList.remove('winner', 'loser');
}