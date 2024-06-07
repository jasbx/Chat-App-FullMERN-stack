import React from 'react';
import './header.css'
import PersonIcon from '@mui/icons-material/Person';
import { IconButton } from '@mui/material';
import ForumIcon from '@mui/icons-material/Forum';
const Header = () => {
  return (
    <div className='header '>
     <IconButton>
     <PersonIcon fontSize="large"  className='header_icon'/>
      </IconButton> 
      <img className='header_logo '
      src='/logo.jpg'
      alt='img'
      ></img>
   <IconButton>
     <ForumIcon fontSize="large"  className='header_icon'/>
      </IconButton> 
    </div>
  )
}

export default Header
