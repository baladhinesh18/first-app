import { useParams } from "react-router-dom"
 function MovieDetails({add}){
    const {id}=useParams()
    const val=add[id]
    return(
        <div className="flexy">
             <h1> {val.name}</h1>
      <h2 >IMDB:{val.rating}/10</h2>
        </div>
    )
}
export default MovieDetails