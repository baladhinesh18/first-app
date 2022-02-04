import { useState } from "react";
import { AddMovie } from "./AddMovie";
import { Starting } from './App';
import {
    Switch, Route,Link
  } from "react-router-dom";
  import { AddColor } from './AddColor';


// const[add,setAdd] =useState([]);
export function App() {
  const [add, setAdd] = useState(users);
  
  return (
      <div>
    <ul>
    <li>
      <Link to="/Home">Home</Link>
    </li>
    <li>
      <Link to="/Counter">Movie List</Link>
    </li>
    <li>
      <Link to="/AddMovie">Color-game</Link>
    </li>
    <li>
      <Link to="/AddColor">Color-game</Link>
    </li>
    </ul>
    
        <Switch>
    <Route path="/Home">
       welcome to movie app✨🎉🎉
       </Route>
      <Route path="/AddMovie">
      <AddMovie movieList={add} setmovieList={setAdd}/>
      </Route>

       <Route path="/Counter">
       {/* export function MovieList(){
         return( */}
       <div className="App">
      <h1 className="lor">Movie List</h1>
      {add.map(({ name, url, rating, summary }) => (
        <Starting key={url} nme={name} ur={url} rat={rating} des={summary}>
        </Starting>
      ))}
        </div>
         {/* )
       } */}
       </Route>

       <Route path="/AddColor">
       <AddColor/>
       </Route>
       </Switch>
    </div>
  );
}
