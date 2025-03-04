import { useState } from 'react'
import './App.css'
import Modal, { openModal, closeModal } from "@balvorn/reactmodal"

function RandomComponent() {
  const [counter, setCounter] = useState(0)
  const handleClick = () => {
    if (counter === 10) {
      closeModal()
      setCounter(0)
    } else setCounter(counter + 1)
  }

  return (
    <>
      <div>
        <div>{counter}</div>
        <button onClick={handleClick}>Add</button>
      </div>
    </>
  )
}

function App() {

  const closed = () => console.log("closed")

  return (
    <>
      <button onClick={openModal}>Ouvrir la modale</button>
      <div>
        <Modal backDropClose onClose={closed} showCloseButton={false}>
          <RandomComponent></RandomComponent>
        </Modal>
      </div>
    </>
  )
}

export default App