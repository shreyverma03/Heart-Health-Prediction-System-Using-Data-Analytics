import React,{useState} from "react";
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';
import './Services.css';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import { Button} from 'react-bootstrap';
import FormControl from '@mui/material/FormControl';


const marks = [
    {
      value: 0,
      label: 'Male',
    },
    {
      value: 1,
      label: 'Female',
    },
  ];
  const ecg=[
    {
      value:0,
      label:0,
    },
    {
      value:1,
      label:1,
    },
    {
      value:2,
      label:2,
    },

  ]
  const chest_pain =[
   {
    value:0,
    label: "&nbsp  Asymptomatic",
   },
   {
    value:1,
    label: 'Typical Angina',
   },
   {
    value:2,
    label: 'Atypical Angina',
   },
   {
    value:3,
    label: 'Non-Anginal Pain',
   },
  ];
const Services = () => {

  const [userData,setUserData] = useState({
  age:"", 
  chest_pain:"",
  blood_pressure:"",
  heart_rate:"",
  ecg:"",
  slope:"",
  gender:"",
  cholesterol:"",
  blood_sugar:"",
  exercise_induced_angina:"",
  thalassemia:""
  });

  let name, value;
  const handleInputs =(e) => {
    console.log(e);
    name  = e.target.name;
    value =  e.target.value;

    setUserData({... userData,[name]:value});
  }
  
  const PostData = async(e) => {
    
    e.preventDefault();
    const {age, chest_pain, blood_pressure,heart_rate,ecg,slope,gender,cholesterol,blood_sugar,exercise_induced_angina,thalassemia} = userData;
     
    console.log( age, chest_pain, blood_pressure,heart_rate,ecg,slope,gender,cholesterol,blood_sugar,exercise_induced_angina,thalassemia);
  
    const res = await fetch("http://localhost:6010/register",{
    method:"POST",
    crossDomain:true,
    headers:{
      "Content-Type":"application/json",
      Accept : "application/json",
      "Access-Control-Allow-Origin":"*",
    },
    body:JSON.stringify({
      age, chest_pain, blood_pressure,heart_rate,ecg,slope,gender,cholesterol,blood_sugar,exercise_induced_angina,thalassemia
    })
    });
  
    const data = await res.json();
    console.log(data);
  }
  

    return (

      <div>
        <h1 className="serv">Services</h1>
        <form method="POST">
            <Grid container spacing={6}>
                 <Grid item xs={6}  >
                
                <label>Age</label> <br></br>
                <TextField
                className="grid1"
                variant='outlined'
                label='Age'
                name='age'
                value={userData.age}
                onChange={handleInputs}
                type='number'
                />
                
                <Box className="grid1 gr">
                 <label >Chest Pain(0 = Asymptomatic, 1 = Typical Angina, 2 = Atypical Angina, 3 = Non-Anginal Pain)</label>   
                <Slider
                label="Chest Pain"
                defaultValue={1}
                step={null}
                marks={chest_pain}
                min={0}
                max={3}
                valueLabelDisplay="auto"
                name='chest_pain'
                value={userData.chest_pain}
                onChange={handleInputs}
                />
                </Box>
                
                <label>Blood Pressure</label><br></br>
                <TextField 
                className="grid1" 
                variant='outlined'
                label='Blood Pressure'
                name='blood_pressure'
                value={userData.blood_pressure}
                onChange={handleInputs}
                type='number'
                /><br></br><br></br><br></br>
                <label>Max Heart Rate achieved</label><br></br>
                <TextField 
                className="grid1" 
                variant='outlined'
                label='Heart Rate'
                type='number'
                name='heart_rate'
                value={userData.heart_rate}
                onChange={handleInputs}
                />

                <Box className="grid1 gr">
                <label>ECG at Rest</label>   
                <Slider 
                label="ECG"
                defaultValue={0}
                step={1}
                marks={ecg}
                min={0}
                max={2}
                valueLabelDisplay="off"   
                name='ecg'
                value={userData.ecg}
                onChange={handleInputs}        
                />
                </Box>
                <Box className="grid1 gr">
                <label>Slope of ST segment (0 = Downsloping, 1 = Upsloping, 2 = Flat)</label>   
                <Slider 
                label="ECG"
                defaultValue={0}
                step={1}
                marks={ecg}
                min={0}
                max={2}
                valueLabelDisplay="off" 
                name='slope'
                value={userData.slope}  
                onChange={handleInputs}        
                />
                </Box>
                </Grid >
                <Grid item xs={6} >
                <Box className="grid2">
                <label>Gender</label>   
                <Slider 
                label="Gender"
                defaultValue={0}
                step={1}
                marks={marks}
                min={0}
                max={1}
                valueLabelDisplay="off"      
                name='gender'
                value={userData.gender}    
                onChange={handleInputs} 
                />

                
                </Box>

                <label class="grid2" >Cholesterol(mg/dl)</label><br></br>
                <TextField
                class="text3" 
                variant='outlined'
                label=''
                type='number'
                name='cholesterol'
                value={userData.cholesterol}
                onChange={handleInputs}
            
                />
                <br></br>
                <FormControl class="grid2">
                <FormLabel id="demo-radio-buttons-group-label" >Fasting Blood Sugar (mg/dl)</FormLabel>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="less"
                    name="radio-buttons-group"
                >
                    <FormControlLabel value="less" control={<Radio />} label="Less than or equal to 120" name="blood_sugar" onChange={handleInputs} />
                    <FormControlLabel value="more" control={<Radio />} label="More than 120" name="blood_sugar" onChange={handleInputs} />

                </RadioGroup><br></br><br></br>

                <FormLabel id="demo-radio-buttons-group-label" > </FormLabel>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="yes"
                    name="radio-buttons-group"
                >
                    <FormControlLabel value="yes" control={<Radio />} label="Yes" name='exercise_induced_angina'  onChange={handleInputs} />
                    <FormControlLabel value="no" control={<Radio />} label="No" name='exercise_induced_angina'  onChange={handleInputs} />

                </RadioGroup><br></br><br></br>

                <FormLabel id="demo-radio-buttons-group-label"  >Thalassemia</FormLabel>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="normal"
                    name="radio-buttons-group"
                >
                    <FormControlLabel value="normal" control={<Radio />} label="Normal" name='thalassemia'  onChange={handleInputs}/>
                    <FormControlLabel value="fixed" control={<Radio />} label="Fixed Defect" name='thalassemia'  onChange={handleInputs}/>
                    <FormControlLabel value="reversible" control={<Radio />} label="Reversible Defect" name='thalassemia'  onChange={handleInputs} />

                </RadioGroup>
                </FormControl>
                </Grid>
                
            </Grid>

        <div class="btn">
        <Button class="predict" value="submit" onClick={PostData}>
          Predict
        </Button>
        </div>
        </form>
        
        
      </div>
      
    )
  }
  
  export default Services;



  