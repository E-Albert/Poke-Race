import React, {useState} from 'react'
import Header from './Header'
import InstructionsModal from './InstructionsModal'
import Pokemon from './Pokemon'
import Quiz from './Quiz'

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
            <Quiz />
        </div>
    )
}

export default GamePage