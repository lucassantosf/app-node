//Retornar se idade é maior ou menor dps de 2 segundos

function checar(idade){
	return new Promise(function(resolve,reject){
		if(idade>18){
			setTimeout(resolve, 2000);
		}else{
			setTimeout(reject, 2000);
		} 
	});
}

checar(36)
	.then(function(response){
		console.log("Maior que 18");
	})
	.catch(function(error){
		console.log("Menor que 18");  
	}); 
 