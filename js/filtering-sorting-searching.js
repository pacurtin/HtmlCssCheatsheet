/**
 * Created by padraig on 06/06/2017.
 */

var freeLancerArray = [
    {
        name: 'Nigel',
        rate:120
    },{
        name: 'Casey',
        rate:60
    },{
        name: 'Gordon',
        rate:75
    },{
        name: 'Camille',
        rate:80
    }
];

//cacheRowsBool and cacheRowsCache only for searchable tables
function fillArray($tBody, dataArray, cacheRowsBool, cacheRowsCache ){
    $tBody.children().remove(); //Remove Placeholder Tim
    dataArray.forEach(function(person){
        var $newRow = $('<tr></tr>');
        if(cacheRowsBool === true){
            //this will allow me hide rows based on name input...hopefully!
            cacheRowsCache.push({
               $row:$newRow,
               name:person.name.trim().toLowerCase()
            });
        }
        var $newName = $('<th></th>').text(person.name);
        var $newRate = $('<th></th>').text(person.rate);
        $newRow.append($newName);
        $newRow.append($newRate);
        $tBody.append($newRow);
    });
}

function priceRange(person){
    return (person.rate >= 65) && (person.rate <=90)
}

//table showing original data;
var $origTbody = $('#orig-array-tbody');
fillArray($origTbody, freeLancerArray, false);

//table demonstrating a filter on original data
var filteredResults = freeLancerArray.filter(priceRange);
var $filteredTbody = $('#filtered-array-tbody');
fillArray($filteredTbody, filteredResults, false);

//table with search functionality
var $searchInput = $('#search-input');
var searchCacheObject = [];
var $searchTbody = $('#search-tbody');
fillArray($searchTbody, freeLancerArray, true, searchCacheObject);
$searchInput.on('input', function(){
    searchCacheObject.forEach(function(row){
        // goes through each row hiding them as it goes. then reshows them if its a match.
        // if the field is empty nothing will show. Not ideal but I want to move on to the next thing.
        row.$row.hide();
        debugger;
        var name = row.name.trim().toLowerCase();
        var searchSubString = $searchInput[0].value.trim().toLowerCase();
        if(name.indexOf(searchSubString)!== -1){
            row.$row.show();
        }
    });
});

//table demonstrating sorting original table
//var sortedResults = freeLancerArray.sort();
var $sortedArrayTbody = $('#sorted-array-tbody');
fillArray($sortedArrayTbody, freeLancerArray, false);    //filling with unsorted first

var sortRows = $sortedArrayTbody.find('tr').toArray();
sortRows.sort(firstNameSort);
$sortedArrayTbody.append(sortRows);

//compare function
function firstNameSort(a,b){
    if(a.children[0].textContent < b.children[0].textContent){
        return -1;
    }else{
        return 1;
    }
}