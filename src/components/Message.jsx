import React, { useState } from 'react'
import '../stylesSheets/Message.css'
import { AiFillCloseCircle } from 'react-icons/ai'

const Message = ({ setTaskCompleted }) => {

    const [close, setClose] = useState(false)

    const handleCloseMessage = () => {
        setClose(true)
        setTaskCompleted(false)
    }

    return (
        <div className={close ? 'message-none' : 'message'}>
            <i><AiFillCloseCircle
                className='close-message-icon'
                onClick={handleCloseMessage} /></i>
            <p>This task is already finished, it cannot be edited.</p>
        </div>
    )
}

export default Message