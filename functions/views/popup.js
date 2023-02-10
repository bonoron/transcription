$(function () {
    $('#openModel').click(function(){
        $('#modelArea').fadeIn();
        $('#saveButton').fadeOut();
    });
    $('#closeModel , #modelBg').click(function(){
        $('#modelArea').fadeOut();
        $('#saveButton').fadeIn();
    });
});