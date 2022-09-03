import '../styles/globals.css'
import Link from 'next/link'


const Header = () => {
  return (
    <div className="header">
      <ul>
        <li>
          <Link href="/">
            <a>Accueil</a>
          </Link>
        </li>
        <li>
          <Link href="/connexion">
            <a>Connexion</a>
          </Link>
        </li>
        <li>
          <Link href="/inscription">
            <a>Inscription</a>
          </Link>
        </li>
      </ul>
    </div>
  );

}

function MyApp({ Component, pageProps }) {

  return <>
    <Header></Header>
    <Component {...pageProps} />
  </>
}

export default MyApp
