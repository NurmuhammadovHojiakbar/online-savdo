import { useRef } from "react";
import { useMijozlar } from "../../Contexts/MijozlarContext";
import TableStyles from "../../styles/Table.module.css"

const AddMijoz = () => {

    const {setShowModal,fetched,setFetched} = useMijozlar()
    const nameRef = useRef()
    const phoneNumberRef = useRef()
    const regionRef = useRef()
    const addressRef = useRef()

    const AddMijozHandler = (e)=>{
        e.preventDefault()
        
        const newMijoz = {
            name: nameRef.current.value,
            telefon: `+998${phoneNumberRef.current.value}`,
            viloyat: regionRef.current.value,
            manzil: addressRef.current.value,
        }
        
        fetch('/api/mijozlar', {
            method: 'POST', 
            headers: {'Content-Type': 'application/json',},
            body: JSON.stringify({newMijoz}),
            })
            .then(response => response.json())
            .then(data => data)

        nameRef.current.value=""
        regionRef.current.value="farg'ona"
        phoneNumberRef.current.value=""
        addressRef.current.value=""

        setFetched(!fetched)
        setShowModal(false)
    }

    return (
        <div className={TableStyles.modal}>
            <div className={TableStyles["modal-container"]}>
                <header>
                    <h2>Mijozlarni Qo'shish</h2>
                    <button className={TableStyles.close} onClick={()=>setShowModal(false)}>x</button>
                </header>
                <form className={TableStyles.form} onSubmit={AddMijozHandler}>
                    <div>
                        <label className={TableStyles.long}>
                            <span>Ism va Familiya</span>
                            <input 
                                type="text"
                                name="name"
                                required
                                ref={nameRef}
                            />
                        </label>
                        <label  className={TableStyles.short}>
                            <span>Telefon raqam</span>
                            <input 
                                type="tel" 
                                name="phone-number" 
                                pattern="[0-9]{9}"
                                maxLength="9" 
                                required    
                                ref={phoneNumberRef} 
                            />
                        </label>
                        <label  className={TableStyles.short}>
                            <span>Viloyat</span>
                            <select required ref={regionRef}>
                                <option value="farg'ona">Farg'ona</option>
                                <option value="andijon">Andijon</option>
                                <option value="namangan">Namangan</option>
                                <option value="toshkent">Toshkent</option>
                                <option value="buxoro">Buxoro</option>
                                <option value="samarqand">Samarqand</option>
                                <option value="xorazm">Xorazm</option>
                                <option value="jizzax">Jizzax</option>
                                <option value="termiz">Termiz</option>
                            </select>
                        </label>
                        <label  className={TableStyles.long}>
                            <span>Manzil</span>
                            <input 
                                type="text" 
                                name="manzil"
                                required   
                                ref={addressRef}
                            />
                        </label>
                    </div>    
                    <div className={TableStyles.buttons}>
                        <button  className={TableStyles.back} onClick={()=>setShowModal(false)}>Ortga</button>
                        <button  className={TableStyles.submit} type="submit">Saqlash</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
 
export default AddMijoz;