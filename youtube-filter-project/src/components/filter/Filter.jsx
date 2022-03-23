import React from 'react';
import  './filter.css'

export const Filter = ({setInputValue, inputValue }) => {

    const handleInputChange = ( e ) => {
        setInputValue(e.target.value);
    }

    /* const handleSubmit = (e) => {
        e.preventDefault();

        if(inputValue.trim().length > 2){

            setInputValue('')
        }
    } */

  return (

    <form className="app__header-form">
        <input 
            type="text"
            value={ inputValue }
            onChange={ handleInputChange}
            placeholder="Buscar video"
        />
        <button type="submit">Buscar</button>

    </form>
  )
}
