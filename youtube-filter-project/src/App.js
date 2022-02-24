import React, { useEffect, useState } from 'react';
import { Header } from './container/Header/Header';
import { VideosGrid } from './components/VideosGrid/VideosGrid';
import { useFetchVideos } from './hooks/useFetchVideos';
import './App.css';


function App() {

  const {data, loading} = useFetchVideos();
  
  const [inputValue, setInputValue] = useState('');
  const [videos, setVideos] = useState(data);
  const [filteredVideos, setFilteredVideos] = useState(videos)


  useEffect(() => {

    setVideos(data)
    setFilteredVideos(data)
  
  }, [data])
  

  useEffect(() => {

      setFilteredVideos( videos.filter( video => {
          return video.title.toLowerCase().includes(inputValue.toLowerCase()) 
      }))
  }, [inputValue]) 
  

  
  return (
    <>
      <Header  setInputValue={setInputValue} inputValue={inputValue} />
      <VideosGrid videos={filteredVideos} loading={loading} />



      {/* {true && <Modal/>} */}
    </>
  );
}









export default App;
