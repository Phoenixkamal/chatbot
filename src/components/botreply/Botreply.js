import React, { useContext } from 'react'
import './Botreply.css'
import { Datacontext } from '../../contexts/Datacontext'

const Botreply = ({index}) => {
    const {botRply} = useContext(Datacontext)
    return (
        <div className='chat bot-chat'>
            <h6>{botRply[index]}</h6>
        </div>  
    )
}

export default Botreply
