import React from 'react'
import { useEffect,useState } from 'react';

const Imageslider = () => {
    const [index,setIndex]=useState(0);
    const images=["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp3vVkyDT_vQ78GFqTFimQf7Nw7J9fAUHAmP9D6zSOtQ&s=10",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdIlYsGV6iKsIVHO2cyjadylgZfiNOdBixeOaJYmJiFQ&s=10",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKkcxTbgibs_EcEr5LJe9N6bGEnxmdNfe0hXKq-OdL0A&s=10",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_Yubg0W0YIMscWP2g8giMvr1Rcg7nncEKk1V21HclLA&s=10"]
    useEffect(()=>{
        const interval = setInterval(() => {
            setIndex((prevIndex)=> (prevIndex + 1) % images.length)
        },1000)
        return()=>clearInterval(interval);
    },[])
  return (
    <div>
        <h1>Image slider</h1>
        <img src={images[index]}
        alt = "img-here"
        style={{height:"200px",width:"200px"}}>
        </img>
    </div>
  )
}

export default Imageslider