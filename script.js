const mainb = document.querySelector('.buttonM');
const playerb = document.querySelector('.buttonP');
const coachb = document.querySelector('.buttonC');
const mainb1 = document.querySelector('.buttonM1');
const playerb1 = document.querySelector('.buttonP1');
const coachb1 = document.querySelector('.buttonC1');
const main = document.querySelector('.hero');
const player = document.querySelector('.player');
const coach = document.querySelector('.coach');
mainb.addEventListener('click' , mainImg);
playerb.addEventListener('click' , playerImg);
coachb.addEventListener('click' , coachImg);

mainb1.addEventListener('click' , mainImg);
playerb1.addEventListener('click' , playerImg);
coachb1.addEventListener('click' , coachImg);

function mainImg(){
	main.style.display = "block" ; 
	player.style.display = "none" ; 
	coach.style.display = "none" ; 
	console.log("hi");
}

function playerImg(){
	player.style.display = "block" ;
	main.style.display = "none" ;  
	coach.style.display = "none" ; 
	console.log("hi");
}

function coachImg(){
	coach.style.display = "block" ; 
	player.style.display = "none" ;
	main.style.display = "none" ;  
	console.log("hi");
}