
import React from 'react'
import {MdOutlineCopyright} from "react-icons/md";
import './Footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
    <p className='footertitle'><span>Uwindsor</span>Healthify</p>    
    
    <p className='footerdesc'><MdOutlineCopyright className='img1'/>Copyright 2022</p> 
    </footer>
  )
}
export default Footer