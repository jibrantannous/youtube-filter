import React from 'react'

import './VideoCard.css'

export const VideoCard = ({id, title, url, setShowModal, showModal, video, setVideo }) => {



  return (
    <>
      <div 
          className="card" 
          onClick={
            () =>{
              setShowModal(!showModal)
              setVideo({videoId: id})
            }
          }
      >
        <img src={url} alt={title} />
        <p className="p__roboto-video-title">{title}</p>
      </div>
    </>
    
  )
}
