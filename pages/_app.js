import { UserContextProvider } from '../Contexts/UserContext'
import { MijozlarContextProvider } from '../Contexts/MijozlarContext'
import '../styles/globals.css'


function MyApp({ Component, pageProps }) {
  return (
    <MijozlarContextProvider>
      <UserContextProvider>
        <Component {...pageProps} />
      </UserContextProvider>
    </MijozlarContextProvider>
  )
}

export default MyApp
