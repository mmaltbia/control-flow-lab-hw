//Bonus

var userEmail = prompt("What is your email address?");

function validate() {
for(i = 0; i < 2; i++){
    if (userEmail.match('@','.com')){
        alert('Thanks for signing up!');
        end;
    }

    else {
       if (!userEmail.match('@','.com')){
       userEmail = prompt('Not a valid email. Please provide a valid email address.'); 
       console.log(i);
       if (i === 1){
            alert('Please try again when you have a valid email address.');
       }
    }
    }
}
}

validate();






