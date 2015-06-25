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

//Exercise 2

var userLogin = {
    name: "Linda",
    password: "frogs"};

var userEntered = prompt('Enter password for ' + userLogin.name);
var attempts = 0;
var maxAttempts = 2;

function passTrue(){
    if (userLogin.password === userEntered){
        alert('Correct Password.');
        end;
    }
}

function passFalse(){
            if (userLogin.password !== userEntered){
                userEntered = prompt('Incorrect password. Please enter the correct password. You have ' + (maxAttempts - attempts) + ' tries remaining.');
                passTrue();
            }
}

for (attempts = 0; attempts < 2; attempts++){
        passTrue() || passFalse();
        console.log(attempts);

        if (attempts === 1){
            alert('No more attempts.');
      }
}

//Exercise 3

var securityQuestions = [
    {question: "Childhood bestfriend",
    expectedAnswer: "Victoria"},

    {question: "pet's name",
    expectedAnswer: "Liz"},

    {question: "Mother's name",
    expectedAnswer: "Jaime"}
];

function securityCheck(){
    userResponse1 = prompt('Name of childhood bestfriend?')
        if (userResponse1 === securityQuestions[0].expectedAnswer){
            alert('Correct. You may proceed.');
            end;
        }
        else {
           userResponse2 = prompt("Pet's name?");
           if (userResponse2 === securityQuestions[1].expectedAnswer){
               alert('Correct. You may proceed.')
               end;
           }
           else {
               alert('Are you who you say you are?');
           }
        }
    }

securityCheck();

//Bonus

var userEmail = prompt('What is your email address?');

function validate() {
    if (userEmail.match('@')){
        alert('Thanks for signing up!');
        end;
    }

    else{
        userEmail = prompt('Not a valid email. Please provide a valid email address');
    }
}

validate();

if (validate() !== true){
        userEmail = prompt('Not a valid email. Please provide a valid email address');
        validate();
    }


//Bonus 2

var userEmail = prompt("What is your email address?");

function validate() {
for(i = 0; i < 5; i++){
    if (userEmail.match('@','.com')){
        alert('Thanks for signing up!');
        end;
    }

    else {
       if (!userEmail.match('@','.com')){
       userEmail = prompt('Not a valid email. Please provide a valid email address.'); 
       console.log(i);
       if (i === 4){
            alert('Please try again when you have a valid email address.');
       }
    }
    }
}
}

validate();






