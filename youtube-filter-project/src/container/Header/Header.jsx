import React, { useState } from 'react'
import { Filter } from '../../components/filter/Filter'
import './Header.css'

export const Header = ({setInputValue, inputValue, setFilteredVideos, filteredVideos}) => {

  const [older, setOlder] = useState(false);

  const handleOldestVideos = () =>{
    if (!older) {
      setFilteredVideos( [...filteredVideos].reverse())
      setOlder(true)
    }
 
  }
  const handleNewestVideos = () =>{
    if (older) {
      setFilteredVideos( [...filteredVideos].reverse())
      setOlder(false)
    }
 
  }

  return (
      <header >
        <div className="wrapper">

          <div className="app__header">

              {/* LEFT */}
              <div className="app__header-img">
                  <img src="https://revelacionesmarianas.crdigital.org/wp-content/uploads/2021/12/vectorvirgenrm.png"  alt="Logo"/>
              </div>
              
              {/* RIGHT */}
              <div className="app__header-input">

                  <Filter  setInputValue={setInputValue} inputValue={inputValue} />

                  <div className="app__header-button__container">

                      <button 
                          className="p__roboto-button header__button-filter"
                      >
                          Más Populares
                      </button>

                      <button 
                          onClick={handleNewestVideos}
                          className="p__roboto-button header__button-filter"
                      >
                          Más Nuevos
                      </button>
                      
                      <button 
                        onClick={  handleOldestVideos}  className="p__roboto-button header__button-filter"
                      >
                          Más Antiguos
                      </button>
                  </div>
                  
              </div>

          </div>

        </div>
      </header>
  )
}
