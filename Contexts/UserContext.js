import React, { useContext, useEffect, useState } from "react"

const UserContext = React.createContext()

export const UserContextProvider = ({children})=>{

    const [fetched,setFetched] = useState(true)
    const [usersList,setUsersList] = useState(null)
    const [currentUser, setCurrentUser] = useState(null)
    const [error, setError] = useState(false)

    useEffect(async()=>{
        const res = await fetch("/api/users")
        const data = await res.json()
        
        setUsersList(data)

        if(!currentUser && window.localStorage.getItem("user")){
            setCurrentUser(JSON.parse(window.localStorage.getItem("user")))
        }
    },[fetched])

    const values ={
        usersList,
        setUsersList,
        currentUser,
        setCurrentUser,
        error,
        setError,
        fetched,
        setFetched
    }

    return <UserContext.Provider value={values}>{ children }</UserContext.Provider>
}

export const useUserContext = () => useContext(UserContext)