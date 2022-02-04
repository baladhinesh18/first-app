import { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export function AddMovie({movieList,setmovieList}) {
  
  
    const mart = { margin: '1rem 0 0 0' };
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");
 
  // const[update,setUpdate] =useState([{users}]);
//   console.log(add);
  const x = { name, url, rating, summary };
    return(
    <div>
<h1 className="lor">Add New Movie</h1>
<div className="btn">
  <TextField id="outlined-basic" label="Enter a Movie Name" variant="outlined" value={name} onChange={(event) => setName(event.target.value)} />
  <TextField id="outlined-basic" label="Enter a Movie url" variant="outlined" style={mart} value={url} onChange={(event) => setUrl(event.target.value)} />
  <TextField id="outlined-basic" label="Enter a Movie rating" variant="outlined" style={mart} value={rating} onChange={(event) => setRating(event.target.value)} />
  <TextField id="outlined-basic" label="Enter a Movie summary" variant="outlined" style={mart} value={summary} onChange={(event) => setSummary(event.target.value)} />
  <Button variant="contained" style={mart} onClick={() => setmovieList([...movieList, x])}>Add Movie</Button>
  
</div>
</div>);
}