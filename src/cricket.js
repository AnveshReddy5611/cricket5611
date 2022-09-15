import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import {save} from "./randomslice"
import "./cricket.css"
//import {US} from "country-flag-icons/react/3x2"


function Cricket() {
  // const status= ("suresh"<"suresh")? "suresh": ("suresh"<"suresh")?"suresh":"mahesh"
  // console.log(status,"I am status")

  const[disable, setDiasable]=useState(true)
  const date=new Date()
  const actualtime=date.getHours()+":"+date.getMinutes()
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const matches=useSelector((state)=>state.Random.matches)
  console.log(matches,"I a,m matches")
  const gotomatch=(index)=>{
    dispatch(save(index))
    console.log(index,"Anvesh")  
    navigate("/bet")
 // window.location.href='/indvspak'
   
  }
  return (
    <div>
      <table className="table table-hover table-dark" id="table">
        
    <thead>
      <tr>
        <th scope="col">S.No</th>
        <th scope="col">Fixture</th>      
        <th scope="col">Format</th>
        <th scope="col">Venue</th>
        <th scope="col">Time</th>
        <th scope="col">Status</th>
      </tr>
    </thead>
   
     
  <tbody>
  {matches.map((data,index)=>{
      return(
        <>
    <tr disabled={!disable} onClick={()=>gotomatch(data)}  >    
      <th scope="row">{data.SNo}</th>
      <td >{data.Match}</td>
      <td>{data.format}</td>
      <td>{data.Venue}</td>
      <td>{data.Time}</td>
      <td>{data.starttime > actualtime?"Yet to Start":data.endtime<actualtime?"Match Finished":"In Match"}</td>
           
    </tr>
    </>
      )
    })}
    </tbody>
    
</table>    
    </div>
  )
}

export default Cricket