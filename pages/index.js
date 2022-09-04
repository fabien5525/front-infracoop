import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import styles from "../styles/Home.module.css";
import { useState } from "react";
import axios from "axios";

export default function Home() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    //didMount
    console.log("AXIOS");
    axios
      .get("http://www.5525.fr/utilisateurs/2")
      .then((response) => {
        setData({
          email: response.data.email,
          password: response.data.password,
        });
        console.log("DATA", data);
      })
      .catch((error) => {
        console.log(error);
      });

    return () => {
      //unMount
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Infracoop</title>
        <meta name="description" content="Site de location de véhicule en ligne" />
        <link rel="icon" href="/Logo.ico" />
      </Head>

      <div>
        <h1>Bienvenue sur Infracoop</h1>
      </div>
      <main className={styles.main}>
        EMAIL : {data.email} | PASSWORD : {data.password}
      </main>
    </div>
  );
}
