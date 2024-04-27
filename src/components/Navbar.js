import React from 'react'
import {Link} from 'react-router-dom';
import {Stack} from '@mui/material';

import Logo from '../assets/images/Logo.png';

const Navbar = () => {
  return (
    <Stack>
      <Link to="/">
        <img src={Logo} alt="logo" style={{width: "40px", height:"48px", margin:"0 20px" }}/>
      </Link>
      <Stack>
        <Link to="/" style={{textDecoration: 'none', color: "3#A1212", borderBottom: "3px solid #FF2625"}} >Home</Link>
        <a href="exercises" style={{textDecoration: 'none', color: '#3A1212'}} >Exercises</a>
      </Stack>
    </Stack>
    
    
  )
}

export default Navbar
