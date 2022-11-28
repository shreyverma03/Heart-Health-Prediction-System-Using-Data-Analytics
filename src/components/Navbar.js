import React, {useState} from 'react'
import {FaRegTimesCircle} from 'react-icons/fa'
import {HiOutlineMenuAlt4} from 'react-icons/hi'
import {Link} from "react-router-dom"
import {TbHeartbeat} from 'react-icons/tb';
import './Navbar.css'
import {Navitems}  from './Navitems';
import  Dropdown  from './Dropdown';

const Navbar = () => {
    const [dropdown, setDropdown] = useState(false);
    const[click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    return (
  <div className='navbar'>
        <div className='container'>
            <h1><span><TbHeartbeat className='heart' /> Uwindsor</span>Healthify</h1>
            <ul className="nav-items">
                {Navitems.map((item)=>{
                    if (item.title === "Services") {
                    return (
                   <li key={item.id} class='nav-item' onMouseEnter={() => setDropdown(true)}
                   onMouseLeave={() => setDropdown(false)}>
                    <Link to={item.path}>{item.title}</Link>
                    {dropdown && <Dropdown />}
                   </li>
                    );
                    }
                })};
                
                
            </ul>

            <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaRegTimesCircle className='icon' />) : (<HiOutlineMenuAlt4 className='icon' />)}
                
            </div>
            
        </div>
        
    </div>
    
    )
}

export default Navbar