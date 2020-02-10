//Teoria

/*const minhaPromise = () => new Promise((resolve,reject)=>{
	setTimeout( () => { resolve('ok') },2000);
});

async function executaPromise(){
	console.log(await minhaPromise());

	minhaPromise().then(response=>{
		console.log(response);
	});
}

executaPromise();*/

//Desafios

// Funão delay aciona o .then após 1s
/*const delay = () => new Promise(resolve => setTimeout(resolve, 1000));

function umPorSegundo() {
 	delay().then(() => {
 		console.log('1s'); 
	 	delay().then(() => {
	 		console.log('2s');
	 		delay().then(() => {
	 			console.log('3s');
	 		});
	 	})
	});
}

umPorSegundo();*/

//Resultado

/*const delay = () => new Promise((resolve,reject)=>{
	setTimeout( () => {resolve('OK')}, 1000);
});

async function umPorSegundo(){ 
	console.log(await delay());
	console.log(await delay());
	console.log(await delay());
}

umPorSegundo();*/









//Exercicio
import axios from 'axios';  
/*function getUserFromGithub(user) {
	axios.get(`https://api.github.com/users/${user}`)
 	.then(response => {
 		console.log(response.data);
 	})
 	.catch(err => {
 		console.log('Usuário não existe');
 	})
}
getUserFromGithub('lucassantosf');
getUserFromGithub('lucassantosf124123');*/

//Resultado
/*const query = (user) => new Promise((resolve,reject)=>{ 
	const result = axios.get(`https://api.github.com/users/${user}`);
	resolve(result);	
});
async function getUserFromGithub(userName){
	console.log(await query(userName));
}
getUserFromGithub('lucassantosf'); */










//Exercicio 
/*class Github {
 static getRepositories(repo) {
 axios.get(`https://api.github.com/repos/${repo}`)
 .then(response => {
 console.log(response.data);
 })
 .catch(err => {
 console.log('Repositório não existe');
 })
 }
}
Github.getRepositories('rocketseat/rocketseat.com.br');
Github.getRepositories('rocketseat/dslkvmskv');*/
//Resultado
/*class Github {
	static async getRepositories(repo) {
		try{
			const result = await axios.get(`https://api.github.com/repos/${repo}`);
			console.log(result);
		}catch(err){
			console.warn('Respositório não existe');
		}
 	}
} 
Github.getRepositories('rocketseat/rocketseat.com.br');
Github.getRepositories('rocketseat/dslkvmskv');*/






//Exercicio  
/*
const buscaUsuario = usuario => {
 axios.get(`https://api.github.com/users/${user}`)
 .then(response => {
 console.log(response.data);
 })
 .catch(err => {
 console.log('Usuário não existe');
 });
}
buscaUsuario('lucassantosf');
*/
//Resultado 
/*const buscaUsuario = async (usuario) => { 
	try{
		const result = await axios.get(`https://api.github.com/users/${usuario}`);
		console.log(result);
	}catch(err){
		console.warn('Usuario inexistente');
	}
};
buscaUsuario('lucassantosf');*/