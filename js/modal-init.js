/**
 * Created by padraig on 05/06/2017.
 */
(function(){
    var $content = $('#share-options').detach();

    $('#share').on('click',function(){
       modal.open({content:$content,width:340,height:300});
    });
}());
