import Layout from "../Components/Layout/Layout"
import Head from "next/head"
import ControlButtons from "../Components/ControlButtons/ControlButtons";
import MijozlarTable from "../Components/MijozlarTable/MijozlarTable";
import { useMijozlar } from "../Contexts/MijozlarContext";

const MahsulotRoyxat = () => {
    const {setShowModal} = useMijozlar()
    return (
        <>
        <Head>
            <title>Mahsulotlar Ro'yxati | Online Savdo</title>
        </Head>
        <Layout>
            <ControlButtons show={()=>setShowModal(true)} />
            <MijozlarTable />
        </Layout>
        </>
    );
}
 
export default MahsulotRoyxat;