import { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Starting } from './App';
import {
    Switch, Route
  } from "react-router-dom";
  import { AddColor } from './AddColor';
 import { Counter } from './Counter'; 

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
  const mart = { margin: '1rem 0 0 0' };
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");
  const [add, setAdd] = useState(users);
  // const[update,setUpdate] =useState([{users}]);
  console.log(add);
  const x = { name, url, rating, summary };
  return (
      <div>
    <ul>
    <li>
      <a href="/Home">Home</a>
    </li>
    <li>
      <a href="/Counter">Movie List</a>
    </li>
    <li>
      <a href="/AddColor">Color-game</a>
    </li>
    </ul>
    
        <Switch>
    <Route path="/Home">
       welcome to movie app???????????
       </Route>
       <Route path="/Counter">
       <div className="App">
      <h1 className="lor">Add New Movie</h1>
      <div className="btn">
        <TextField id="outlined-basic" label="Enter a Movie Name" variant="outlined" value={name} onChange={(event) => setName(event.target.value)} />
        <TextField id="outlined-basic" label="Enter a Movie url" variant="outlined" style={mart} value={url} onChange={(event) => setUrl(event.target.value)} />
        <TextField id="outlined-basic" label="Enter a Movie rating" variant="outlined" style={mart} value={rating} onChange={(event) => setRating(event.target.value)} />
        <TextField id="outlined-basic" label="Enter a Movie summary" variant="outlined" style={mart} value={summary} onChange={(event) => setSummary(event.target.value)} />
        <Button variant="contained" style={mart} onClick={() => setAdd([...add, x])}>Add Movie</Button>
        <Counter/>
      </div>
      <h1 className="lor">Movie List</h1>
      {add.map(({ name, url, rating, summary }) => (
        <Starting key={url} nme={name} ur={url} rat={rating} des={summary}>
        </Starting>
      ))}

        </div>
       </Route>
       <Route path="/Color-game">
       <AddColor/>
       </Route>
       </Switch>
    </div>
  );
}
