import React, { useContext, useState } from "react"
import {UsersDefault} from "../Data/UsersDefault"

const UserContext = React.createContext()

export const UserContextProvider = ({children})=>{

    const [usersList,setUsersList] = useState(null)
    const [currentUser, setCurrentUser] = useState(null)
    const [error, setError] = useState(false)


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