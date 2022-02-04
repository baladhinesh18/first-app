import { useState } from "react";
import { AddMovie } from "./AddMovie";
import { Starting } from './App';
import {
    Switch, Route,Link
  } from "react-router-dom";
  import { AddColor } from './AddColor';
  import { Error } from './Error';
// import { IconButton } from "@mui/material";
import DeleteIcon from '@material-ui/icons/Delete';

// const[add,setAdd] =useState([]);
export function App() {
  let users = [
    {
      name: "JaiBheem",
      url: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQm8U_-RJoMKrgvpIVLbDV8ovuHIp-p_Ls5I7WHaXJUUCbhjQVd",
      rating: "9.4",
      summary: "https://en.wikipedia.org/wiki/Jai_Bhim_(film)"
    },
    {
      name: "Spiderman-No Way Home",
      url: "https://www.thehindubusinessline.com/news/variety/4sw3ar/article37984362.ece/ALTERNATES/PORTRAIT_355/Spider-Man---No-Way-Home-Poster-Pic-Credit---Marvel",
      rating: "8.9",
      summary: "https://en.wikipedia.org/wiki/Spider-Man:_No_Way_Home"
    },
    {
      name: "Rocky",
      url: "https://static.toiimg.com/thumb/msid-88435003,width-219,height-317,imgsize-16192/88435003.jpg",
      rating: "9.1",
      summary: "https://timesofindia.indiatimes.com/entertainment/tamil/movie-reviews/rocky/movie-review/88455427.cms"
    },
    {
      name: " The Matrix Resurrections",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHjE4eApjpFWlpAdiC_aFG2FkfvimiGW0TK4mB-hc_T4Uitj9J",
      rating: "5.9",
      summary: "https://en.wikipedia.org/wiki/The_Matrix_Resurrections"
    },
    {
      name: "Writer",
      url: "https://static.moviecrow.com/gallery/20210414/185058-Ey6W3Z2VoAMu4P2%20(1).jpg",
      rating: "9.1",
      summary: "https://en.wikipedia.org/wiki/Writer_(film)"
    }
  ];
  const [add, setAdd] = useState(users);
  
  return (
      <div>
    <ul>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/Counter">Movie List</Link>
    </li>
    <li>
      <Link to="/AddMovie">AddMovie</Link>
    </li>
    <li>
      <Link to="/AddColor">Color-game</Link>
    </li>
    </ul>
    
        <Switch>
    <Route exact path="/">
       welcome to movie app✨🎉🎉
       </Route>
      <Route path="/AddMovie">
      <AddMovie movieList={add} setmovieList={setAdd}/>
      </Route>

       <Route path="/Counter">
      
       <div className="App">
      <h1 className="lor">Movie List</h1>
      {add.map(({ name, url, rating, summary }, index) => (
        <Starting key={url} nme={name} ur={url} rat={rating} des={summary} del={
          <DeleteIcon onClick={()=>{
          let copyArray=[...add];
          copyArray.splice(index,1);
          setAdd(copyArray);
           } }>del</DeleteIcon>
        }>
        </Starting>
      ))}
        </div>
        
       </Route>

       <Route path="/AddColor">
       <AddColor/>
       </Route>
       <Route path="**">
       <Error/>
       </Route>
       </Switch>
    </div>
  );
}
