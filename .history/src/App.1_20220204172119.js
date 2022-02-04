import { useState } from "react";
import { AddMovie } from "./AddMovie";
import { Starting } from './App';
import MovieDetails from "./MovieDetails";
import {
    Switch, Route,Link
  } from "react-router-dom";
  import { AddColor } from './AddColor';
  import { Error } from './Error';
  import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

// const[add,setAdd] =useState([]);
export function App() {
  let users = [
    {
      name: "JaiBheem",
      url: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQm8U_-RJoMKrgvpIVLbDV8ovuHIp-p_Ls5I7WHaXJUUCbhjQVd",
      rating: "9.4",
      summary: "https://en.wikipedia.org/wiki/Jai_Bhim_(film)",
      des:"Jai Bhim (transl. Victory to Bhim) is a 2021 Indian Tamil-language legal drama film directed by T. J. Gnanavel and produced by Jyothika and Suriya under 2D Entertainment. The film stars Suriya and Lijomol Jose with Manikandan, Rajisha Vijayan, Prakash Raj, Rao Ramesh and others in supporting roles.",
      trailer:"https://www.youtube.com/embed/Gc6dEDnL8JA"
    },
    {
      name: "Spiderman-No Way Home",
      url: "https://www.thehindubusinessline.com/news/variety/4sw3ar/article37984362.ece/ALTERNATES/PORTRAIT_355/Spider-Man---No-Way-Home-Poster-Pic-Credit---Marvel",
      rating: "8.9",
      summary: "https://en.wikipedia.org/wiki/Spider-Man:_No_Way_Home",
      des:"Spider-Man: No Way Home is a 2021 American superhero film based on the Marvel Comics character Spider-Man, co-produced by Columbia Pictures and Marvel Studios and distributed by Sony Pictures Releasing. It is the sequel to Spider-Man: Homecoming (2017) and Spider-Man: Far From Home (2019), and the 27th film in the Marvel Cinematic Universe (MCU).",
      trailer:"https://www.youtube.com/embed/wuyixh4SsAY"
    },
    {
      name: "Rocky",
      url: "https://static.toiimg.com/thumb/msid-88435003,width-219,height-317,imgsize-16192/88435003.jpg",
      rating: "9.1",
      summary: "https://timesofindia.indiatimes.com/entertainment/tamil/movie-reviews/rocky/movie-review/88455427.cms",
      des:"Rocky begins with a girl narrating a story about the Eagle. How it can prolong its life if it can bear gruesome pain. And when we see Rocky (Vasanth Ravi) coming out of prison, we instantly make the connection. Like the eagle, he has endured 17 years of imprisonment and is now hoping to find out about his missing sister Amudha (Raveena Ravi) and get his life back.",
      trailer:"https://www.youtube.com/embed/pH1xTAnFE9M" 
    },
    {
      name: " The Matrix Resurrections",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHjE4eApjpFWlpAdiC_aFG2FkfvimiGW0TK4mB-hc_T4Uitj9J",
      rating: "5.9",
      summary: "https://en.wikipedia.org/wiki/The_Matrix_Resurrections",
      des:"The Matrix Resurrections is a 2021 American science fiction action film produced, co-written, and directed by Lana Wachowski. It is the sequel to The Matrix Revolutions (2003) and the fourth installment in The Matrix film franchise.",
      trailer:"https://www.youtube.com/embed/E360dMuF-mQ"
    },
    {
      name: "Writer",
      url: "https://static.moviecrow.com/gallery/20210414/185058-Ey6W3Z2VoAMu4P2%20(1).jpg",
      rating: "9.1",
      summary: "https://en.wikipedia.org/wiki/Writer_(film)",
      descri:"Writer is a 2021 Indian Tamil-language crime thriller film written and directed by debutant Franklin Jacob and produced by Neelam Productions in association with Golden Ratio Films, Little Red Car Films and Jetty Productions.",
      trailer:"https://www.youtube.com/embed/n0tEAKyFXFM"
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
      <Link to="/Movies">Movie List</Link>
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

       <Route exact path="/Movies">
      
       <div className="App">
      <h1 className="lor">Movie List</h1>
      {add.map(({ name, url, rating, summary }, index) => (
        <Starting key={url} nme={name} ur={url} rat={rating} des={summary} del={
          <IconButton color="error" onClick={()=>{
          let copyArray=[...add];
          copyArray.splice(index,1);
          setAdd(copyArray);
           } }><DeleteIcon/></IconButton>
        }id={index}
        />
      ))}
        </div>
        
       </Route>

       <Route path="/AddColor">
       <AddColor/>
       </Route>
       <Route path="/Movies/:id">
       <MovieDetails add={add}/>
       </Route>
       <Route path="**">
       <Error/>
       </Route>
       </Switch>
    </div>
  );
}
