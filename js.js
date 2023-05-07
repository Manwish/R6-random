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
	switch(oper){
		case 1:	document.getElementById(letter+'1').style.display="block"; break;
		case 2:	document.getElementById(letter+'2').style.display="block"; break;
		case 3: document.getElementById(letter+'3').style.display="block"; break;
		case 4:	document.getElementById(letter+'4').style.display="block"; break;
		case 5:	document.getElementById(letter+'5').style.display="block"; break;
		case 6:	document.getElementById(letter+'6').style.display="block"; break;
		case 7: document.getElementById(letter+'7').style.display="block"; break;
		case 8:	document.getElementById(letter+'8').style.display="block"; break;
		case 9:	document.getElementById(letter+'9').style.display="block"; break;
		case 10: document.getElementById(letter+'10').style.display="block"; break;
		case 11: document.getElementById(letter+'11').style.display="block"; break;
		case 12: document.getElementById(letter+'12').style.display="block"; break;
		case 13: document.getElementById(letter+'13').style.display="block"; break;
		case 14: document.getElementById(letter+'14').style.display="block"; break;
		case 15: document.getElementById(letter+'15').style.display="block"; break;
		case 16: document.getElementById(letter+'16').style.display="block"; break;
		case 17: document.getElementById(letter+'17').style.display="block"; break;
		case 18: document.getElementById(letter+'18').style.display="block"; break;
		case 19: document.getElementById(letter+'19').style.display="block"; break;
		case 20: document.getElementById(letter+'20').style.display="block"; break;
		case 21: document.getElementById(letter+'21').style.display="block"; break;
		case 22: document.getElementById(letter+'22').style.display="block"; break;
		case 23: document.getElementById(letter+'23').style.display="block"; break;
		case 24: document.getElementById(letter+'24').style.display="block"; break;
		case 25: document.getElementById(letter+'25').style.display="block"; break;
		case 26: document.getElementById(letter+'26').style.display="block"; break;
		case 27: document.getElementById(letter+'27').style.display="block"; break;
		case 28: document.getElementById(letter+'28').style.display="block"; break;
		case 29: document.getElementById(letter+'29').style.display="block"; break;
		case 30: document.getElementById(letter+'30').style.display="block"; break;
		case 31: document.getElementById(letter+'31').style.display="block"; break;
		case 32: document.getElementById(letter+'32').style.display="block"; break;
		case 33: document.getElementById(letter+'33').style.display="block"; break;
		case 34: document.getElementById(letter+'34').style.display="block"; break;	
	}
	lastOper = letter+oper;
	return (oper);
}