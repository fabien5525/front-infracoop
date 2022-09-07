import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import styles from "../styles/Home.module.css";
import { useState } from "react";
import axios from "axios";
//import "react-responsive-carousel/lib/styles/carousel.min.css";
//import { Carousel } from 'react-responsive-carousel';

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
      <h2> Les véhicules disponibles à la location :</h2>
        <div class="Carousel">
          {/* <Carousel>
            <div>
                <img src="/BMWCE04Img.jpg" alt="image1"/>
                <p className="legend">Scooter BMW-CE 04</p>

            </div>
            <div>
                <img src="/BMWCEVOImg.jpg" alt="image2" />
                <p className="legend">Scooter BMW-CEV0</p>

            </div>
            <div>
                <img src="/F45iImg.jpg" alt="image3"/>
                <p className="legend">Scooter F45i</p>

            </div>
            <div>
                <img src="/TilgreenTmaxImg.jpg" alt="image4"/>
                <p className="legend">Scooter Tilgreen T-max</p>

            </div>
            <div>
                <img src="/YamahaE01Img.jpeg" alt="image5"/>
                <p className="legend">Scooter Yamaha E-01</p>
            </div>
          </Carousel> */}
        </div>
        EMAIL : {data.email} | PASSWORD : {data.password}
      </main>
    </div>
  );
}
