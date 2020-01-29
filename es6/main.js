//Classe Simples

class Cars{
	constructor(){
		this.carro = [];
		this.carro.cor = 'Branco'
	}

	ligarMotor(){
		this.carro.motor = 'On';
		console.log(this.carro.motor);
	}

	desligarMotor(){
		this.carro.motor = 'Off';
		console.log(this.carro.motor);
	} 
}

function Variavel(b){
	let a = 3;

	if(b > 5){
		console.table(a,b);
	}
}

//Variavel(9); 

//Operação com Vetor

const arr = [1,8,9,88,99,4555];

const newArr = arr.map(function(item, index){
	return item;
});

const sum = arr.reduce(function(total,next){
	return total + next;
});

const filter = arr.filter(function(item){
	//return item % 2 === 0;
	return item > 50;
});

const find = arr.find(function(item){
	return item === 88;
});

console.log(arr);

