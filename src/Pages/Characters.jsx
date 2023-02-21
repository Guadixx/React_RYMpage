import "./Characters.css"
import { useEffect, useState } from 'react'

const Characters = () => {
    const [characterList, setCharacterList] = useState([]);
    const [filteredCharacters, setFilterCharacters] = useState([]);

    //FUNCION ASINCRONA PINTANDO LA API. 
    useEffect(() => {
      (async () => {
        let data = await fetch(`https://rickandmortyapi.com/api/character/`).then(
          (res) => res.json()
        );
    
        setCharacterList(data.results);
        setFilterCharacters(data.results);
      })();
    }, []);
    //--------------------------------------------------------------
    //VAMOS A HACER EL HOOK FILTRAR
    //Almacenamos los filtrados en el filteredCharacters que es el que vamos a pintar 
    const filterData = (keyword) => {
      const filter = characterList.filter(
        (character) => 
        character.name.toLowerCase().includes(keyword.toLowerCase())||
        character.status.toLowerCase().includes(keyword.toLowerCase())||
        character.origin.name.toLowerCase().includes(keyword.toLowerCase())
        );
        setFilterCharacters(filter);
  }  
  //INPUT QUE DISPARE EL FILTER
    return (
        <div className="App">
          <input
            className="input" 
            type="text"
            placeholder="ex: Rick.."
            onChange={(ev) => {
              filterData(ev.target.value);
            }}
          />
            <div className="cartas">
                {filteredCharacters.map((character) => 
                  (<div className="cartasIn" key= {character.id}>
                    <h1>{character.name}</h1>
                    <h2>status: {character.status}</h2>
                    <h2>origin: {character.origin.name}</h2>
                    <img src={character.image} />
                  </div>)
                )}
            </div>
        </div>
      )
    }

export default Characters;