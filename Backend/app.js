const express = require('express'); 
const path = require ('path'); 
const cors = require('cors');
const bodyParser = require('body-parser');
const userData = require('./models/userdata');
const sellerData = require('./models/sellerdata');
const jwt= require('jsonwebtoken');
const { execFileSync } = require('child_process');


const app = express();
app.use(cors());
app.use(bodyParser.json());



//user sign up

app.post('/insert',function(req,res){
    res.header("Access-Control-Allow-Orgin","*")
    res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS");
   
//    console.log(req.body.userdata.name);

   var userdata={

    name:req.body.userdata.name,
    email:req.body.userdata.email,
    phone:req.body.userdata.phone,
    password:req.body.userdata.password


   }


     var userdata = new userData(userdata);
     userdata.save()

})

//adding seller sign up data to database

app.post('/add',function(req,res){
  res.header("Access-Control-Allow-Orgin","*")
  res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS");
 


 var sellerdata={

  name:req.body.sellerdata.name,
  email:req.body.sellerdata.email,
  phone:req.body.sellerdata.phone,
  password:req.body.sellerdata.password


 }


   var sellerdata = new sellerData(sellerdata);
   sellerdata.save()

})

//user login 

app.post('/login',function(req,res){
    console.log("login checking");

    let userdata = req.body;

    console.log(userdata.email);
    console.log(userdata.password);

    userData.find().then(function(user){
        console.log(user);
        
        var userverify;
   

    for(i=0;i<user.length;i++){
        
        if (userdata.email==user[i].email && userdata.password==user[i].password){
          
           userverify=true;
           console.log("true");
           break;

          } 

        else {
          userverify=false;
        }

       

           
        }
          if(userverify==true){
            
            console.log("success full login");
            let payload ={subject:userdata.email+userdata.password}
            let token = jwt.sign(payload,'secretKey');
            res.status(200).send({token});
  
          }

          else{
            res.status(401).json({
             message: "Login Unsuccessful ! Invalid Credentials"});
          }
    
});
})

//seller login

app.post('/sellerlogin',function(req,res){
  console.log("seller login checking");

  let sellerdata = req.body;

  console.log(sellerdata.email);
  console.log(sellerdata.password);

  sellerData.find().then(function(seller){
      console.log(seller);
      
      var sellerverify;
 

  for(i=0;i<seller.length;i++){
      
      if (sellerdata.email==seller[i].email && sellerdata.password==seller[i].password){
        
         sellerverify=true;
         console.log("true");
         break;

        } 

      else {
        sellerverify=false;
      }

     

         
      }
        if(sellerverify==true){
          
          console.log("success full login");
          let payload ={subject:sellerdata.email+sellerdata.password}
          let token = jwt.sign(payload,'secretKey');
          res.status(200).send({token});

        }

        else{
          res.status(401).json({
           message: "Login Unsuccessful ! Invalid Credentials"});
        }
  
      });

    })

const PORT = process.env.PORT || 2000;
    app.listen(PORT, () => {
    console.log(`running on http://localhost:${PORT}`);
    })