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
//console.log(User1.isAdmin()) ;
//console.log(Adm1.isAdmin());

//Exer 2
const usuarios = [
	{nome:'Lucas',idade:23,empresa:'RocketSeat'},
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

const calculo = usuarios.map(users => ({...users, idade : users.idade * 2})).filter(users => users.idade <= 50)
//console.log(calculo); 

//Exer 3

// 3.1

const array = [ 1,2,3,4,5];

var newArray = array.map(function(item){
	return item + 10;
}); 
var newArray2 = array.map(item => item + 30);
 
// 3.2

const usuario = { nome: 'Lucas', idade: 23 };
const mostraIdade = usuario => usuario.idade;
//console.log(mostraIdade(usuario));

// 3.3

const nomea = "Lucas";
const idade = 23;
 
const mostraUsuario = (nomea='Lucas',idade = 18)=>({nomea,idade});

//console.log(mostraUsuario(nomea));
//console.log(mostraUsuario('Lucas',89));

// 3.4

const promise = () => new Promise( resolve,reject =>resolve());

//console.log(promise);

// 4.1 - Desestruturação

const empresa = {
 nome: 'Rocketseat',
 endereco: {
 cidade: 'Rio do Sul',
 estado: 'SC',
 }
};

const { nome, endereco: { cidade , estado } } = empresa;

console.log(nome); // Rocketseat
console.log(cidade); // Rio do Sul
console.log(estado); // SC


function mostraInfo({nome, idade}) {
 return `${nome} tem ${idade} anos.`;
}
console.log(mostraInfo({ nome: 'Lucas', idade: 23 }));

//5.1

const arr = [1, 2, 3, 4, 5, 6];

const [ x , ...y ] = arr;

console.log(x); // 1
console.log(y); // [2, 3, 4, 5, 6]

const soma = (...params) => params.reduce((a, b) => a + b);

console.log(soma(1, 2, 3, 4, 5, 6)); // 21
console.log(soma(1, 2)); // 3

//	5.2
const user = {
 	nome: 'Lucas',
 	idade: 23,
 	endereco: {
	 	cidade: 'Rio do Sul',
	 	uf: 'SC',
	 	pais: 'Brasil',
 	}
};

const usuario2 = { ...user, nome: 'Gabriel'};
const usuario3 = { ...user, endereco : { ...user.endereco , cidade: "Lontras"}};

console.log(usuario2);
console.log(usuario3);

const usuari = 'Lucas';
const age = 23;

console.log(`O usuário ${usuari} possui ${age} anos`);

const name = 'Lucas';
const idad = 23;

const usu = {
 name,
 idad,
 cidade: 'Rio do Sul',
};

console.log(usu);