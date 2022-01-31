
import './App.css';
import {useState} from "react";
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { App } from './App.1';
function Counter(){
const [like,setLike]=useState(0);
const[dislike,setDislike]=useState(0);
// const marr={margin:'0 1rem 0 0 ',}
return(
  <div className="vacls">
  <IconButton onClick={()=>setLike(like+1)} color="primary"   > <Badge badgeContent={like} color="primary">
  👍
    </Badge></IconButton>
  <IconButton onClick={()=>setDislike(dislike+1)}   color="error"><Badge badgeContent={dislike} color="error">
  👎
    </Badge></IconButton>
  {/* <h1>{like}</h1> */}
  </div>
)}

export function Starting({ nme, ur,rat,des }) {
const styles={color: rat>=8.5? "green":"red"};
const[isHide,setIsHide]=useState(true);

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
    <Counter/>
      </div>
    </div>
    </div>
  );
}


export default App;
