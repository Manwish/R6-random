function attack(){
	randomOper(1, 34, 'a');
}

function protect(){
	randomOper(1, 33, 'b');
}

function randomOper(min, max, c){
a=Math.floor(Math.random() * max) + min;
	if (document.getElementById('oper').style.display!="none") document.getElementById('oper').style.display="none"; 
	else document.getElementById(b).style.display="none"; 
	switch(a){
		case 1:	document.getElementById(c+'1').style.display="block"; break;
		case 2:	document.getElementById(c+'2').style.display="block"; break;
		case 3: document.getElementById(c+'3').style.display="block"; break;
		case 4:	document.getElementById(c+'4').style.display="block"; break;
		case 5:	document.getElementById(c+'5').style.display="block"; break;
		case 6:	document.getElementById(c+'6').style.display="block"; break;
		case 7: document.getElementById(c+'7').style.display="block"; break;
		case 8:	document.getElementById(c+'8').style.display="block"; break;
		case 9:	document.getElementById(c+'9').style.display="block"; break;
		case 10: document.getElementById(c+'10').style.display="block"; break;
		case 11: document.getElementById(c+'11').style.display="block"; break;
		case 12: document.getElementById(c+'12').style.display="block"; break;
		case 13: document.getElementById(c+'13').style.display="block"; break;
		case 14: document.getElementById(c+'14').style.display="block"; break;
		case 15: document.getElementById(c+'15').style.display="block"; break;
		case 16: document.getElementById(c+'16').style.display="block"; break;
		case 17: document.getElementById(c+'17').style.display="block"; break;
		case 18: document.getElementById(c+'18').style.display="block"; break;
		case 19: document.getElementById(c+'19').style.display="block"; break;
		case 20: document.getElementById(c+'20').style.display="block"; break;
		case 21: document.getElementById(c+'21').style.display="block"; break;
		case 22: document.getElementById(c+'22').style.display="block"; break;
		case 23: document.getElementById(c+'23').style.display="block"; break;
		case 24: document.getElementById(c+'24').style.display="block"; break;
		case 25: document.getElementById(c+'25').style.display="block"; break;
		case 26: document.getElementById(c+'26').style.display="block"; break;
		case 27: document.getElementById(c+'27').style.display="block"; break;
		case 28: document.getElementById(c+'28').style.display="block"; break;
		case 29: document.getElementById(c+'29').style.display="block"; break;
		case 30: document.getElementById(c+'30').style.display="block"; break;
		case 31: document.getElementById(c+'31').style.display="block"; break;
		case 32: document.getElementById(c+'32').style.display="block"; break;
		case 33: document.getElementById(c+'33').style.display="block"; break;
		case 34: document.getElementById(c+'34').style.display="block"; break;	
	}
	b= c+a;
	return (a);

}