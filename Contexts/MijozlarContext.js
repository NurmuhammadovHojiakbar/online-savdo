import React, { useContext,useState } from "react";
import {MijozData} from "../Data/MijozData"

const MijozlarContext = React.createContext()


export const MijozlarContextProvider = ({children,}) => {

    const [mijozlar, setMijozlar] = useState([])
    const [showModal, setShowModal] = useState(false)

    const value = {
        mijozlar,
        setMijozlar,
        showModal,
        setShowModal,
    }

    return (
        <MijozlarContext.Provider value={value}>{children}</MijozlarContext.Provider>
    );
}

export const useMijozlar = ()=> useContext(MijozlarContext)