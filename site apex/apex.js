function assault(){
	randomOper(1,6,'as');
}

function skirmisher(){
	randomOper(1,5,'sk');
}

function recon(){
	randomOper(1,4,'re');
}

function support(){
	randomOper(1,5,'su');
}

function controller(){
	randomOper(1,4,'co');
}

function all_classes(){
	randomOper(1,24,'*');
}

function randomOper(min,max,letter){
	oper = Math.floor(Math.random()*max + min)
	operNow = letter+oper;	
	if (document.getElementById('none').style.display!="none") document.getElementById('none').style.display="none";
	else {document.getElementById(lastOper).style.display="none";
	if (lastOper == operNow) randomOper(min,max,letter);
	}
	if (letter!='*') {document.getElementById(operNow).style.display="block"; lastOper = letter+oper;}
	else {
		switch(operNow){
			case '*1': lastOper = 'as1'; document.getElementById(lastOper).style.display="block"; break;
			case '*2': lastOper = 'as2'; document.getElementById(lastOper).style.display="block"; break;
			case '*3': lastOper = 'as3'; document.getElementById(lastOper).style.display="block"; break;
			case '*4': lastOper = 'as4'; document.getElementById(lastOper).style.display="block"; break;
			case '*5': lastOper = 'as5'; document.getElementById(lastOper).style.display="block"; break;
			case '*6': lastOper = 'as6'; document.getElementById(lastOper).style.display="block"; break;
			case '*7': lastOper = 'sk1'; document.getElementById(lastOper).style.display="block"; break;
			case '*8': lastOper = 'sk2'; document.getElementById(lastOper).style.display="block"; break;
			case '*9': lastOper = 'sk3'; document.getElementById(lastOper).style.display="block"; break;
			case '*10': lastOper = 'sk4'; document.getElementById(lastOper).style.display="block"; break;
			case '*11':	lastOper = 'sk5'; document.getElementById(lastOper).style.display="block"; break;
			case '*12':	lastOper = 're1'; document.getElementById(lastOper).style.display="block"; break;
			case '*13':	lastOper = 're2'; document.getElementById(lastOper).style.display="block"; break;
			case '*14':	lastOper = 're3'; document.getElementById(lastOper).style.display="block"; break;
			case '*15':	lastOper = 're4'; document.getElementById(lastOper).style.display="block"; break;
			case '*16':	lastOper = 'su1'; document.getElementById(lastOper).style.display="block"; break;
			case '*17':	lastOper = 'su2'; document.getElementById(lastOper).style.display="block"; break;
			case '*18':	lastOper = 'su3'; document.getElementById(lastOper).style.display="block"; break;
			case '*19':	lastOper = 'su4'; document.getElementById(lastOper).style.display="block"; break;
			case '*20':	lastOper = 'su5'; document.getElementById(lastOper).style.display="block"; break;
			case '*21':	lastOper = 'co1'; document.getElementById(lastOper).style.display="block"; break;
			case '*22':	lastOper = 'co2'; document.getElementById(lastOper).style.display="block"; break;
			case '*23':	lastOper = 'co3'; document.getElementById(lastOper).style.display="block"; break;
			case '*24':	lastOper = 'co4'; document.getElementById(lastOper).style.display="block"; break;
		}
	}
	return (operNow);
}