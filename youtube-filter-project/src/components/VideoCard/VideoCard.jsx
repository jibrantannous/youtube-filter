import React from 'react'
import './VideoCard.css'

export const VideoCard = ({id, title, url}) => {
  return (
    <div className="card">
        <img src={url} alt={title} />
        <p className="p__roboto-video-title">{title}</p>
    </div>
  )
}
