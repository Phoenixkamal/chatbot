import React, { useContext } from 'react'
import './Chat.css'
import { Datacontext } from '../../contexts/Datacontext'
import Botreply from '../botreply/Botreply'
import Userquery from '../userquery/Userquery'
import { FaRobot } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";

const Chat = () => {

    const { userQuery, botRply } = useContext(Datacontext)

    return (
        <ul className='conversation'>

            {
                userQuery.map((data, index) => (
                    <li key={data._id}>
                        <div className='user-chat-wrap'>
                            <div className='user'>
                                <div className='user-profile'><FaUser/></div>
                                <Userquery
                                    userdata={data.user}
                                />
                            </div>
                        </div>
                        <div className='bot-chat-wrap'>

                            {
                                botRply[index] &&
                                <div className='bot'>
                                    <Botreply
                                        index={index}
                                    />
                                    <div className='bot-profile'><FaRobot/></div>
                                </div>
                            }
                        </div>
                    </li>
                ))
            }
        </ul>
    )
}

export default Chat
