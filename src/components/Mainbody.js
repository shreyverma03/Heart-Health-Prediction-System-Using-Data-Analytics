import React from 'react'
import './Mainbody.css'
import heartbeat from '../assets/video3.mp4'
import heart from '../assets/heart.gif'


import { DiOpensource } from "react-icons/di";
import { MdOutlineVerifiedUser } from "react-icons/md";
import {HiUserGroup} from "react-icons/hi"; 
import {FiEyeOff} from "react-icons/fi"; 
import {GrTarget} from "react-icons/fi"; 
import {MdCropFree} from  "react-icons/md";
import {CgDanger} from "react-icons/cg";

const Mainbody = () => {
  return (
    <div className='main'>
   
        <div className='bodytitle'><span>Uwindsor</span>Healthify</div>
        <video src={heartbeat} autoPlay loop muted />
        <img src={heart} className="Heart_gif" ></img>
        <div className='bodydesc'>
        <p>Predict diseases with the help of AI  🦾  to save cost, time, and to prevent misdiagnosis. Any hospital or individual user can use this web application to predict the disease . Click on "Services" &  "Lifestyle" at the top 👆 to see the list of services.</p>
        </div>

        <div className='container'>
            <div className='first-object ob'>

             <MdOutlineVerifiedUser className='img'/>
              <div className='text-title'>
                <p>Accurate Predictions</p>
              </div>
              <div className='text-desc'>
                <p>Our AI Model is more than 95% accurate</p>
              </div>

            </div>

            <div className='second-object ob'>
              
              <MdCropFree className='img'/>
              <div className='text-title'>
                <p>Free</p>
              </div>
              <div className='text-desc'>
                <p>Our Software is free to use! </p>
              </div>

            </div>
            <div className='third-object ob'>
              
            <FiEyeOff className='img'/>
              <div className='text-title'>
                <p>Private</p>
              </div>
              <div className='text-desc'>
                <p>We do not collect your personal information.</p>
              </div>

            </div>
            <div className='fourth-object ob'>
              
            <CgDanger className='img'/>
              <div className='text-title'>
                <p>No Mis-diagnosis</p>
              </div>
              <div className='text-desc'>
                <p>Use AI as a second opinion</p>
              </div>

            </div>
            <div className='fifth-object ob'>
              
           <DiOpensource className='img'/>
              <div className='text-title'>
                <p>Open-Source</p>
              </div>
              <div className='text-desc'>
                <p>Our software is open-sourced.</p>
              </div>

            </div>
            <div className='sixth-object ob'>
            <HiUserGroup className='img'/>
              <div className='text-title'>
                <p>User-friendly</p>
              </div>
              <div className='text-desc'>
                <p>Predict diseases within few clicks!</p>
              </div>

            </div>


        </div>
    </div>
    
  )
}

export default Mainbody