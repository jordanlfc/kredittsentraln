$(document).ready(function () {

    if($(window).width()<=779){
        $('body').css('display', 'grid')
        $('#navbar').addClass('height-10')
    }


    $(document).click(function () {
        var aa = $('#slider-range-value').text()
        var ab = $('#repayment-value').text()

        $('#period').val(aa)
        $('#repayment').val(ab)
    });

    $('.right').each(function () {
        $(window).resize(function () {
            if ($(window).width() < 1000) {
                $('#nav-right-1').removeClass('margin-left-48')
                $('#nav-right-2').removeClass('margin-left-auto')
                $('#nav-right-3').removeClass('margin-left-auto')
            }
            if ($(window).width() > 1000) {
                $('#nav-right-1').addClass('margin-left-48')
                $('#nav-right-2').addClass('margin-left-auto')
                $('#nav-right-3').addClass('margin-left-auto')
            }
        })
    });

    $(window).resize(function(){
        if($(window).width()<=779){
            $('body').css('display', 'grid')
            $('#navbar').addClass('height-10')
        }
        if($(window).width()>779){
            $('body').css('display', 'block')
            $('#navbar').removeClass('height-10')
            $('#page-section').addClass('mt-3').removeClass('mt-10')
        }
    })

    $('#toggle-bar').click(function(){
        if($(window).width()<=779){
            $('#page-section').removeClass('mt-3').addClass('mt-10')
        }
    })
});

