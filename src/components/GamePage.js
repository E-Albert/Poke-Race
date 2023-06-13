import React, {useState} from 'react'
import Header from './Header'
import InstructionsModal from './InstructionsModal'
import Pokemon from './Pokemon'

function GamePage() {
    const [modal, setModal] = useState(true)

    function modalHandler() {
        setModal(false)
    }
    return (
        <div>
            {modal && <InstructionsModal modal={modalHandler} />}
            <Header />
            <Pokemon />
        </div>
    )
}

export default GamePage