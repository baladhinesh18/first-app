import { useParams } from "react-router-dom"
import './App.css';

 function MovieDetails({add}){
    const {id}=useParams()
    const val=add[id]
    return(
        <div>
        <div className="flexy">
             <h1>Movie: {val.name}</h1>
      <h2 >IMDB:{val.rating}/10</h2>
        </div>
        <h3>description:<a href={des}>{des}</a></h3>
        </div>
    )
}
export default MovieDetails