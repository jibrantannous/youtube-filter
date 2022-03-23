import  { useEffect } from 'react'
import ReactDOM from 'react-dom';
import './Modal.css'

export const Modal = ({children}) => {

    const portalNode = document.createElement('div')


    useEffect(() => {
      document.body.appendChild(portalNode);
    
      return () => {
        portalNode.remove()
      }
    }, [portalNode])
    

    return ReactDOM.createPortal(children , portalNode) 

}
