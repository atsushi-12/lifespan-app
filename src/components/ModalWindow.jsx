import React from 'react'
import Modal from './Modal'

export  function ModalWindow() {
  return (
    <div style={{position:"absolute",zIndex:"99999"}}>
      <Modal/>
    </div>
  )
}
