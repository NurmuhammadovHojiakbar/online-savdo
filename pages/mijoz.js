import Layout from "../Components/Layout/Layout"
import Head from "next/head"
import ControlButtons from "../Components/ControlButtons/ControlButtons";
import MijozlarTable from "../Components/MijozlarTable/MijozlarTable";
import { useMijozlar } from "../Contexts/MijozlarContext";

const Mijoz = ({data}) => {
    const {setShowModal, setMijozlar} = useMijozlar()
    setMijozlar(data)
    return (
        <>
        <Head>
            <title>Mijozlar | Online Savdo</title>
        </Head>
        <Layout>
            <ControlButtons show={()=>setShowModal(true)} />
            <MijozlarTable />
        </Layout>
        </>
    );
}
 
export default Mijoz;

export async function getStaticProps() {
    const res = await fetch("http://localhost:3000/api/mijozlar")
    const data = await res.json()
    return {
      props: {
          data
      },
    }
}
