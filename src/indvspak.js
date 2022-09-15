import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setscore,
  setwickets,
  setOvers,
  secondsetwickets,
  secondsetscore,
  secondsetOvers,
  setFlag,
  compare,
  TEAM1,
  TEAM2
} from "./randomslice";
import "./indpak.css";

function INDPAK() {
  const [sampleNumber, setSampleNumber] = useState(0);

const result=useSelector((state)=>state.Random.result)
  const score = useSelector((state) => state.Random.value1);
  const Teams = useSelector((state) => state.Random.value);
  
  const team1=Teams.Team1
  const team2=Teams.Team2
 
//  console.log(Teams, "I am Teams");
  const secondscore = useSelector((state) => state.Random.secondscore);
  const wicketsneeded = useSelector((state) => state.Random.wickets);
  
  const secondwicketsneeded = useSelector(
    (state) => state.Random.secondwickets
  );
  const team = useSelector((state) => state.Random.team);
  const formvalues = useSelector((state) => state.Random.formvalues);

  const dispatch = useDispatch();
  dispatch(TEAM1(team1))
 dispatch(TEAM2(team2))
  const overs = useSelector((state) => state.Random.overs);
  const secondovers = useSelector((state) => state.Random.secondovers);
  const flag = useSelector((state) => state.Random.flag);
  useEffect(() => {
    var timer = setInterval(() => {
      if (overs < 5) {
        dispatch(setOvers(overs + 1));
       
        if (wicketsneeded < 10) {
        
          if (wicketsneeded < 9) {
            var wickets = Math.floor(Math.random() * 2 + 0);
            dispatch(setwickets(wickets));
          } else {
            var wickets = Math.floor(Math.random());
            dispatch(setwickets(wickets));
          }

          var overscore = Math.floor(Math.random() * 15 + 1);
        
          dispatch(setscore(overscore));
        }
        
      }

      if (wicketsneeded >= 10 || overs >= 5) {      
        const rr = 2;
       // setFscore(score)
        dispatch(setFlag(rr));
      }
    
      if (flag === 2) {
       if(secondscore<=score){
        if (secondovers < 5) {
          dispatch(secondsetOvers(secondovers + 1));
       
          if (secondwicketsneeded < 10) {
           
            var secondwickets = Math.floor(Math.random() * 2 + 0);
            dispatch(secondsetwickets(secondwickets));
          } else {
            var secondwickets = Math.floor(Math.random());
            dispatch(setwickets(secondwickets));
          }

          var secondoverscore = Math.floor(Math.random() * 15 + 1);
        
          dispatch(secondsetscore(secondoverscore));

        
        }}
        if (secondwicketsneeded >= 10 || secondovers >= 5 || secondscore>=score) {
         // setSscore(secondscore)
         console.log(score,"I am score")
         console.log(secondscore,"I am second score")
          dispatch(compare())
          
          // if(fscore>sscore){
          //   setResult({team1},"Won the match")
          // }
          // else if(sscore>fscore){
          //   setResult({team2},"Won the match")

          // }
          // else{
          //   setResult("Match Drawn")
          // }
          //  console.log("@#$@$@#$#@$#@$@#")
        }
      }

      //console.log(flag, "I am flag");
      clearInterval(timer);
    }, 5000);
  }, [
    score,
    wicketsneeded,
    overs,
    secondscore,
    secondwicketsneeded,
    secondovers,
    flag
  ]);

  return (
    <div className="App">
      {/* <h1>{}</h1> */}
      {/* <button onClick={getRandomNumber}>{'Genrate'}</button> */}
      {/* <p>{sampleNumber}</p> */}
      {/* <p>score1:{score}</p>
      <p>overs1:{overs}</p>
      <p>score1:{secondscore}</p>
      <p>overs2:{secondovers}</p>
      <p>{flag}</p>
      ------------------ */}

      <div className="main">
        {/* <h1>Match status</h1> */}

        <h3 className="head">
          Cricket T20 World Cup 2022 <span className="right day">...</span>
        </h3>
        <p className="target">
          <u>Ind won the toss and choose to Bowl</u>
        </p>
        <p className="target"></p>

        <table className="table">
          <tbody>
            <tr>
              <td>
                <img
                  className="flag"
                  src="https://i.imgur.com/717RRSi.png"
                  alt=""
                />
                &emsp;<span>{Teams.Team1}</span>
                <br />
                <br />
                <p className="score">
                  {score}/{wicketsneeded}
                </p>
                <p className="overs">({overs}/5)</p>
              </td>
              <td className="right1">
                <span>{Teams.Team2}</span>&emsp;
                <img
                  className="flag"
                
                  src="  https://i.imgur.com/ZxbFH9r.png"
                  alt=""
                />
                <br />
                <br />
                <p className="score pak">
                  {secondscore}/{secondwicketsneeded}
                </p>
                <p className="overs pak">
                  ({secondovers}/5)
                </p>
              </td>
            </tr>
          </tbody>
        </table>
        <center>
          <p className="res">Team WON :{result}</p>
          <p className="match">T20 1 of 6</p>
        </center>
        <p>
          UserDetails: {formvalues.name}, {formvalues.phone}
        </p>
        <p>Team You Selected: {team}</p>
        <p>finalresult:{result==team?"You Won The Match":result=="Tie"?"Match Draw":result==""?"":"You Lost"}</p>
      </div>
    </div>
  );
}

export default INDPAK;
