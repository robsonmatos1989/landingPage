const form = document.getElementById('form');
const campos = document.querySelectorAll('.required');

const spans = document.querySelectorAll('.span-required');

const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


function nameValidate(){
	if(campos[0].value.length < 3){
		console.log("Erro")
	}
	else{
		console.log("correto");
	}
}
