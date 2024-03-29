import "../styles/globals.css";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

//import boostrap
import "bootstrap/dist/css/bootstrap.min.css";

const handleFermetureNavbarOnClickOnLink = () => {
  if (typeof window !== "undefined") {
    document.querySelector(".navbar-toggler").click();
  }
}

const handleDeconnexion = () => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("token");
    window.location.href = "/";
  }
}

const LisLogin = () => {

  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("token");
      if (token) {
        setIsLogin(true);
      }
    }
  }, []);

  if (isLogin) return <>
  <li className="nav-item">
        <a className="nav-link" onClick={() => handleDeconnexion()}>Déconnexion</a>
    </li>
  </>;

  return <>
    <li className="nav-item">
      <Link href="/connexion">
        <a className="nav-link" onClick={() => handleFermetureNavbarOnClickOnLink()}>Connexion</a>
      </Link>
    </li>
    <li className="nav-item">
      <Link href="/inscription">
        <a className="nav-link" onClick={() => handleFermetureNavbarOnClickOnLink()}>Inscription</a>
      </Link>
    </li>
  </>

}

const Header = () => {

  return (
    <>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <Image className="logo-picture" src="/logo.ico" alt="logo" width="32" height="32"></Image>
          <Link href="/" >
            <a className="navbar-brand" onClick={() => handleFermetureNavbarOnClickOnLink()}>
              Infracoop
            </a>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link href="/" >
                  <a className="nav-link" onClick={() => handleFermetureNavbarOnClickOnLink()}>Accueil</a>
                </Link>
              </li>

              <li className="nav-item">
                <Link href="/liste_voiture">
                  <a className="nav-link" onClick={() => handleFermetureNavbarOnClickOnLink()}>Liste de véhicules</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/profil">
                  <a className="nav-link" onClick={() => handleFermetureNavbarOnClickOnLink()}>Mon Profil</a>
                </Link>
              </li>
              <LisLogin />
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, [])

  return (
    <>
      <Header></Header>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
