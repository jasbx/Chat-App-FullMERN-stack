import React from 'react'
import './SiwpeButtons.css';
import CloseIcon from '@mui/icons-material/Close';
import ReplayIcon from '@mui/icons-material/Replay';
import StarRateIcon from '@mui/icons-material/StarRate';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import { IconButton } from '@mui/material';
const SiwpeButtons = () => {
  return (
    <div className='SiwpeButtons'>
      <IconButton>
        <CloseIcon fontSize='large' className='swipeButton_repeat'/>
      </IconButton>
      <IconButton>
        <ReplayIcon fontSize='large' className='swipeButton_left'/>
      </IconButton>
      <IconButton>
        <StarRateIcon fontSize='large' className='swipeButton_start'/>
      </IconButton>
      <IconButton>
        <FavoriteIcon fontSize='large' className='swipeButton_right'/>
      </IconButton>
      <IconButton>
        <FlashOnIcon fontSize='large' className='swipeButton_ligning'/>
      </IconButton>
    </div>
  )
}

export default SiwpeButtons
