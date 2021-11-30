import { useMijozlar } from "../../Contexts/MijozlarContext";
import TableStyles from "../../styles/Table.module.css"

const MijozlarTable = () => {

    const {mijozlar} = useMijozlar()

    return (
        <table className={TableStyles.table}>
            <tr className={TableStyles.head}>
                <th>№</th>
                <th>Ism va Familiya</th>
                <th>Telefon</th>
                <th>Viloyat</th>
                <th>Manzil</th>
            </tr>
            {
                mijozlar?.map((m,i)=>{
                    return  <tr>
                                <td>{i+1}</td>
                                <td>{m.name}</td>
                                <td>{m.telefon}</td>
                                <td>{m.viloyat}</td>
                                <td>{m.manzil}</td>
                            </tr>
                })
            }
        </table>
    );
}
 
export default MijozlarTable;