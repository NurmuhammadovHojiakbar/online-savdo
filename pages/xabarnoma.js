import Layout from "../Components/Layout/Layout"
import Head from "next/head"
import ControlButtons from "../Components/ControlButtons/ControlButtons";
import MijozlarTable from "../Components/MijozlarTable/MijozlarTable";
import { useMijozlar } from "../Contexts/MijozlarContext";

const Xabarnoma = () => {
    const {showModal, setShowModal} = useMijozlar()
    return (
        <>
        <Head>
            <title>Xabarnoma | Online Savdo</title>
        </Head>
        <Layout>
            <ControlButtons show={()=>setShowModal(true)} />
            <MijozlarTable />
        </Layout>
        </>
    );
}
 
export default Xabarnoma;