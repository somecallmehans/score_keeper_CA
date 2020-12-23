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
			p1sc.classList.add('has-text-success');
			p2sc.classList.add('has-text-danger');
			p1Button.disabled = true;
			p2Button.disabled = true;
		}
		p1sc.textContent = P1Score;
	}
});

p2Button.addEventListener('click', function(){
	if(!isGameOver){
		P2Score += 1;
		if(P2Score === winningScore){
			isGameOver = true;
			p2sc.classList.add('has-text-success');
			p1sc.classList.add('has-text-danger');
			p1Button.disabled = true;
			p2Button.disabled = true;
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
	p1sc.classList.remove('has-text-success', 'has-text-danger');
	p2sc.classList.remove('has-text-success', 'has-text-danger');
	p1Button.disabled = false;
	p2Button.disabled = false;
}