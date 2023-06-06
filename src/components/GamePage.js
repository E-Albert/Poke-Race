import React, {useState} from 'react'
import Header from './Header'
import InstructionsModal from './InstructionsModal'

function GamePage() {
    const [modal, setModal] = useState(true)

    function modalHandler() {
        setModal(false)
    }
    return (
        <div>
            {modal && <InstructionsModal modal={modalHandler} />}
            <Header />
        </div>
    )
}

export default GamePage