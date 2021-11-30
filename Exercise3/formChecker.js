function decreaseCount(clicked_id){
	let targetLabel = clicked_id;
	let targetLabelName = clicked_id+"Count";
	let count = parseInt(document.getElementById(targetLabelName).innerText);
	console.log(count);

	if(count>0)
		count--;

	document.getElementById(targetLabelName).innerHTML = count;
}

function increaseCount(clicked_id){
	let targetLabel = clicked_id;
	let targetLabelName = clicked_id+"Count";
	let count = parseInt(document.getElementById(targetLabelName).innerText);
	count++;

	document.getElementById(targetLabelName).innerHTML = count;
}

function resetLabels(){
	document.getElementById('icecreamCount').innerHTML = 0;
	document.getElementById('chipsCount').innerHTML = 0;
	document.getElementById('cheetosCount').innerHTML = 0;
	document.getElementById('ramenCount').innerHTML = 0;
}

function validateUsername(username){
	let re = /\S+@\S+\.\S+/;


    return re.test(username);
}

function validateForm(){
	let selectedShipping = document.querySelectorAll('input[name="shipping"]');
	let shippingSelected = false;
	let username = document.getElementById('username').value;

	// check if a shipping option is selected
	for(shipping of selectedShipping){
		if(shipping.checked){
			shippingSelected = true;
		}
	}

	if(!(validateUsername(username))){
		alert("username must be in the form of an email (name@domain.com)");
		return false;
	}
	else if(!(document.getElementById('password').value.length > 0)){  // password field cannot be blank
		alert("password cannot be empty");
		return false;
	}
	else if(!(document.getElementById('icecreamCount').value.length > 0) ||
					!(document.getElementById('chipsCount').value.length > 0) ||
					!(document.getElementById('cheetosCount').value.length > 0) ||
					!(document.getElementById('ramenCount').value.length > 0)){
		alert("quantities cannot be blank");
		return false;
	}
	else if(document.getElementById('icecreamCount').value < 0 ||
					document.getElementById('chipsCount').value < 0 ||
					document.getElementById('cheetosCount').value < 0 ||
					document.getElementById('ramenCount').value < 0){
		alert("quantities cannot be negative");
		return false;
	}
	else if(!shippingSelected){  // have to choose a shipping option
		alert("you must choose a shipping option");
		return false;
	}
	else{
		document.htmlForm.submit();
	}
}
