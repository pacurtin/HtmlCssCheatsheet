/**
 * Created by padraig on 05/06/2017.
 */
var modal = (function(){
    var $window = $(window);
    var $modal = $('<div class="modal"/>');
    var $content = $('<div class="modal-content"/>');
    var $close = $('<button role="button" class="modal-close">Close</button>');

    $modal.append($content,$close);

    $close.on('click', function(e){
        e.preventDefault();
        modal.close();
    });

    return{
        center:function(){
            //calc distance from top and left of window to centr of modal
            var top = Math.max($window.innerHeight() - $modal[0].clientHeight, 0)/2;
            var left = Math.max($window.innerWidth() - $modal[0].clientWidth, 0)/2;
            $modal.css({
               top: top + $window.scrollTop(),
               left: left + $window.scrollLeft()
            });
        },
        open:function(settings){
            $content.empty().append(settings.content);

            $modal.css({
                width:settings.width || 'auto',
                height:settings.height || 'auto'
            }).appendTo('body');

            modal.center();
            $window.on('resize',modal.center);
        },
        close:function(){
            $content.empty();
            $modal.detach();
            $(window).off('resize',modal.center);
        }
    };
}());