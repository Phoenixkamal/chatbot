import React from 'react'
import "./Userquery.css"

const Userquery = ({userdata}) => {
    return (
        <div className='chat user-chat'>
            <h6>{userdata}</h6>
        </div>
    )
}

export default Userquery
