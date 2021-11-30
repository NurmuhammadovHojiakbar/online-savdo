import React, { useContext,useEffect,useState } from "react";

const MijozlarContext = React.createContext()

export const MijozlarContextProvider = ({children}) => {

    const [mijozlar, setMijozlar] = useState(null)
    const [fetched,setFetched] = useState(true)
    const [showModal, setShowModal] = useState(false)

    useEffect(async ()=>{
        const res = await fetch("/api/mijozlar")
        const data = await res.json()
        setMijozlar(data)
    },[fetched])

    const value = {
        mijozlar,
        setMijozlar,
        showModal,
        setShowModal,
        fetched,
        setFetched
    }

    return (
        <MijozlarContext.Provider value={value}>{children}</MijozlarContext.Provider>
    );
}

export const useMijozlar = ()=> useContext(MijozlarContext)