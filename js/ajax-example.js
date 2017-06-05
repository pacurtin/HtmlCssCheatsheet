/**
 * Created by padraig on 01/06/2017.
 */

var xhr = new XMLHttpRequest();
xhr.open('GET','data/test.json', true);
xhr.send('search=arduino');

xhr.onload = function(){
    if(xhr.status==200){
        //Do something!
    }
}

/*
Javascript (Literal) Object Notation

{
    arrayExample:[
        {
            "key1":value,
            "key2":value,
            "key3":value
        },
        {
            "key4":value,
            "key5":value
        }
    ]
}

//Use JSON.parse() and JSON.stringify() for JSON to Javascript Object and vice versa.

*/