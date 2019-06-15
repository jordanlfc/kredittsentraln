
//initial variables
var loanYear = 1;
var stepYear = 1;
var maxLoanYear = 15;
var paymentCycle = 1;
var monthlyRepayment = 0;
var monthlyInterest = 13;
var amortData = [];

//start up method
$(function () {
    $(".ul-buttons li").click(function () {
        $(".ul-buttons li").removeClass("selected");
        $(this).addClass("selected");
        paymentCycle = parseInt($(this).attr("data-value"));
        calculateLoan();
    });

    //Add on blur event
    $("#txtLoan, #txtInterest").on("blur", function () {
        //Perform a check if loan or interest value has been entered invalid value, if it is, set the default value
        if (isNaN($("#txtLoan").val())) {
            $("#txtLoan").val(1000000);
        }

        if (isNaN($("#txtInterest").val())) {
            $("#txtInterest").val(13);
        }
        calculateLoan();
    });
});

//create the noUiSlider
var range = document.getElementById('yearRange');
noUiSlider.create(range, {
    range: {
        'min': 1,
        'max': maxLoanYear
    },
    step: stepYear,
    start: [1],
    direction: 'ltr',
    behaviour: 'hover',
    orientation: 'horizontal',
    connect: [true,false]
});

var rangeSliderValueElement = document.getElementById('slider-range-value');

range.noUiSlider.on('update', function (values, handle) {
    rangeSliderValueElement.innerHTML = parseInt(values[handle]) + ' Years';
});

// ------------------------------------ amount slider

var html5Slider = document.getElementById('amount-range');

noUiSlider.create(html5Slider, {
    start: [10000],
    connect: [true,false],
    range: {
        'min': 10000,
        'max': 500000
    },
    step: 500,
});

var inputNumber = document.querySelector('#txtLoan');

html5Slider.noUiSlider.on('update', function (values, handle) {

    var value = values[handle];

    inputNumber.value = parseInt(value)
    
});


$( "#txtLoan" ).change(function() {
    html5Slider.noUiSlider.set([this.value]);
});



// amount slider end -------------------

//Add the change event to redraw the graph and calculate loan

range.noUiSlider.on("change", function (value) {
    loanYear = parseInt(value[0]);
    calculateLoan();
});

html5Slider.noUiSlider.on("change", function (value) {
    calculateLoan();
});


//Get amortization data based on type and terms
function getAmortData(dataType, terms) {
    var dataValue = 0;
    switch (dataType) {
        case "interest":
            for (var i = 0; i < terms; i++) {
                dataValue += parseFloat(amortData[i].Interest);
            }
            break;
        case "balance":
            dataValue = parseFloat(amortData[terms - 1].Balance);
            break;
    }
    return Math.round(dataValue);
}

//calculate function
function calculateLoan() {
    $("#year-value").html(loanYear);
    var loanBorrow = parseFloat($("#txtLoan").val());
    var interestRate = parseFloat($("#txtInterest").val()) / 1200;
    var totalTerms = 12 * loanYear;

    //Monthly
    var schedulePayment = Math.round(loanBorrow * interestRate / (1 - (Math.pow(1 / (1 + interestRate), totalTerms))));
    monthlyRepayment = schedulePayment;
    var totalInterestPay = totalTerms * schedulePayment;
    amort(loanBorrow, parseFloat($("#txtInterest").val()) / 100, totalTerms);

    switch (paymentCycle) {
        case 2:
            //Fortnightly
            //we multiple by 12 then divided by 52 then multiple by 2
            schedulePayment = Math.round(((schedulePayment * 12) / 52) * 2);
            break;
        case 3:
            //Weekly
            //we multiple by 12 then divided by 52 
            schedulePayment = Math.round((schedulePayment * 12) / 52);
            break;
    }

    $("#repayment-value").html(schedulePayment);
    $("#interest-total").html(getAmortData("interest", totalTerms));
    monthlyInterest = (totalInterestPay - loanBorrow) / totalTerms;
}

calculateLoan();

//function to calculate the amortization data
function amort(balance, interestRate, terms) {
    amortData = [];

    //Calculate the per month interest rate
    var monthlyRate = interestRate / 12;

    //Calculate the payment
    var payment = balance * (monthlyRate / (1 - Math.pow(1 + monthlyRate, -terms)));

    for (var count = 0; count < terms; ++count) {
        var interest = balance * monthlyRate;
        var monthlyPrincipal = payment - interest;
        var amortInfo = {
            Balance: balance.toFixed(2),
            Interest: balance * monthlyRate,
            MonthlyPrincipal: monthlyPrincipal
        }
        amortData.push(amortInfo);
        balance = balance - monthlyPrincipal;
    }

}


// ________________________________ checkbox ______________________________________

var checks = document.querySelectorAll("input[type='checkbox']");

for(var i =0;i<checks.length;i++) {
  /*
    Some javascript is necessary
    just to identify when a value
    has been selected.
  */
  var cb = checks[i];
  cb.classList.add("inactive");
  cb.onchange = (function(x){
    this.classList.remove("inactive");
  });
}