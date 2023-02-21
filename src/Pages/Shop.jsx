import { useEffect, useState } from 'react'
import "./Shop.css"


const Shop = () => {
    const [clothesList, setClothesList] = useState([]);
    const [filteredClothes, setFilterClothes] = useState([]);

    //FUNCION ASINCRONA PINTANDO LA API. 
    useEffect(() => {
      (async () => {
        let data = await fetch(`https://63f085605b7cf4107e21b8ee.mockapi.io/shop`).then(
          (res) => res.json()
        );
    
        setClothesList(data);
        setFilterClothes(data);
      })();
    }, []);
    //--------------------------------------------------------------
    //VAMOS A HACER EL HOOK FILTRAR
    //Almacenamos los filtrados en el filteredCharacters que es el que vamos a pintar 
    const filterData = (keyword) => {
      const filter = clothesList.filter(
        (character) => 
        character.name.toLowerCase().includes(keyword.toLowerCase())||
        character.img.toLowerCase().includes(keyword.toLowerCase())||
        character.type.toLowerCase().includes(keyword.toLowerCase())||
        character.color.toLowerCase().includes(keyword.toLowerCase())||
        character.price.toLowerCase().includes(keyword.toLowerCase())
        );
        setFilterClothes(filter);
  }  
  //INPUT QUE DISPARE EL FILTER
    return (
        <div className="App">
          <input
            className="input" 
            type="text"
            placeholder="ex: Camiseta.."
            onChange={(ev) => {
              filterData(ev.target.value);
            }}
          />
            <div className="rym-container">
                {filteredClothes.map((character) => 
                  (<div className="rym-box" key= {character.id}>
                    <h2> {character.name}</h2>
                    <img src={character.img} />
                    <h3>price: {character.price}</h3>
                  </div>)
                )}
            </div>
        </div>
      )
    }

export default Shop;