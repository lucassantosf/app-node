//Exer 1
class Usuario{
	
	constructor(email,senha,admin=false){
		this.email = email;
		this.senha = senha;
		this.admin = admin;
	}

	isAdmin(){
		return this.admin;
	}

}

class Admin extends Usuario{
	constructor(email,senha) {
		super(email,senha,true);
	}
}

const User1 = new Usuario('email@teste.com', 'senha123');
const Adm1 = new Admin('email@teste.com', 'senha123');
console.log(User1.isAdmin()) ;
console.log(Adm1.isAdmin());

//Exer 2
const usuarios = [
	{nome:'Diego',idade:23,empresa:'RocketSeat'},
	{nome:'Gabriel',idade:15,empresa:'RocketSeat'},
	{nome:'Lucas',idade:30,empresa:'RocketSeat'},
];

const newArr = usuarios.map(function(item, index){
	return item.idade;
});

const filter = usuarios.filter(function(item){ 
	return item.empresa === 'RocketSeat' && item.idade > 25;
});

const find = usuarios.find(function(item,index){
	return item.empresa === 'RocketSeat';
});

const union = usuarios.map(function(item, index){ 
	return item.idade * 2;
}).filter(function(item2,index2){
	return item2.idade <= 50;
});

console.log(union);