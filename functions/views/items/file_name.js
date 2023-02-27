$('input').on('change', function () {
    var file = $(this).prop('files')[0];
    $('.file_message').text(file.name);
});