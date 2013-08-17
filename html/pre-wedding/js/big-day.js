/* ==============================================
Flexslider
=============================================== */
$(window).load(function() {

    $('.flexslider').flexslider({
    	pauseOnHover: true,
    	directionNav: true,
        controlNav: false
    });
    
});

$(document).ready(function() {

    /* ==============================================
    Checkboxes
    =============================================== */
    $('.checkbox-container').on('click', function() {
    	setupLabel();
    });

    function setupLabel() {
        if ($('.checkbox-container input').length) {
            $('.checkbox-container').each(function(){ 
                $(this).removeClass('checkbox-on');
            });
            $('.checkbox-container input:checked').each(function(){ 
                $(this).parent('.checkbox-container').addClass('checkbox-on');
            });                
        };
    };

    /* ==============================================
    Smooth Scrolling
    =============================================== */
    $('ul.nav li a').on('click', function(e){
        el = $(this).attr('href');
        $('html, body').animate({scrollTop: $(el).offset().top - 74}, 750);
        e.preventDefault();
    });

    /* ==============================================
    Mobile Menu
    =============================================== */
    if ($('.mobile-nav select').length && $('.mobile-nav select').attr('data-autogenerate') == 'true') {
        var mobileMenu = $('.mobile-nav select');
        $('ul.nav li a').each(function(index, elem) {
            mobileMenu.append($('<option></option>').val($(elem).attr('href')).html($(elem).html()));
        });
    }

    $('.mobile-nav select').on('change', function() {
        link = $(this).val();
        if (!link) {
            return;
        }

        if (link.substring(0,1) == '#') {
            $('html, body').animate({scrollTop: $(link).offset().top - 74}, 750);
        } else {
            document.location.href = link;
        }
    });

    /* ==============================================
    Fancybox
    =============================================== */
    $("a.fancybox").fancybox({
        'overlayShow'   : false,
        'transitionIn'  : 'elastic',
        'transitionOut' : 'elastic'
    });

    /* ==============================================
    Form validation
    =============================================== */
    $.validator.setDefaults({
        submitHandler: function() {

            var frm = $('#contact-form');

            $.ajax({
                type: frm.attr('method'),
                url: frm.attr('action'),
                data: frm.serialize(),
                success: function(data) {
                   alert('Message Sent');
                }
             });

        },
        highlight: function(input) {
                $(input).addClass("form-error");
        },
        unhighlight: function(input) {
                $(input).removeClass("form-error");
        }
    });

    $("#contact-form").validate({
        messages: {
            name: {
                required: ''
            },
            email: '',
            message: {
                required: ''
            }
        }
    });


});