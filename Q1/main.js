/* 

Using the form displayed in index.html, create the following functionality using JavaScript. 

If the user tries to submit the form without entering any info, display an error message on the page that tells them all info is required. 
When users submit their first name and favourite colour, display a customized welcome message on the page in a new H1 that includes their name. Change the background colour of the page to their favourite colour. 

*/
//for(int i=0; i< document.querySelector('form').length(); i++){

//}

var button = document.querySelector("body > main > form > input.submit");
button.onclick = required;

function required(e){
    e.preventDefault();
    var input1 = document.querySelector("body > main > form > input.firstname");
    var input2 = document.querySelector("body > main > form > input.lastname");
    var input3 = document.querySelector("body > main > form > input.favcolor");
         if(input1.value == '')
         alert("input first name");
         if(input2.value == '')
         alert("input last name");
         if(input3.value == '')
         alert("input fav color");

    document.body.style.background = input3.value;


var h1 = document.createElement("h1");
  var t = document.createTextNode("Hi " + input1.value);
  h1.appendChild(t)
document.body.appendChild(h1)
}

