import Head from 'next/head'
import Layout from '../Components/Layout/Layout'

export default function Home() {
  return (
    <>
      <Head>
        <title>Register | Online Savdo</title>
        <meta name="description" content="Online Savdo Admin Panel created with NextJS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout><h1>Register</h1></Layout>
    </>
  )
}
