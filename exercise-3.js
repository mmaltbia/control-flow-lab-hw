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