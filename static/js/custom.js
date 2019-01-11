$(document).ready(function () {
    $('#show-hide').click(function () {
        var text = $('#show-hide').text();
        if(text=='visibility_off'){
            $('#show-hide').text('visibility')
            $('#password-visibility').attr( 'type' , 'text');
        }
        else
        {
            $('#show-hide').text('visibility_off');
            $('#password-visibility').attr( 'type' , 'password');
        }
    });

    //Form label animation
    $('#user ~ input').focus(function () {
        $('#user').addClass('active');
    })

    $('#password ~ input').focus(function () {
        $('#password').addClass('active');
    })


});