import Layout from "../Components/Layout/Layout"
import Head from "next/head"
import ControlButtons from "../Components/ControlButtons/ControlButtons";
import MijozlarTable from "../Components/MijozlarTable/MijozlarTable";

const Mijoz = () => {
    return (
        <>
        <Head>
            <title>Mijozlar | Online Savdo</title>
        </Head>
        <Layout>
            <ControlButtons />
            <MijozlarTable />
        </Layout>
        </>
    );
}
 
export default Mijoz;