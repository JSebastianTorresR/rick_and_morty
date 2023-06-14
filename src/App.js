import './App.css';
import axios from 'axios';
import Cards from './components/Cards.jsx';
import Nav  from './components/Nav.jsx';
import { useState } from 'react';
import { Routes , Route,  useLocation} from 'react-router-dom';
import About from './components/About';
import Detail from './components/Detail';
import Form from './components/Form';
function App() {
   const [characters, setCharacters] = useState([])
   function onClose(id){
      setCharacters((characters.filter(character => character.id !== parseInt(id))))
   }
   function onSearch(id) {
      if (characters.map(character => { 
         if(character.id == id)
            throw new Error('Personaje repetido');
            
         }))
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }
   const location = useLocation()
   return (
      <div className='App'>
         {location.pathname == "/" ? null : <Nav onSearch={onSearch}/>}
         <Routes>
            <Route path='/' element={<Form />}/>
            <Route path='/Home' element={<Cards characters={characters} onClose={onClose}/>} />
            <Route path='/About' element={<About />} />
            <Route path={`/detail/:id`} element={<Detail />}/>
         </Routes>
         
      </div>
   );
}

export default App;
