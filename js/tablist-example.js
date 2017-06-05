$('.tablist').each(function(){
    var $this = $(this);//the whole widget div
    var $tab = $this.find('li.active'); //initial active div
    var $link = $tab.find('a');//a inside the tab
    var $panel = $($link.attr('href'));//href inside the a

    $this.on('click', '.tab', function(e){  //if click on a tab in $this
        e.preventDefault();
        var $newTab = $(this);
        var $link = $newTab.find('a');//a inside the tab
        var $id = $($link.attr('href'));
        debugger;
        if($id && !$link.is('.active')){
            $panel.removeClass('active');
            $tab.removeClass('active');

            $panel = $id.addClass('active');
            $tab = $link.parent().addClass('active')
        }
    })
});