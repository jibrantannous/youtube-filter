import React, { useEffect, useState } from 'react';
import { useFetchVideos } from './hooks/useFetchVideos';
import { Header } from './container/Header/Header';
import { VideosGrid } from './components/VideosGrid/VideosGrid';
import { Modal } from './container/Modal/Modal';
import './App.css';


function App() {

  const {data, loading} = useFetchVideos();
  
  const [inputValue, setInputValue] = useState('');
  const [filteredVideos, setFilteredVideos] = useState(data);
  const [showModal, setShowModal] = useState(false);


  useEffect(() => {

    setFilteredVideos(data)
  
  }, [data]);
  

  useEffect(() => {

      setFilteredVideos( data.filter( video => {
          return video.title.toLowerCase().includes(inputValue.toLowerCase()) 
      }))

  }, [inputValue]);
  

  
  return (
    <>
      <Header  setInputValue={setInputValue} inputValue={inputValue} />
      <VideosGrid videos={filteredVideos} loading={loading} setShowModal={setShowModal} showModal={showModal}/>



      {/* {showModal && <Modal  id={filteredVideos}/>} */}
    </>
  );
}









export default App;
