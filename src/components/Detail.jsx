import axios from "axios";
import { useState,} from "react"
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Detail(props){
    const {id} = useParams()
    const [character, setCharacter] = useState({})
    
    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({data}) => {
           if(data.name){
              setCharacter(data);
           }else{
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);

    return(
        character.name ? <div>
            <div><img src={character.image} alt={character.name}/></div>
            <h1>Name: {character.name}</h1>
            <h2>Species: {character.species}</h2>
            <h2>Gender: {character.gender}</h2>
            <h3>Origin: {character.origin.name}</h3>
            <h4>Status: {character.status}</h4>
        </div> : <></>
    )
}