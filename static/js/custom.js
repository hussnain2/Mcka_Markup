$(document).ready(function () {
    $('#show-hide').click(function (e) {
        var text = $('#show-hide').text();
        if(text=='visibility_off'){
            $('#show-hide').text('visibility')
        }
        else
        {
            $('#show-hide').text('visibility_off')
        }
    })
});

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})