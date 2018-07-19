

const button = document.querySelector('#button');
const messageIn = document.querySelector('#messageIn');
const messageOut = document.querySelector('#messageOut');

button.addEventListener('click', doQuotes);

function doQuotes(){

	let message = messageIn.value;
	//console.log(message);
	if(message === ''){
		alert('Your message box is empty. Please type something to send');
	}else{
		messageOut.innerHTML=message;
		messageIn.value=''
	}
	
	
	
}

	

