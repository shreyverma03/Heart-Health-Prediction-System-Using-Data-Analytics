const mongoose = require('mongoose');

const UserDetailsSchema = new mongoose.Schema(
{
  age:String, 
  chest_pain:String,
  blood_pressure:String,
  heart_rate:String,
  ecg:String,
  slope:String,
  gender:String,
  cholesterol:String,
  blood_sugar:String,
  exercise_induced_angina:String,
  thalassemia:String
},
{
collection:"UserInfo",
}
);

mongoose.model("UserInfo", UserDetailsSchema);