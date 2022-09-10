import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const ReserverVehicule = () => {

  const [Vehicule, setVehicule] = useState("Twizzy");
  const [Client, setClient] = useState("John Doe");
  const [DateDeFin, setDateDeFin] = useState();
  const [Jour, setJour] = useState("10/09/2022");
  const [PrixTotal, setPrixTotal] = useState("10000");
  const [Rendu, setRendu] = useState(false);

  const handlePost = () => {
    if (confirm("Êtes-vous sûr ?")) {
      axios
        .post(`http://www.5525.fr/location`, {
          Vehicule: Vehicule,
          Client: Client,
          DateDeFin:DateDeFin,
          Jour:Jour,
          PrixTotal:PrixTotal,
          Rendu:Rendu
    })}};
  

  return (
    <>
      <div className="table">
        <h1>Finaliser votre reservation:</h1>
        <br />
        <div className="input-group col-2">
          <span className="input-group-text" id="basic-addon1">
            Date de retour de location
          </span>
          <input
            type="date"
            className="form-control"
            placeholder="Date de fin"
            aria-label="Username"
            aria-describedby="basic-addon1"
            onChange={(e) => {
              setDateDeFin(e.currentTarget.value);
            }}
          />
        </div>
        <br />
        <h2>Résumé de la commande</h2>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Véhicule</th>
              <th scope="col">{`Plaque d'immatriculation`}</th>
              <th scope="col">Prix Total</th>
              <th scope="col">Nombre de jour de location</th>
            </tr>
          </thead>
          <tbody>
            <td>Twizzy</td>
            <td>AB 123 CD</td>
            <td>10000</td>
            <td>36 mois</td>
          </tbody>
        </table>
        <Link href={"/paiement"}>
          <button type="submit" className="btn btn-dark" onClick={() => handlePost()}>
            Confirmer la réservation
          </button>
        </Link>
      </div>
    </>
  );
};

export default ReserverVehicule;
