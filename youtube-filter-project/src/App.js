import React, { useEffect, useState } from 'react';
import { Header } from './container/Header/Header';
import { VideosGrid } from './components/VideosGrid/VideosGrid';
import { useFetchVideos } from './hooks/useFetchVideos';
import './App.css';


function App() {

  const [inputValue, setInputValue] = useState('');
 
  const {data, loading} = useFetchVideos();

  console.log(data)


  let filteredVideos;
  useEffect(() => {
    filteredVideos = data.filter(videos => videos.title.videostoLowerCase().includes(inputValue.toLowerCase()));
  
    
  }, [data])
  
  



  return (
    <>
      <Header /* videos={videos} setVideos={setVideos} */ setInputValue={setInputValue} inputValue={inputValue}  />
      <VideosGrid videos={filteredVideos} loading={loading} />
    </>
  );
}

export default App;
