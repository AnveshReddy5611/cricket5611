import React from 'react'
import './bet.css'
import { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {teamselected,setvalues} from "./randomslice"

function Bet() {
    const date=new Date()
    const actualtime=date.getHours()+":"+date.getMinutes()
    const [formvalues,setFormvalues]=useState({name:'',phone:''})
    const[disable, setDiasable]=useState(true)
    const valueone=useSelector((state)=>state.Random.value)   
    const status=valueone.starttime > actualtime?"Yet to Start":valueone.endtime<actualtime?"Match Finished":"In Match" 
    console.log(valueone," I am value one in bet ")
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const goto=(team)=>{
        console.log(team,"I am you team")
        dispatch(teamselected(team))
        navigate("/indvspak")
    }
    const handleChange=(event)=>{
        setFormvalues({...formvalues,[event.target.name]:event.target.value})
    }
    const handleSubmit=(e)=>{
        dispatch(setvalues(formvalues))
        setDiasable(false)
        e.preventDefault()
        console.log("values present")

    }
    function Match(){
        // if(status!="Match Finished")
        return(
            <div id="bodyone">
            <h5>Match : {valueone.Match}</h5>
            <h5>Format : {valueone.format}</h5>
            <h5>Venue: {valueone.Venue}</h5>
            <h5>Time: {valueone.Time}</h5>
            <h6>Select a team to Bet on</h6>
            <button  onClick={()=>goto(valueone.Team1)} disabled={disable}>{valueone.Team1}</button>
            <button  onClick={()=>goto(valueone.Team2)} disabled={disable}>{valueone.Team2}</button>
                
            <form onSubmit={handleSubmit}> 
           
                <input type="text" name="name" placeholder='Enter your Name'
                 value={formvalues.name} onChange={handleChange} required></input>
                <input type="phone"name="phone" value={formvalues.phone} 
                placeholder='Enter your Mobile No' onChange={handleChange} required></input>
                <button type="submit">Submit</button>
            </form>
        
               
            </div>

        )
        // return(
        //     <div id="Matchfinished">Match Finshed Please select the other one</div>
        // )
    }
  return (
    
   <div>
    <Match></Match>
   </div>
  )
}

export default Bet