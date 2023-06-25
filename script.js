const form = document.getElementById('form');
const campos = document.querySelectorAll('.required');

const spans = document.querySelectorAll('.span-required');

const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


function setError(index){
	campos[index].style.border = '2px solid #e63636';
	spans[index].style.display = 'block';
}

function removeError(index){
	campos[index].style.border = '';
	spans[index].style.display = 'none';
}

function nameValidate(){
	if(campos[0].value.length < 3){
		setError(0);
	}
	else{
		removeError(0);
	}
}

function emailValidate(){
	if(emailRegex.test(campos[1].value)){ /**/
		
	removeError(1);//Aqui inverto a ordem do setError e do removeError, pois só é removido
	//após atender o teste que é feito com o emailRegex 

	}
	else{
		setError(1); //Enquanto não atende ao teste, é setado o erro
	}
}