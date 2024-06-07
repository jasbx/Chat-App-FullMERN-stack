"use client"
import React, { useEffect, useState } from 'react'
import './cardsapp.css'
import TinderCard from 'react-tinder-card'
const CardsApp = () => {
    
    const [pepole,setPepole]=useState([])
useEffect(()=>{
const Fetchata= async()=>{
    const api= "http://localhost:3000";
  await  fetch(`${api}/get/profile/`)
    .then(res=>res.json())
    .then(data=>setPepole(data))
}
    Fetchata()
},[])
    const swiped=(dir,nameTodelete)=>{
        console.log('removing: '+nameTodelete)
    }
    const outOfFrame=(nameTodelete)=>{
        console.log(nameTodelete+'left the screen!')
    }

  return (
    <div className='cardsapp'>
        <div className='card_container'>
        {pepole.map((item)=>(
<TinderCard
    className='swipe'
    key={item.name}
    preventSwipe={['up', 'down']}
    onSwipe={(dir)=>swiped(dir,item.name)}
    onCardLeftScreen={()=>outOfFrame(item.name)}
  >
    <div style={{backgroundImage:`url(${item.imgUrl})`}} className='card'>
        <h3 className='text-white'>{item.name}</h3>
        <h4>{item.age}</h4>
    </div>

</TinderCard>
))}
        </div>
  
    </div>
  )
}

export default CardsApp
