import Layout from "../Components/Layout/Layout"
import Head from "next/head"
import ControlButtons from "../Components/ControlButtons/ControlButtons";

const MahsulotBolim = () => {
    return (
        <>
        <Head>
            <title>Mahsulotlar Bolimi | Online Savdo</title>
        </Head>
        <Layout>
            <ControlButtons />
        </Layout>
        </>
    );
}
 
export default MahsulotBolim;