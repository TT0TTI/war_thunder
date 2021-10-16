import React, { useEffect, useState } from "react";
import axios from "axios";
import { Nav, NavItem, NavLink } from "reactstrap";
import "./App.css";

const App = () => {
  const [tank, setTank] = useState("");
  const [list, setList] = useState([]);
  const [activeTab, setActiveTab] = useState("전체");
  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };
  const apiUrl = "dummy/warThunder_tank_list.json";

  useEffect(() => {
    axios.get(apiUrl).then((res) => {
      setList(res.data.TankList);
    });
  }, []);

  const Docil = list.filter((item) => item.country === "독일");
  const Soleyn = list.filter((item) => item.country === "소련");
  const migug = list.filter((item) => item.country === "미국");
  const youngug = list.filter((item) => item.country === "영국");

  const WarThunder = (activeTab) => {
    switch(activeTab){
      case "전체" :
        return(
          <div className="tank">
            {list.filter((val)=>{
              if(tank === ""){
                return val;
              }else if(val.name.toLowerCase().includes(tank.toLowerCase())){
                return val;
              }
            }).map((val)=>{
              return(
                <div>
                  <img src={val.imgUrl} alt={val.name} key={val.name} />
                  <p>{val.name}</p>
                </div>
              )
            })}
          </div>
        )
      case "소련" :
        return(
          <div className="tank">
            {Soleyn.filter((val)=>{
              if(tank === ""){
                return val;
              }else if(val.name.toLowerCase().includes(tank.toLowerCase())){
                return val;
              }
            }).map((val)=>{
              return(
                <div>
                  <img src={val.imgUrl} alt={val.name} key={val.name} />
                  <p>{val.name}</p>
                </div>
              )
            })}
          </div>
        );
      case "독일" :
        return(
          <div className="tank">
            {Docil.filter((val)=>{
              if(tank === ""){
                return val;
              }else if(val.name.toLowerCase().includes(tank.toLowerCase())){
                return val;
              }
            }).map((val)=>{
              return(
                <div>
                  <img src={val.imgUrl} alt={val.name} key={val.name} />
                  <p>{val.name}</p>
                </div>
              )
            })}
          </div>
        );    
      case "미국" :
        return(
          <div className="tank">
            {migug.filter((val)=>{
              if(tank === ""){
                return val;
              }else if(val.name.toLowerCase().includes(tank.toLowerCase())){
                return val;
              }
            }).map((val)=>{
              return(
                <div>
                  <img src={val.imgUrl} alt={val.name} key={val.name} />
                  <p>{val.name}</p>
                </div>
              )
            })}
          </div>
        );
      case "영국" :
        return(
          <div className="tank">
            {youngug.filter((val)=>{
              if(tank === ""){
                return val;
              }else if(val.name.toLowerCase().includes(tank.toLowerCase())){
                return val;
              }
            }).map((val)=>{
              return(
                <div>
                  <img src={val.imgUrl} alt={val.name} key={val.name} />
                  <p>{val.name}</p>
                </div>
              )
            })}
          </div>
        );
      default:
        return;
    }
  };


  return (
    <div className="body">
      <div className="input">
        <input 
        className="tankInput" 
        placeholder="탱크 이름" 
        value={tank} 
        onChange={e=>{setTank(e.target.value)}} />
      </div>

      <Nav tabs>
        <NavItem>
          <NavLink 
          onClick={() => {
            toggle("전체");
          }}>
            전체
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
          onClick={() => {
            toggle("독일");
          }}>
            독일
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
          onClick={() => {
            toggle("소련");
          }}>
            소련
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
          onClick={() => {
            toggle("미국");
          }}>
            미국
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
          onClick={() => {
            toggle("영국");
          }}>
            영국
          </NavLink>
        </NavItem>
      </Nav>

      {WarThunder(activeTab)}
    </div>
  );
};

export default App;
