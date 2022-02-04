import { useParams } from "react-router-dom"
import './App.css';

 function MovieDetails({add}){
    const {id}=useParams()
    const val=add[id]
    return(
        <div>
       <iframe width="90%" height="381" src={val.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <div className="flexy">
             <h1>Movie: {val.name}</h1>
      <div>IMDB:{val.rating}/10</div>
        </div>
        <h3>description:{val.des}</h3>
        </div>
    )
}
export default MovieDetails