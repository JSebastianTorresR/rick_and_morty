import SearchBar from "./SearchBar";
import { Link, useLocation } from "react-router-dom";

export default function Nav({onSearch}) {
    return (
       <div>
            <button><Link to="/Home">Home</Link></button>
            <button><Link to ="/About">About</Link></button>
           <SearchBar onSearch={onSearch}/>
           <button onClick={() => onSearch(Math.round(Math.random() * 825))}>Random</button>
       </div>
    )}