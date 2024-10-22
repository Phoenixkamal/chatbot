import { createContext, useState } from "react";
import api from "../api/chatapi"

export const Datacontext = createContext()

export const Dataprovider = ({children})=>{

    const [userInput, setUserInput] = useState("");
    const [userQuery, setUserQuery] = useState([])
    const [botRply,setBotRply] = useState([])
    const [queryProcessing,setQueryProcessing] = useState(false)

    async function handleSubmit(e) {
        e.preventDefault()
        setQueryProcessing(true)
    
        const userData = {
          _id: userQuery.length ? String(Number(userQuery[userQuery.length - 1]._id) + 1) : "1",
          user:userInput
        }
        setUserQuery((prev) => [...prev, userData])
    
        try {
          const res = await api.post(`chat`, { message: userInput })
          const botReply = res.data.bot
    
          setBotRply((prev)=>[...prev,botReply])
          setUserInput("")
          setQueryProcessing(false)
    
        } catch (err) {
          console.log(err)
        }

      }

    return(
        <Datacontext.Provider
            value={{
                handleSubmit,
                userQuery,
                setUserQuery,
                setBotRply,
                botRply,
                setUserInput,
                userInput,
                queryProcessing
            }}
        >
            {children}
        </Datacontext.Provider>
    )
}