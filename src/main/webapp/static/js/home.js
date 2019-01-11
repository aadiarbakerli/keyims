var reimbursement={};

var baseURL="/Project1/";

window.onload=function(){
	
	
	//event listeners
	
	document.onkeydown = checkEnter;
	document.getElementById("submit").onclick=submit;
	let simple = document.getElementsByClassName("simple-reimbursement");
	for(let i = 0; i<simple.length; i++){
		simple[i].onchange=updateField;
		simple[i].keydown=checkEnter;
	}
	
}

function populateForm(){
	document.getElementById("inputName").value=book.title;
	document.getElementById("b_cover").value = book.cover;
	document.getElementById("b_isbn10").value = book.isbn10;
	document.getElementById("b_isbn13").value = book.isbn13;
	document.getElementById("b_stock").value = book.stock;
	document.getElementById("b_price").value = book.price;
}

function updateField(){
	console.log(reimbursement);
	let id = event.target.id.substring("b_".length);
	reimbursement[id]=event.target.value;
	console.log(reimbursement);
}

function submit(){
	document.getElementById("submit").disabled=true;
	console.log("submit");
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange=moveToReimbursements;
	xhttp.open("POST", baseURL+"reimbursements");
	xhttp.send(JSON.stringify(reimbursement));

	function moveToReimbursements() {
		if(xhttp.readyState===4)
			backtohome();
	}
}
function backtohome(){
	window.location.href=baseURL+"goHome";
}