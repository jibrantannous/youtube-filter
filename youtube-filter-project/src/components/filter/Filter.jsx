import React, {useEffect, useState} from 'react';
import  './filter.css'

export const Filter = ({setInputValue, inputValue}) => {

    /* const [inputValue, setInputValue] = useState(''); */

    const handleInputChange = ( e ) => {
        setInputValue(e.target.value);
        /* videoFilter(inputValue) */
    }


   
    /*  useEffect(() => {

       setVideos( videos.filter( video => {

            return video.title.toLowerCase().includes(inputValue.toLowerCase()) 
        })
        )
        
    }, [inputValue])  */


    

//    const videoFilter = (inputValue) => {
//
//
//        const videosFiltados = videos.filter((video) => {
//
// //           /* if (inputValue == "") {
 //               return video
 //           } *//* else if( video.title.toLowerCase().include(inputValue.toLowerCase())){
 //               return video
//
 //           } */
//
 //           /* return video.title.toLowerCase().include(inputValue.toLowerCase()) */
//
 //           return video.title.toLowerCase().include(inputValue.toLowerCase())

 //       } )
//
//        return setVideos([...videosFiltados])
 //   }

    

 //   useEffect(() => {
//
 //       videoFilter(inputValue)
 //       
//    }, [inputValue])
//    


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
