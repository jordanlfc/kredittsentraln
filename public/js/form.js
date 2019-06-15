$(document).ready(function() {
    $( "select#employment-type" ).change(function() {
        if(
            $( "select#employment-type" ).val() == 1 ||
            $( "select#employment-type" ).val() == 2 ||
            $( "select#employment-type" ).val() == 3 ||
            $( "select#employment-type" ).val() == 4 ||
            $( "select#employment-type" ).val() == 10 
        ){
            $( "#employment-since" ).prop( "disabled", false );
            $( "#employer-name" ).prop( "disabled", false );
        } else {
            $( "#employment-since" ).prop( "disabled", true );
            $( "#employer-name" ).prop( "disabled", true );
        }
    });

    $( "#citizen" ).change(function() {
        if(
            $('#citizen').is(":checked")
        ){
            $( "#country" ).prop( "disabled", true );
            $( "#years-in-norway" ).prop( "disabled", true );
        } else {
            $( "#country" ).prop( "disabled", false );
            $( "#years-in-norway" ).prop( "disabled", false);
        }
        
    });

    $( "#civil-status" ).change(function() {
        if (
            $( "select#civil-status" ).val() == 1 || 
            $( "select#civil-status" ).val() == 5 
        ){
            $( "#spouse-income" ).prop( "disabled", false );
        } else {
            $( "#spouse-income" ).prop( "disabled", true );
        }
    });

    
    








    








});