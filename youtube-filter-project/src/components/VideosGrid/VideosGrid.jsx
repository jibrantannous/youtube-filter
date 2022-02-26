import React, { useState } from 'react'
import './VideosGrid.css'

import { VideoCard } from '../VideoCard/VideoCard'
import { Modal } from '../../container/Modal/Modal'

export const VideosGrid = ({videos, loading, setShowModal, showModal}) => {

    const [video, setVideo] = useState({})

    const closeModal = () =>{
        setShowModal((showModal)=> !showModal)
    }

    const urlVideo = `https://www.youtube.com/embed/${video.videoId}`
  return (
    <section >

        <div className="wrapper">
          
            <div className="app__videos-container  section__padding flex__center">

                {loading && <p>Loading</p>}

                {
                    videos.map(video =>{
                        
                        return <VideoCard 
                                    {...video} 
                                    key={video.id} setShowModal={setShowModal} 
                                    showModal={showModal}
                                    video={video}
                                    setVideo={setVideo}
                                />
                    })
                }

                { showModal && <Modal >
                    <section className="modal">
                        <div className="iframe-container">
                            <p onClick={closeModal}>X</p>
                            <iframe width="700" height="400" src={urlVideo} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </section>
                </Modal>}

            </div>

        </div>
        
    </section>
  )
}
