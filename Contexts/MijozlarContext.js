import React, { useContext,useEffect,useState } from "react";

const MijozlarContext = React.createContext()

export const MijozlarContextProvider = ({children}) => {

    const [mijozlar, setMijozlar] = useState([])

    useEffect(()=>{
        async function MijozlarniYuklash(){
            const res = await fetch("/api/mijozlar")
            const data = await res.json()
            setMijozlar(data)
        }
        MijozlarniYuklash()
    })

    const value = {
        mijozlar,
        setMijozlar,
    }

    return (
        <MijozlarContext.Provider value={value}>{children}</MijozlarContext.Provider>
    );
}

export const useMijozlar = ()=> useContext(MijozlarContext)