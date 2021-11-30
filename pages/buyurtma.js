import Layout from "../Components/Layout/Layout"
import Head from "next/head"
import ControlButtons from "../Components/ControlButtons/ControlButtons";

const Buyurtma = () => {
    return (
        <>
        <Head>
        <title>Buyurtmalar | Online Savdo</title>
        </Head>
        <Layout>
            <ControlButtons />
        </Layout>
        </>
    );
}
 
export default Buyurtma;