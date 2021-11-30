import Head from 'next/head'
import { useState } from 'react'
import Login from '../Components/Login/Login'
import SignUp from '../Components/SignUp/SignUp'
import { useUserContext } from '../Contexts/UserContext'
import RegisterStyles from "../styles/Register.module.css"

export default function Home({u}) {

  const [login, setLogin] = useState(true)
  const {setUsersList,currentUser,setCurrentUser} = useUserContext()

  setUsersList(u)
  
  if(!currentUser && window.localStorage.getItem("user")){
    setCurrentUser(JSON.parse(window.localStorage.getItem("user")))
  }

  return (
    <>
      <Head>
        <title>Register | Online Savdo</title>
        <meta name="description" content="Online Savdo Admin Panel created with NextJS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={RegisterStyles.container}>
        <div className={RegisterStyles.content}>
          <header className={RegisterStyles.header}>
            <button className={login && "active"} onClick={()=>setLogin(true)}>LogIn</button>
            <button className={!login && "active"} onClick={()=>setLogin(false)}>SignUp</button>
            <style jsx>{`
              .active{
                box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em;
              }
            `}</style>
          </header>
          {login && <Login />}
          {!login && <SignUp />}
        </div>
      </div>
    </>
  )
}

export async function getStaticProps() {
  const res = await fetch("https://online-savdo.vercel.app/api/users")
  const u = await res.json()

  return {
    props: {
        u
    },
  }
}
