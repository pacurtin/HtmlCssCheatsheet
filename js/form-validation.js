var userNameField = document.getElementById('formUserName');
var passwordField = document.getElementById('formPassword');
var userNameFieldWarning = document.getElementById('formUserNameWarning');
var passwordFieldWarning = document.getElementById('formPasswordWarning');

function needName(){
    if(userNameField.value.length>0){
        userNameFieldWarning.textContent="";
    }else{
        userNameFieldWarning.textContent="Must not be empty";
    }
}

userNameField.addEventListener('input',needName,false);

/*----------------------------------------------------------------------------*/

var petChoiceSelector = document.getElementById('petChoice');
var petChoiceWarning = document.getElementById('petChoiceWarning');

function petType(){
    petChoiceWarning.textContent=this.options[this.selectedIndex].value;
}

petChoiceSelector.addEventListener('change',petType,false);