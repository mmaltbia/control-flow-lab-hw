//Exercise 1

for (var bottlesBeer = 5; bottlesBeer > 0; bottlesBeer--) {
if (bottlesBeer === 2) {
        console.log(bottlesBeer + " " + "bottles of beer on the wall,"); 
        console.log(bottlesBeer + " " + "bottles of beer!");
        console.log("Take one down and pass it around,");
        console.log(bottlesBeer-1 + " " + "bottle of beer on the wall!");
        console.log(" ");
}
else if (bottlesBeer === 1) {
        console.log(bottlesBeer + " " + "bottle of beer on the wall,"); 
        console.log(bottlesBeer + " " + "bottle of beer!");
        console.log("Take one down and pass it around,");
        console.log("No more" + " " + "bottles of beer on the wall!");
        console.log(" ");
}

else {
        console.log(bottlesBeer + " " + "bottles of beer on the wall,"); 
        console.log(bottlesBeer + " " + "bottles of beer!");
        console.log("Take one down and pass it around,");
        console.log(bottlesBeer-1 + " " + "bottles of beer on the wall!");
        console.log(" ");
}
}