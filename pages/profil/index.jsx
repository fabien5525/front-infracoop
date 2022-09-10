import Link from "next/link";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

export default function Home() {
  const [Profil, setProfil] = useState([]);

  useEffect(() => {
    axios
    .get("http://www.5525.fr/clients/2", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
    .then((response) => {
      console.log(response.data[0]);
      setProfil(response.data);
    });
}, []);


  return (
    <>
      <div className="table">
        <h1>Mon profil</h1>
        <br />
        <h3> {Profil.Nom} {Profil.Prenom}</h3>
        {/* <p>Email: {Profil.email}</p> */}
        <p>Email: john.doe@test.fr</p>
        <p>Votre adresse : {Profil.Adresse}</p>
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
              <th scope="row">Clio 4</th>
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


