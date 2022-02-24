import React from 'react'
import './VideosGrid.css'

import { VideoCard } from '../VideoCard/VideoCard'

export const VideosGrid = ({filteredVideos, loading}) => {

    console.log(filteredVideos, loading)

  return (
    <section >

        <div className="wrapper">
          
            <div className="app__videos-container  section__padding flex__center">

                {loading && <p>Loading</p>}

                {
                    filteredVideos.map(video =>{
                        
                        return <VideoCard {...video} key={video.id}/>
                    })
                }
            </div>

        </div>
        
    </section>
  )
}
