
import './App.css';
import {useState} from "react";
import IconButton from '@mui/material/IconButton';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddColor from './AddColor.js';
import { App } from './App.1';
import { Counter } from './Counter'; 
import {
  BrowserRouter as Router,Switch, Route
} from "react-router-dom";
import { AddColor } from './AddColor';

export function Starting({ nme, ur,rat,des }) {
const styles={color: rat>=8.5? "green":"red"};
const[isHide,setIsHide]=useState(false);

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
    </div>
    <Switch>
    <Route path="/Home">
       welcome to movie app
       </Route>
       <Route path="/Counter">
       <Counter/>
       </Route>
       <Route path="/AddColor">
       <AddColor/>
       </Route>
       </Switch>
      </div>
    </div>
    </div>
   
  
  );
}


export default App;
