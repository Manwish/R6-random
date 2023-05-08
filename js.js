function attack(){
	randomOper(1,34,'a');
}

function protect(){
	randomOper(1,33,'b');
}

function randomOper(min,max,letter){
	max = max*1000000;
	oper = Math.floor(Math.random()*(max-min) + min)
	oper = String(oper);
	oper = Number(oper.slice(0,-6)) + 1;
	operNow = letter+oper;	
	if (document.getElementById('oper').style.display!="none") document.getElementById('oper').style.display="none";
	else {document.getElementById(lastOper).style.display="none";
	if (lastOper == operNow) randomOper(min,(max/1000000),letter);
	}
	document.getElementById(operNow).style.display="block";
	lastOper = letter+oper;
	return (oper);
}