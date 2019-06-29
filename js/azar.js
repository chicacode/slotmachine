	
	var punts = 100;
	var premi = 0;
	
	var bombo1;
	var bombo2;
	var bombo3;
	
document.getElementById('start').onclick=function() {
	
	bombo1 = Math.floor((Math.random() * 6) + 1);
	bombo2 = Math.floor((Math.random() * 6) + 1);
	bombo3 = Math.floor((Math.random() * 6) + 1);
	
	console.log(punts);
	console.log(bombo1, bombo2, bombo3);
	
	if (punts > 0) {
		
		punts = punts-10;
		
		if ((bombo1 == 6) && (bombo2 == 6) && (bombo3 == 6)) {
			premi = 5000;
			punts = punts + premi;
			//document.getElementById('YOU WIN'+premi+'YOU HAVE'+punts).innerHTML="";
		} else if ((bombo1 == 5) && (bombo2 == 5) && (bombo3 == 5)) {
			premi = 2500;
			punts = punts + premi;
		} else if ((bombo1 == 5) && (bombo2 = 5) && (bombo3 != 5)) {
			premi = 1500;
			punts = punts + premi;
		} else if ((bombo1 == 4) && (bombo2 == 4) && (bombo3 == 4)) {
			premi = 800;
			punts = punts + premi;
		} else if ((bombo1 == 4) && (bombo2 == 4) && (bombo3 != 4)) {
			premi = 600;
			punts = punts + premi;
		} else if ((bombo1 == 3) && (bombo2 == 3) && (bombo3 == 3)) {
			premi = 500;
			punts = punts + premi;
		} else if ((bombo1 == 3) && (bombo2 == 3) && (bombo3 != 3)) {
			premi = 400;
			punts = punts + premi;
		} else if ((bombo1 == 2) && (bombo2 == 2) && (bombo3 == 2)) {
			premi = 300;
			punts = punts + premi;
		} else if ((bombo1 == 2) && (bombo2 == 2) && (bombo3 != 2)) {
			premi = 150;
			punts = punts + premi;
		} else if ((bombo1 == 1) && (bombo2 == 1) && (bombo3 == 1)) {
			premi = 100;
			punts = punts + premi;
		} else if ((bombo1 == 1) && (bombo2 == 1) && (bombo3 != 1)) {
			premi = 50;
			punts = punts + premi;
		} else if ((bombo1 == 1) && (bombo2 != 1) && (bombo3 != 1)) {
			premi = 20;
			punts = punts + premi;
		} else {
			premi = 0;
			punts = punts + premi;
		}
	
	}

}