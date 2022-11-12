
    //Author name: Het natvarbhai patel
    //Student I'd: 0805024
    //Date: 10/11/2022
$(function () {
    $('#photo-viewer').customPhotoViewer().show().on('click', '.photo-box', function (e) {
        var $content = $(this).clone().find('img').css({
            marginLeft: 0,
            marginTop: 0,
            width: '100%',
            height: 'auto'
        });
        //modal code goes here:
        modal.open({
            content: $content_,
            width: 800,
            height: 'auto',
        });
        e.preventDefault();
            (function (someParameter) {
            console.log(someParameter);
                var $content_ = $content.detach();
                var modal = new Modal();
                
                
        })("ValuePassedIn");
    });
});
