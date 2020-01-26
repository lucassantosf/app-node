var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttontElement = document.querySelector('#app button');

var todos = JSON.parse(localStorage.getItem('listToDo')) || [];

function renderTodos(){

	listElement.innerHTML = '';

	for(todo of todos){
		var todoElement = document.createElement('li');
		var todoText = document.createTextNode(todo);

		var linkElement = document.createElement('a');
		linkElement.setAttribute('href','#');
		var linkText = document.createTextNode('Excluir');

		linkElement.appendChild(linkText);

		var pos = todos.indexOf(todo);

		linkElement.setAttribute('onclick','DelTodo('+pos+')');

		todoElement.appendChild(todoText);
		todoElement.appendChild(linkElement);

		listElement.appendChild(todoElement);
	}	
};

renderTodos();

function addTodo(){
	var todoText = inputElement.value;

	todos.push(todoText);

	inputElement.value = ''; 
	renderTodos();
	saveToStorage();

}

buttontElement.onclick = addTodo;

function DelTodo(pos){

	todos.splice(pos,1);
	renderTodos(); 
	saveToStorage();
}

function saveToStorage(){
	
	localStorage.setItem('listToDo',JSON.stringify(todos));
}