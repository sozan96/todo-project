/*var userName = prompt ("What's your name ?");
console.log(userName);

var yourGender = prompt ("enter a gender : male or female " );
console.log(yourGender);

var yearOld = prompt ("How old are you ?");
if (yearOld <= 0) 
{
 alert("your age cant be zero or negative");
}

var userConfirm = confirm ("Are you want to skip the welcoming message?")
console.log(userConfirm);


if ( userConfirm == false) {

if ( yourGender.toLowerCase() == "male" )
{

   
     alert  (` hello Mr ${userName}` );
}

else if (yourGender.toLowerCase()  == "female")
{
    alert  (` hello Ms ${userName}` );
}
*/


//TASK 6


let arr=[];
function functionOne()

{
    let questionOne = prompt ("Are you playing sports evreyday ? " );

        if (questionOne == "")
      { 
          questionOne= "invalid ";
      }
          arr.push( questionOne);

     }

//calling function one
functionOne()



function functionTow()

{
    let questionTwo = prompt ("Are you need to help in js ? " );

        if (questionTwo == "")
      { 
        questionTwo= "invalid ";
      }
          arr.push( questionTwo);

     }

//caliing function two
functionTow()


function functionThree()

{
    let questionThree = prompt ("Are you happy in Js ? " );

        if (questionThree == "")
      { 
        questionThree= "invalid ";
      }
          arr.push(questionThree);

     }

//calling function three
functionThree()

console.log(arr);

for(let i=0 ; i<arr.length ; i++)
{
    console.log(arr[i]);
}







