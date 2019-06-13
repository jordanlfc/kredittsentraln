const request = require("request");


request('http://localhost:5000/api', function(error, response, body){
    if(error){
        console.log(error)
    } else {
        if(response.statusCode == 200){
        //things worked
        console.log(body)
        }
    }
});


