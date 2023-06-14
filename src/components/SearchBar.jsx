import { useState } from "react";

export default function SearchBar({onSearch}) {

   const [characterId, setCharacterId] = useState("")
   const handleChange = (event) => {
      const {value} = event.target
      setCharacterId(value)
   }
   return (
      <div>
         <input type='search' name="search" id="search" onChange={handleChange} value={characterId}/>
         <button onClick={() => onSearch(characterId)}>Agregar</button>
      </div>   
   );
}
