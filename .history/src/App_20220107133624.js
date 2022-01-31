
import './App.css';
import {useState} from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
function App() {
  let users = [
    {
      name: "JaiBheem",
      url:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQm8U_-RJoMKrgvpIVLbDV8ovuHIp-p_Ls5I7WHaXJUUCbhjQVd",
      rating:"9.4",
      summary:"https://en.wikipedia.org/wiki/Jai_Bhim_(film)"
    },
    {
      name: "Spiderman-No Way Home",
      url:
      "https://www.thehindubusinessline.com/news/variety/4sw3ar/article37984362.ece/ALTERNATES/PORTRAIT_355/Spider-Man---No-Way-Home-Poster-Pic-Credit---Marvel",
      rating:"8.9",
      summary:"https://en.wikipedia.org/wiki/Spider-Man:_No_Way_Home"
    },
    {
      name: "Rocky",
      url:
      "https://static.toiimg.com/thumb/msid-88435003,width-219,height-317,imgsize-16192/88435003.jpg",
      rating:"9.1",
      summary:"https://timesofindia.indiatimes.com/entertainment/tamil/movie-reviews/rocky/movie-review/88455427.cms"
    },
    {
      name: " The Matrix Resurrections",
      url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHjE4eApjpFWlpAdiC_aFG2FkfvimiGW0TK4mB-hc_T4Uitj9J",
      rating:"5.9",
      summary:"https://en.wikipedia.org/wiki/The_Matrix_Resurrections"
    },
    {
      name: "Writer",
      url:
      "https://static.moviecrow.com/gallery/20210414/185058-Ey6W3Z2VoAMu4P2%20(1).jpg",
      rating:"9.1",
      summary:"https://en.wikipedia.org/wiki/Writer_(film)"
    }
  ];
  return (
    <div className="App">
     <h1 className="lor">Movie List</h1>
      {users.map(({ name, url ,rating,summary}) => (
        <Starting key={url} nme={name} ur={url} rat={rating} des={summary} >
        </Starting>
      ))} 
      <div  className="vacls">
      <h1 className="lor">Add New Movie</h1>
      <TextField id="outlined-basic" label="Enter a Movie Name" variant="outlined" />
      <TextField id="outlined-basic" label="Enter a Movie url" variant="outlined" />
      <TextField id="outlined-basic" label="Enter a Movie rating" variant="outlined" />
      <TextField id="outlined-basic" label="Enter a Movie summary" variant="outlined" />
      {/* <Counter/> */}
      </div>
    </div>
  );
}
function Counter(){
const [like,setLike]=useState(0);
const[dislike,setDislike]=useState(0);
return(
  <div className="vacls">
  <Button onClick={()=>setLike(like+1)}   variant="outlined" style={{margin:'0 1rem 0 0 '}}>👍{like}</Button>
  <Button onClick={()=>setDislike(dislike+1)}   variant="outlined" >👎{dislike}</Button>
  {/* <h1>{like}</h1> */}
  </div>
)}

function Starting({ nme, ur,rat,des }) {
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
    <Button onClick={()=>setIsHide(!isHide)} variant="contained">Toggle : Hide summary</Button>
    </div>
    <Counter/>
      </div>
    </div>
    </div>
  );
}

// function ColorBox(){
  
// }

export default App;
