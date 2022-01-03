
import './App.css';
import {useState} from "react";

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
      {/* <Counter/> */}
    </div>
  );
}
const [isVisible, setIsVisible] = useState(false);
const toggleVisibility = () => setIsVisible(!isVisible);
function Counter(){
const [like,setLike]=useState(0);
const[dislike,setDislike]=useState(0);
return(
  <div>
  <button onClick={()=>setLike(like+1)}>👍{like}</button>
  <button onClick={()=>setDislike(dislike+1)}>👎{dislike}</button>
  {/* <h1>{like}</h1> */}
  <h3 isVisible={isVisible} toggleVisibility={toggleVisibility} />
      {isVisible && <h4 "12234"/>}
  </div>
)}
let toogle=()=>{

}
function Starting({ nme, ur,rat,des }) {
const styles={color: rat>=8.5? "green":"red"};


  return (
    <div>
    <div className="ro">
     <img src={ur} className="mg" alt={nme} />
      <div className="col">
      <h1> {nme}</h1>
      <h2 style={styles}>IMDB:{rat}/10</h2>
      <h3>description:<a href={des}>{des}</a></h3>
    <button onClick={toogle()}>Toggle summary</button>
    <Counter/>
      </div>
    </div>
    </div>
  );
}


export default App;
