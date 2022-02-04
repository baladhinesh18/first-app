
import './App.css';
import {useState } from "react";
import IconButton from '@mui/material/IconButton';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import AddColor from './AddColor.js';
import { App } from './App.1';
import InfoIcon from '@mui/icons-material/Info';
import { useHistory } from 'react-router-dom';

// import {
//   Switch, Route
// } from "react-router-dom";
import { Counter } from './Counter'; 

export function Starting({ nme, ur,rat,des,del,id}) {
const styles={color: rat>=8.5? "green":"red"};
const[isHide,setIsHide]=useState(false);
const history=useHistory()
console.log(id)
  return (
    
    <div>
     
    <div className="ro">
     <img src={ur} className="mg" alt={nme} />
      <div className="col">
      <h1> {nme}</h1>
      <h2 style={styles}>IMDB:{rat}/10</h2>
      { isHide?<h3>description:<a href={des}>{des}</a></h3>:null}
      {/* <h3>description:<a href={des}>{des}</a></h3> */}
      <div>
    <IconButton onClick={()=>setIsHide(!isHide)} color="primary"> {isHide ? <ExpandLessIcon/> : <ExpandMoreIcon/>}</IconButton>
    <IconButton><InfoIcon color="primary"onClick={()=> history.push(`/Counter/${id}`)} /></IconButton>
    </div>
   
    <Counter/>
    {del}
      </div>
    </div>
    </div>
   
  
  );
}


export default App;
