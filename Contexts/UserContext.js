import React, { useContext, useEffect, useState } from "react"

const UserContext = React.createContext()

export const UserContextProvider = ({children})=>{

    const [usersList,setUsersList] = useState(null)
    const [currentUser, setCurrentUser] = useState(null)
    const [error, setError] = useState(false)

    useEffect(()=>{
        async function GetUsers(){
            const res = await fetch("/api/users")
            const data = await res.json()
            
            setUsersList(data)
            if(!currentUser){
                setCurrentUser(JSON.parse(window.localStorage.getItem("user")))
            }
        }

        GetUsers()
    })

    const values ={
        usersList,
        setUsersList,
        currentUser,
        setCurrentUser,
        error,
        setError,
    }

    return <UserContext.Provider value={values}>{ children }</UserContext.Provider>
}

export const useUserContext = () => useContext(UserContext)