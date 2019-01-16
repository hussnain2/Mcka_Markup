$(document).ready(function () {
    $('#show-hide').click(function () {
        var text = $('#show-hide').text();
        if (text == 'visibility_off') {
            $('#show-hide').text('visibility')
            $('#password-visibility').attr('type', 'text');
        }
        else {
            $('#show-hide').text('visibility_off');
            $('#password-visibility').attr('type', 'password');
        }
    });

    //Form label animation
    $('#user ~ input').focus(function () {
        $('#user').addClass('active');
    })

    $('#password ~ input').focus(function () {
        $('#password').addClass('active');
    });


//Input Placeholder become label

    $('input').focus(function () {
        $(this).parents('.form-group').addClass('focused');
    });

    $('input').blur(function () {
        var inputValue = $(this).val();
        if (inputValue == "") {
            $(this).removeClass('filled');
            $(this).parents('.form-group').removeClass('focused');
        } else {
            $(this).addClass('filled');
        }
    });


//    Add/Remove class on Need Help link on mobile
    $(".login .helpLink").click(function () {
        var self = $(this).parent();
        self.toggleClass("show-links");
        // $("html, body").animate({ scrollTop: $(document).height() }, 1000);
    });
});


$(function () {
    $('[data-toggle="popover"]').popover()
});