function attack(){
	randomOper(1,36,'a');
}

function protect(){
	randomOper(1,35,'b');
}

function randomOper(min,max,letter){
	oper = Math.floor(Math.random() * max + min)
	operNow = letter+oper;	
	if (document.getElementById('oper').style.display!="none") document.getElementById('oper').style.display="none";
	else {document.getElementById(lastOper).style.display="none";
	if (lastOper == operNow) randomOper(min,max,letter);
	}
	document.getElementById(operNow).style.display="block";
	lastOper = letter+oper;
	return (operNow);
}