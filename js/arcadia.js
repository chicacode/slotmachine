
// Start JS name_age.html

        var name;
        var age;

        function go_arcadia() {

          name = document.getElementById("name").value;
          age = document.getElementById("age").value;

          console.log("El valor de name es:", name);        
          console.log("El valor de age es:", age);

          if (age > 17) {
              console.log("LA EDAD ES: ", age);
              window.location.href = "arcadia.html";
              //document.getElementById('hola').innerHTML = '<a href="arcadia.html"></a>';

          } else {
              console.log("YOU ARE TO YOUNGGGGGG");
          
              var para = document.createElement("p");
              var node = document.createTextNode("SORRY " + name + "!"+" YOU ARE TO YOUNG!" + " YOU HAVE TO BE OVER 18.");
              para.appendChild(node);
              var element = document.getElementById("div_error");
              element.appendChild(para);
              
              var arrow = document.getElementById("arrow");

              arrow.style.display = "block";

              var write = document.getElementById("write");

              write.style.display = "none";

          }
          
      }

// Finish JS name_age.html

// Start JS arcadia.html

var score = 100;
var reward = 0;
	
var bombo1;
var bombo2;
var bombo3;

var directry = "./img/symbol";
//Set variables for indicating path to folder includes images.

var list = new Array();
//var list indicates full path to the images including its file name.
for (var i = 0; i < 7; i++) {
  list[i] = directry + i + ".png";
  //var list = "directory to folder" + "one of the numbers(i)" + "extention(png)".
  //new Image().src = list[i];
  //Create image of which src is list[i].
}

console.log(list);
	
function slot() {
	
	bombo1 = Math.floor((Math.random() * 6) + 1);
	bombo2 = Math.floor((Math.random() * 6) + 1);
  bombo3 = Math.floor((Math.random() * 6) + 1);
  
  document.bombo1.src = list[bombo1];
  document.bombo2.src = list[bombo2];
  document.bombo3.src = list[bombo3];
	
	console.log(score);
	console.log(bombo1, bombo2, bombo3);
	
	if (score > 0) {
		
		score = score - 10;
		
          if ((bombo1 == 6) && (bombo2 == 6) && (bombo3 == 6)) {
            reward = 5000;
            score = score + reward;
            console.log("error!");
            document.getElementById("all").innerHTML = "YOU WIN " + reward + "!<br> YOU HAVE " +score + " POINTS";
          } else if ((bombo1 == 5) && (bombo2 == 5) && (bombo3 == 5)) {
            reward = 250;
            score = score + reward;
            document.getElementById("all").innerHTML = "YOU WIN " + reward + "!<br> YOU HAVE " +score + " POINTS";
            //ocument.getElementById("animate").innerHTML = 'class="animated fadeInDown delay-0s';
          } else if ((bombo1 == 5) && (bombo2 == 5) && (bombo3 != 5)) {
            reward = 150;
            score = score + reward;
            document.getElementById("all").innerHTML = name + ", YOU WIN " + reward + "!<br> YOU HAVE " +score + " POINTS";
          } else if ((bombo1 == 4) && (bombo2 == 4) && (bombo3 == 4)) {
            reward = 80;
            score = score + reward;
            document.getElementById("all").innerHTML = name + ", YOU WIN " + reward + "!<br> YOU HAVE " +score + " POINTS";
          } else if ((bombo1 == 4) && (bombo2 == 4) && (bombo3 != 4)) {
            reward = 60;
            score = score + reward;
            document.getElementById("all").innerHTML = name + ", YOU WIN " + reward + "!<br> YOU HAVE " +score + " POINTS";
          } else if ((bombo1 == 3) && (bombo2 == 3) && (bombo3 == 3)) {
            reward = 50;
            score = score + reward;
            document.getElementById("all").innerHTML = name + ", YOU WIN " + reward + "!<br> YOU HAVE " +score + " POINTS";
          } else if ((bombo1 == 3) && (bombo2 == 3) && (bombo3 != 3)) {
            reward = 40;
            score = score + reward;
            document.getElementById("all").innerHTML = name + ", YOU WIN " + reward + "!<br> YOU HAVE " +score + " POINTS";
          } else if ((bombo1 == 2) && (bombo2 == 2) && (bombo3 == 2)) {
            reward = 30;
            score = score + reward;
            document.getElementById("all").innerHTML = name + ", YOU WIN " + reward + "!<br> YOU HAVE " +score + " POINTS";
          } else if ((bombo1 == 2) && (bombo2 == 2) && (bombo3 != 2)) {
            reward = 15;
            score = score + reward;
            document.getElementById("all").innerHTML = name + ", YOU WIN " + reward + "!<br> YOU HAVE " +score + " POINTS";
          } else if ((bombo1 == 1) && (bombo2 == 1) && (bombo3 == 1)) {
            reward = 10;
            score = score + reward;
            document.getElementById("all").innerHTML = name + ", YOU WIN " + reward + "!<br> YOU HAVE " +score + " POINTS";
          } else if ((bombo1 == 1) && (bombo2 == 1) && (bombo3 != 1)) {
            reward = 5;
            score = score + reward;
            document.getElementById("all").innerHTML = name + ", YOU WIN " + reward + "!<br> YOU HAVE " +score + " POINTS";
          } else if ((bombo1 == 1) && (bombo2 != 1) && (bombo3 != 1)) {
            reward = 2;
            score = score + reward;
            document.getElementById("all").innerHTML = name + ", YOU WIN " + reward + "!<br> YOU HAVE " +score + " POINTS";
          } else {
            reward = 0;
            score = score + reward;
            document.getElementById("all").innerHTML = "SORRY " + name + ", NO LUCK! <br> YOU HAVE " +score + " POINTS";
          }

  } // Finishis if (score > 0)

}

// Finish JS arcadia.html