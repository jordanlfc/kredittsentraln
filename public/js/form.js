$(document).ready(function () {
    $("select#employment-type").change(function () {
        if (
            $("select#employment-type").val() == 1 ||
            $("select#employment-type").val() == 2 ||
            $("select#employment-type").val() == 3 ||
            $("select#employment-type").val() == 4 ||
            $("select#employment-type").val() == 10
        ) {
            $("#employment-since").prop("disabled", false);
            $("#employer-name").prop("disabled", false);
        } else {
            $("#employment-since").prop("disabled", true);
            $("#employer-name").prop("disabled", true);
        }
    });

    $("#citizen").change(function () {
        if (
            $('#citizen').is(":checked")
        ) {
            $("#country").prop("disabled", true);
            $("#years-in-norway").prop("disabled", true);
        } else {
            $("#country").prop("disabled", false);
            $("#years-in-norway").prop("disabled", false);
        }

    });


    $("select#employment-type-c").change(function () {
        if (
            $("select#employment-type-c").val() == 1 ||
            $("select#employment-type-c").val() == 2 ||
            $("select#employment-type-c").val() == 3 ||
            $("select#employment-type-c").val() == 4 ||
            $("select#employment-type-c").val() == 10
        ) {
            $("#employment-since-c").prop("disabled", false);
            $("#employer-name-c").prop("disabled", false);
        } else {
            $("#employment-since-c").prop("disabled", true);
            $("#employer-name-c").prop("disabled", true);
        }
    });

    $("#citizen-c").change(function () {
        if (
            $('#citizen-c').is(":checked")
        ) {
            $("#country-c").prop("disabled", true);
            $("#years-in-norway-c").prop("disabled", true);
        } else {
            $("#country-c").prop("disabled", false);
            $("#years-in-norway-c").prop("disabled", false);
        }

    });

    $("#civil-status").change(function () {
        if (
            $("select#civil-status").val() == 1 ||
            $("select#civil-status").val() == 5
        ) {
            $("#spouse-income").prop("disabled", false);
        } else {
            $("#spouse-income").prop("disabled", true);
        }
    });

    $("#living-status").change(function () {
        if (
            $("select#living-status").val() == 1 ||
            $("select#living-status").val() == 3
        ) {
            $("#rent").prop("disabled", false);
            $("#rent-received").prop("disabled", false);
            $("#mortgage").prop("disabled", false);
        } else if (
            $("select#living-status").val() == 2
        ) {
            $("#rent").prop("disabled", true);
            $("#rent-received").prop("disabled", false);
            $("#mortgage").prop("disabled", false);
        } else if (
            $("select#living-status").val() == 4 ||
            $("select#living-status").val() == 5

        ) {
            $("#rent").prop("disabled", false);
            $("#rent-received").prop("disabled", true);
            $("#mortgage").prop("disabled", true);
        } else {
            $("#rent").prop("disabled", false);
            $("#rent-received").prop("disabled", false);
            $("#mortgage").prop("disabled", false);
        }

    });


    $("#co-applicant").change(function () {
        if (
            $('#co-applicant').is(":checked")
        ) {
            $('#co-hab').removeClass("hide")
        } else {
            $('#co-hab').addClass("hide")  
        }

    });




















});