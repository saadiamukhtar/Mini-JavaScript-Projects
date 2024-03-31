const form= document.getElementById('form');
const username= document.getElementById('username');
const email= document.getElementById('email');
const password= document.getElementById('password');
const confirm= document.getElementById('password2');

function showError(input, message){
    const formControl= input.parentElement;
    formControl.className= 'form-control error'
    const small= formControl.querySelector('small');
    small.innerText= message;
}
function showSuccess(input){
   
    const formControl= input.parentElement;
    formControl.className= 'form-control success'
}

const validateEmail = (input) => {
    
       const re= /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
       if(re.test(input.value.trim())){
        showSuccess(input);
       } else{
        showError(input, 'Email is not valid');
       }
      
  };
// Check required fields
function checkRequired(inputArr){
    inputArr.forEach(function(input){
        if(input.value.trim()===''){
            showError(input,`${getFieldName(input)} is required`);
        }
    });

}
// Validate password
function validatePassword(input) 
{ 
var decimal=  /^(?=.\d)(?=.[a-z])(?=.[A-Z])(?=.[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
if(!input.value.match(decimal)) 
{ 
    showError(input,'Password must contain one uppercase,lowercase, one numeric digit');
}

}
//Check password match
function checkPasswordsMatch(input1, input2){
    console.log(input1.value);
    console.log(input2.value);
    if(input1.value!=input2.value){
        showError(input2,'Passwords do not match');
    }

}


function getFieldName(input){
    return input.id.charAt(0).toUpperCase()+input.id.slice(1);
}
// Check Input length
function checkLength(input,min,max){
    if(input.value.length<min){
        showError(input,`${getFieldName(input)} must be atleast ${min} characters long`);
    } else if(input.value.length>max){
        showError(input,`${getFieldName(input)} cannot be more than ${max} charcaters long`);

    } else {
        showSuccess(input);

    }
}


form.addEventListener('submit',function(e){
    e.preventDefault();
    checkRequired([username,email,password,confirm]);
    checkLength(username,3,15);
    checkLength(password,8,15);
    validateEmail(email);
    validatePassword(password);
    checkPasswordsMatch(password,confirm);



   
});