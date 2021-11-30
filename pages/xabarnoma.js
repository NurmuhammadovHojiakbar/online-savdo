import Layout from "../Components/Layout/Layout"
import Head from "next/head"
import ControlButtons from "../Components/ControlButtons/ControlButtons";

const Xabarnoma = () => {
    return (
        <>
        <Head>
            <title>Xabarnoma | Online Savdo</title>
        </Head>
        <Layout>
            <ControlButtons />
        </Layout>
        </>
    );
}
 
export default Xabarnoma;