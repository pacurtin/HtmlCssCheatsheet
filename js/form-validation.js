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

/*----------------------------------------------------------------------------*/
//Ch.13 examples

(function(){
    var form = document.getElementById('searchForm')

    form.addEventListener('submit', function(e){
        e.preventDefault();
        var elements = this.elements;
        var searchInput = elements.search.value;
        var message = "You searched for: " + searchInput;
        document.getElementById('searchFormContents').textContent = message;
    }, false);

}());

/*----------------------------------------------------------------------------*/
//Linked select example

(function(){
    var pet = document.getElementById('petChoice');
    var breed = document.getElementById('breedChoice');
    var cats = {shortHair:"British Short Hair", persian:"Persian"};
    var dogs = {wolfHound:"Irish Wolf Hound", chihuahua:"Chihuahua"};

    pet.addEventListener('change',function(){
        if (this.value ==='choose'){
            breed.innerHTML = '<option>Please choose a pet first</option>';
            return;
        }
        var breeds = getBreeds(this.value);

        var options = '<option>Please choose a breed</option>';
        for (var key in breeds){
            options += '<option value="' + key + '">' + breeds[key] + '</option>';
        }
        breed.innerHTML = options;
    });

    function getBreeds(pet){
        if (pet === 'Cat'){
            return cats;
        } else if (pet === 'Dog'){
            return dogs;
        }
    }
}());