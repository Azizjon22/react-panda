import React, { useState,useEffect} from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import "./main.css"


function Main(props) {

    const [panda,setPanda] = useState([])
    const [search,setSearch] = useState('')
     

      useEffect(() => {
        fetch("https://www.omdbapi.com/?i=tt3896198&apikey=54a03991&s=batman")
        .then((res) => res.json())
        .then((res) => {
            setPanda(res.Search);
            console.log(res);
            console.log(search);
            
        })
        .catch((error) => {
          console.error('Ma\'lumotlar olishda xatolik:', error);
      });
    },[])


    const handleButtonClick = () => {
      fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=54a03991&s=${search}`)
        .then((res) => res.json())
        .then((res) => {
          setPanda(res.Search)
          console.log(search);
         })
         .catch((error) => {
          console.error('Ma\'lumotlar olishda xatolik:', error);
      });
  };
 
    const handleInputChange = (event) => {
      setSearch(event.target.value); // Input maydonidagi qiymatni o'zgartirish
  };


    return (
        <>

        <div className='input-text'>
          <div className='inputi'>
            
            <input
             type='text'
             value={search}
             onChange={handleInputChange}
             />
           </div>
          <button onClick={handleButtonClick}  className='btn'>btn </button>
        </div>

        <div className='container' >
        {panda.map((item,index) => {
            return(
              
            
            <div className='cards' key={index}>
              
                <div className='card'>
                    <div className='card-title'>{item.Title} {item.Year}</div>

                    <div className='card-body'>
                      <img src={item.Poster} alt='Error'/>
                    </div>

                    <div className='card-footer'><h4>{item.Type}</h4></div>
                    {item.imdbID}
                </div>
            </div>             
            )
           })}
        </div>
         
        </>
    );
}

export default Main;