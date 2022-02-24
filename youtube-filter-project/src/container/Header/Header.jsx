import React from 'react'
import { Filter } from '../../components/filter/Filter'
import './Header.css'

export const Header = ({setInputValue}) => {
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
                  <Filter /* videos={videos} setVideos={setVideos} */ setInputValue={setInputValue} />

                  <div className="app__header-button__container">
                    <button className="p__roboto-button header__button-filter">Más Populares</button>
                    <button className="p__roboto-button header__button-filter">Más Nuevos</button>
                    <button className="p__roboto-button header__button-filter">Más Antiguos</button>
                  </div>
              </div>

          </div>

        </div>
      </header>
  )
}
