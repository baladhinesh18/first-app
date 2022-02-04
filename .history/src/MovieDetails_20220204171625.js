import { useParams } from "react-router-dom"
import './App.css';

 function MovieDetails({add}){
    const {id}=useParams()
    const val=add[id]
    return(
        <div>
       <iframe min-width="90%" min-height="450" src={val.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <div className="flexy">
             <h1>Movie: {val.name}</h1>
      <h1 className="imb">IMDB:{val.rating}/10</h1>
        </div>
        <div><b>description:</b>{val.des}</div>
        </div>
    )
}
export default MovieDetails