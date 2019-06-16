$(document).ready(function () {
    $(document).click(function () {
         var aa = $('#slider-range-value').text()
         var ab = $('#repayment-value').text()

         $('#period').val(aa)
         $('#repayment').val(ab)
    });
});
