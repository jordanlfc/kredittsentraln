const express     = require("express"),
    app         = express(),
    methodOverride = require("method-override"),
    cookieSession = require('cookie-session'),
   { check, validationResult } = require('express-validator/check'), 
   slider = require('nouislider'),
   url = require('url');
   


app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));

app.use(express.urlencoded());

app.use(cookieSession({
   name: 'session',
   keys: ['key1', 'key2'],
   maxAge: 1500000,
   secret:'9h0mp5m3d14'
 }))

// Parse JSON bodies (as sent by API clients)
app.use(express.json())


app.set("view engine", "ejs");

app.get('/', (req,res) => res.render('index1'));



app.post('/calc',(req,res) => {
   var detailsObject = req.body
   console.log(detailsObject)
   res.redirect(url.format({
      pathname:"/apply",
      query: {
         amount:req.body.amount,
         period:req.body.period,
         repayment:req.body.repayment,
         phone:req.body.phone, 
         email:req.body.email,
      }
   }))

});

app.get('/apply',(req,res)=> {
   res.render('form', {data:req.query})
})



app.post('/apply',

// [
//    check('email').isEmail(),
//    check('mobile').isInt().not().isEmpty(),
   // check('social-security-number').isInt().not().isEmpty(),
//    check('employment-type').not().isEmpty(),
//    check('employer-name').not().isEmpty(),
//    check('education').not().isEmpty(),
//    check('country').not().isEmpty(),
//    check('years-in-norway').not().isEmpty(),
//    check('income').isInt().not().isEmpty(),
//    check('civil-status').not().isEmpty(),
//    check('children').not().isEmpty(),
//    check('spouse-income').not().isEmpty(),
//    check('rent').isInt().not().isEmpty(),
//    check('rent-received').isInt().not().isEmpty(),
//    check('mortgage').isInt().not().isEmpty(),
//    check('car-loan').isInt().not().isEmpty(),
//    check('credit-card-debt').isInt().not().isEmpty(),
//    check('credit-card-limit').isInt().not().isEmpty(),
//    check('unsecured-loan').isInt().not().isEmpty(),
//    check('loan-purpose').not().isEmpty(),
//    check('bank-account-number').isInt().not().isEmpty(),
// ],


(req,res) => {

   const errors = validationResult(req);
   if (!errors.isEmpty()) {
     return res.status(422).json({ errors: errors.array() });
   }

   var a = req.body
   res.render('success', {details:a})
   console.log(a)

});

app.get('/api',(req,res) =>{
   const data = {
       name:'john',
       age:'23'
   }
   res.send(data)
});


const port = process.env.PORT || 5000;

// app.listen(port, console.log(`server started on port ${port}`))

app.listen(process.env.PORT, process.env.IP, function(){
   console.log("Server Started");
});


