import React, { useEffect, useState } from 'react';
import { useFetchVideos } from './hooks/useFetchVideos';
import { Header } from './container/Header/Header';
import { VideosGrid } from './components/VideosGrid/VideosGrid';
import './App.css';


function App() {

  const {data, loading} = useFetchVideos();
  const [filteredVideos, setFilteredVideos] = useState(data);
  //cuando la promesa se resuelve data cambia y cuando
  //eso pase cambio el estado de filteredVideos con
  // todos los videos
  useEffect(() => {
    
    setFilteredVideos(data)
    
  }, [data]);
  
  
  const [inputValue, setInputValue] = useState('');
  const [showModal, setShowModal] = useState(false);
  
  //cada vez que el input cambia se hace filtrado y
  // cambio de estado del filteredVideos
  useEffect(() => {

    setFilteredVideos( data.filter( video => {
      return video.title.toLowerCase().includes(inputValue.toLowerCase()) 
    }))
    
  }, [inputValue, data]);



  return (
    <>
      <Header  
          inputValue={inputValue} 
          setInputValue={setInputValue} 
          filteredVideos={filteredVideos} 
          setFilteredVideos={setFilteredVideos} 
          
      />

      <VideosGrid 
          filteredVideos={filteredVideos} 
          loading={loading} 
          setShowModal={setShowModal} 
          showModal={showModal} 
      />

    </>
  );
}


export default App;
