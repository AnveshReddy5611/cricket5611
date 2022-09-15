import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import Cricket from "./cricket";

function Home() {
  const navigate = useNavigate();
  const gotocricket = () => {
    navigate("./cricket");
  };
  return (
    <div className="complete"> <h1 className="category">Select a Category</h1> 
    <div className="container">
      <div className="row">
     <br />
     

        <div className="col" id="one" onClick={gotocricket}>
          <img id="imgone"
            className="card-img-top"
            src="https://th.bing.com/th/id/OIP.UfR1DG-lO8d4O_IMQ3VsXQHaEK?pid=ImgDet&rs=1"
            alt="Card image cap"/>
          <div className="card-body">
            <h5 className="card-title">Cricket</h5>
          </div>
        </div>

        <div className="col" id="two" >
          <img id="imgtwo"
            className="card-img-top"
            src="https://th.bing.com/th/id/OIP.VPq5hQFmqGWinGJCuUJjhwHaEo?w=297&h=185&c=7&r=0&o=5&pid=1.7"
            alt="Card image cap"/>
          <div className="card-body">
            <h5 className="card-title">FootBall</h5>
          </div>
        </div>

        <div className="col" id="three">
          <img id="imgthree"
            className="card-img-top"
            src="https://www.hdnicewallpapers.com/Walls/Big/Hockey/After_Won_the_Match_Indian_Team_Celebrates_in_Hockey_World_League_2013.jpg"
            alt="Card image cap"/>
          <div className="card-body">
            <h5 className="card-title">Hockey</h5>
          </div>
        </div>
        </div>
      </div></div>
  
  );
}
export default Home;
