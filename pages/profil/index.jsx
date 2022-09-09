import Link from "next/link";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

export default function Home() {
  const [data, setData] = useState({
    email: "",
    password: "",
    nom: "",
    prenom: "",
    adresse: "",
    modele: "",
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
          prenom: response.data.prenom,
          nom: response.data.nom,
          adresse: response.data.nom,
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
    <>
      <div className="table">
        <h1>Mon profil</h1>
        <br />
        <h3> {data.nom} {data.prenom}</h3>
        <p>Email: {data.email}</p>
        <p>Votre adresse : {data.adresse}</p>
        <br />
        <Link href={"/modif-mail"}>
        <button className="btn btn-dark">Modifier mon adresse email</button>
        </Link>
        <br />
        <br />
        <Link href={"/modif-mdp"}>
          <button className="btn btn-dark">Modifier mon mot de passe</button>
        </Link>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Vehicule</th>
              <th scope="col">Prix</th>
              <th scope="col">Date de fin</th>
              <th scope="col">Rendu</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Clio 4{data.modele}</th>
              <td>150€</td>
              <td>04/09/2022</td>
              <td>
                <div id="disponible"></div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};


