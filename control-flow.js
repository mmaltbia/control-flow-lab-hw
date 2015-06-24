/**for (var bottlesBeer = 5; bottlesBeer < 6 && bottlesBeer >= 0; bottlesBeer--) {
    if (bottlesBeer < 6 && bottlesBeer > 2){
        console.log(
        bottlesBeer + " " + "bottles of beer on the wall," + " " +
        bottlesBeer + " " + "bottles of beer!" + " " +
        "Take one down and pass it around," + " " +
        (bottlesBeer-1) + " " + "bottles of beer on the wall!"
    );
    }
    
    if (bottlesBeer < 2 && bottlesBeer > 1){
        console.log(
        bottlesBeer + " " + "bottles of beer on the wall," + " " +
        bottlesBeer + " " + "bottles of beer!" + " " +
        "Take one down and pass it around," + " " +
        (bottlesBeer-1) + " " + "bottle of beer on the wall!"
    );
    }
} **/


for (var bottlesBeer = 5; bottlesBeer < 6 && bottlesBeer > 0; bottlesBeer--) {
        console.log(bottlesBeer + " " + "bottles of beer on the wall,"); 
        console.log(bottlesBeer + " " + "bottles of beer!");
        console.log("Take one down and pass it around,");
        console.log(bottlesBeer-1 + " " + "bottles of beer on the wall!");
        console.log(" ");
}