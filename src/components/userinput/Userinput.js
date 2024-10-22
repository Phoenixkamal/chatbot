import React, { useContext } from 'react'
import './Userinput.css'
import { Datacontext } from '../../contexts/Datacontext'
import { FaPaperPlane } from "react-icons/fa";

const Userinput = () => {

    const {handleSubmit,userInput,setUserInput,queryProcessing} = useContext(Datacontext)
    return (
        <div className='form-wrap'>
            <form className='query-form' onSubmit={handleSubmit}>
                <input
                    className='query-form-input'
                    type='text'
                    placeholder='Type Your Message'
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    required
                />
                <button type="submit" className="query-form-btn" disabled={queryProcessing}><FaPaperPlane /></button>
            </form>
        </div>
    )
}

export default Userinput
