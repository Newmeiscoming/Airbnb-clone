import React from 'react'
import "./Poster.css"

const Poster = ({data}) => {
    console.log(data.img)
  return (
    <div className='poster' style={{backgroundImage:data.img}}>
        <div style={{width:"300px"}}> 
        <p style={{margin:0,fontWeight:"600",fontSize:"20px"}}>{data.category}</p>
        <h1 style={{margin:0,fontSize:"35px",fontWeight:"500",lineHeight:"1"}}>{data.title}</h1>
        </div>
        <button style={{fontSize:"18px",fontWeight:"600",marginBottom:"30px",width:"7rem",height:"2.7rem",border:"none",borderRadius:"10px"}}>Show all</button>
    </div>
  )
}

export default Poster;