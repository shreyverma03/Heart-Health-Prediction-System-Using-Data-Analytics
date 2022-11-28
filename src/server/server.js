const express = require('express');

const app = express();
const mongoose = require('mongoose');
const cors = require("cors");

app.get('/api',(req,res) =>{
    res.json({"users":["user1","user2","user3"]})
})
app.use(cors());
app.use(express.json()); 

//require("./db/conn");
const port = process.env.PORT || 3000;
const mongourl = "mongodb+srv://shreyverma03:Qwerty123.@cluster0.h2gcokl.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(mongourl,
{
    useNewUrlParser:true,
})
.then(() => {
    console.log ("connected to db");
})
.catch((e) => console.log(e));

require("./userDetails");

const userData = mongoose.model("UserInfo");
app.post("/register",async(req,res)=>
{
    const {age, chest_pain, blood_pressure,heart_rate,ecg,slope,gender,cholesterol,blood_sugar,exercise_induced_angina,thalassemia} = req.body;
    try{
        await userData.create({
         age,
         chest_pain,
         blood_pressure,
         heart_rate,
         ecg,
         slope,
         gender,
         cholesterol,
         blood_sugar,
         exercise_induced_angina,
         thalassemia
        });
        res.send({status:"ok"});
    }catch(error){
        res.send({status:"error"});
    }
}
)
app.listen(6010,()=> { 
  console.log('server is running at 6010');
})

//const static_path = path.join(__dirname,'/app.js');
//app.use(express.static(static_path));



