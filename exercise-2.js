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