import { useState } from "react";
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';

export function Counter() {
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);
  // const marr={margin:'0 1rem 0 0 ',}
  return (
      <div>
     
    <div className="vacls">
      <IconButton onClick={() => setLike(like + 1)} color="primary"> <Badge badgeContent={like} color="primary">
        👍
      </Badge></IconButton>
      <IconButton onClick={() => setDislike(dislike + 1)} color="error"><Badge badgeContent={dislike} color="error">
        👎
      </Badge></IconButton>
      {/* <h1>{like}</h1> */}
    </div>
    
    </div>
  );
}
