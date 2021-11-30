import Layout from "../Components/Layout/Layout"
import Head from "next/head"
import ControlButtons from "../Components/ControlButtons/ControlButtons";

const Mijoz = () => {
    return (
        <>
        <Head>
            <title>Mijozlar | Online Savdo</title>
        </Head>
        <Layout>
            <ControlButtons />
        </Layout>
        </>
    );
}
 
export default Mijoz;