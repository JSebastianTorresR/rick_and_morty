import Card from './Card';

export default function Cards({characters}) {

   return(
      <div>
         {characters.map((character => <Card key ={character.id}  
            id={character.id}
            name={character.name}
            status={character.status}
            species={character.species}
            gender={character.gender}
            origin={character.origin.name}
            image={character.image}
            onClose={() => window.alert('Emulamos que se cierra la card')}/>))}
      </div>
   );
}
// name: nombre.
// status: status.
// species: especie.
// gender: género.
// origin: origen (ten en cuenta que el nombre del origen viene dentro de otra propiedad llamada name).
// image: imagen.