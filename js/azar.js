var punts = 100;
var premi = 0;

var bombo1;
var bombo2;
var bombo3;

/*document.getElementById("start").onclick = function() {
  bombo1 = Math.floor(Math.random() * 6 + 1);
  bombo2 = Math.floor(Math.random() * 6 + 1);
  bombo3 = Math.floor(Math.random() * 6 + 1);

  console.log(punts);
  console.log(bombo1, bombo2, bombo3);

  if (punts > 0) {
    punts = punts - 10;

    if (bombo1 == 6 && bombo2 == 6 && bombo3 == 6) {
    premi = 5000;
    punts = punts + premi;
      //document.getElementById('YOU WIN'+premi+'YOU HAVE'+punts).innerHTML="";
    } else if (bombo1 == 5 && bombo2 == 5 && bombo3 == 5) {
      premi = 2500;
      punts = punts + premi;
    } else if (bombo1 == 5 && (bombo2 = 5) && bombo3 != 5) {
      premi = 1500;
      punts = punts + premi;
    } else if (bombo1 == 4 && bombo2 == 4 && bombo3 == 4) {
      premi = 800;
      punts = punts + premi;
    } else if (bombo1 == 4 && bombo2 == 4 && bombo3 != 4) {
      premi = 600;
      punts = punts + premi;
    } else if (bombo1 == 3 && bombo2 == 3 && bombo3 == 3) {
      premi = 500;
      punts = punts + premi;
    } else if (bombo1 == 3 && bombo2 == 3 && bombo3 != 3) {
      premi = 400;
      punts = punts + premi;
    } else if (bombo1 == 2 && bombo2 == 2 && bombo3 == 2) {
      premi = 300;
      punts = punts + premi;
    } else if (bombo1 == 2 && bombo2 == 2 && bombo3 != 2) {
      premi = 150;
      punts = punts + premi;
    } else if (bombo1 == 1 && bombo2 == 1 && bombo3 == 1) {
      premi = 100;
      punts = punts + premi;
    } else if (bombo1 == 1 && bombo2 == 1 && bombo3 != 1) {
      premi = 50;
      punts = punts + premi;
    } else if (bombo1 == 1 && bombo2 != 1 && bombo3 != 1) {
      premi = 20;
      punts = punts + premi;
    } else {
      premi = 0;
      punts = punts + premi;
    }
  }
};*/

var Directry = "./img/slot";
//Set variables for indicating path to folder includes images.
var list = new Array();
//var list indicates full path to the images including its file name.
for (var i = 0; i < 7; i++) {
  list[i] = Directry + i + ".png";
  //var list = "directory to folder" + "one of the numbers(i)" + "extention(png)".
  new Image().src = list[i];
  //Create image of which src is list[i].
}
//Start the function

function slot() {
  console.log("ENTRA EN LA FUNCION!!!!!!! SLOT");
  var Random = setInterval(function() {
    // Start generating random numbers. In this case generating process is displayed before the number has been decided.
    punts++;
    //Counter to count the times generating process.
    var bombo1 = Math.floor(Math.random() * 6 + 1);
    var bombo2 = Math.floor(Math.random() * 6 + 1);
    var bombo3 = Math.floor(Math.random() * 6 + 1);
    // The number is generated in decimal point so that the number should be multiplied by 10. Then the number will be rounded to integer by "floor".
    document.bombo1.src = list[bombo1];
    document.bombo2.src = list[bombo2];
    document.bombo3.src = list[bombo3];

    //Show the numbers during number generating process.
    if (punts > 5) {
      var final_left = list[bombo1];
      var final_center = list[bombo2];
      var final_right = list[bombo3];
      // Show five numbers during generating process in 10 mm/sec.

      if (
        final_left == final_center ||
        final_left == final_right ||
        final_center == final_right
      ) {
        document.getElementById("all").innerHTML = "You won second prize!";
        //In this case, if two of three numbers matches the user will get second prize.
      } else if (final_left == final_center && final_left == final_right) {
        document.getElementById("all").innerHTML = "You won first prize!";

        //When all of three numbers matches the user will get first prize.
      } else {
        document.getElementById("all").innerHTML = "You lost. Try Again!";
        //When none of three numbers matches the user will fail.
      }

      punts = 0;
      clearInterval(Random);
      // After the result will be displayed the random number generating process should be closed.
    }
  }, 100); //End of setInterval function
} // End of function slot
