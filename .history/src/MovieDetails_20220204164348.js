import { useParams } from "react-router-dom"
export function MovieDetails({add}){
    const {id}=useParams()
    const val={add}
    return(
        <div>
             <h1> {val.name}</h1>
      <h2 >IMDB:{val.ratings}/10</h2>
        </div>
    )
}