import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";

// type vehicule = {
//   Couleur: string;
//   DateDAchat: date;
//   Disponible: boolean;
//   EnCoursDeLocation: boolean;
//   Kilometre: number
//   Marque: string;
//   Modele: string;
//   NumeroDeSerie: string;
//   PlaqueDImmatriculation: string;
//   PrixDAchat: 98
//   Type: string;
//   couleur: string;
//   dateDAchat: string;
//   disponible: false
//   enCoursDeLocation: false
//   id: 1
//   kilometre: 26
//   locations: Array
//   marque: string;
//   modele: string;
//   numeroDeSerie: string;
//   plaqueDImmatriculation: string;
//   prixDAchat: Number;
//   type: string;
// }

const Liste = () => {
  const [Vehicules, setVehicules] = useState([]);

  useEffect(() => {
    axios
      .get("http://www.5525.fr/vehicules", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
      .then((response) => {
        console.log(response.data[0]);
        setVehicules(response.data);
      });
  }, []);

  const handleDelete = (id) => {
    if (confirm("Êtes-vous sûr ?")) {
      axios.delete(`http://www.5525.fr/vehicules/${id}`).catch((error) => {
        //delete ko
        console.error(error);
      });
    }
  };

  return (
    <>
      <div className="listeVehicule">
        <h1>La liste des véhicules</h1>
        <Link href="/ajout_vehicule">
          <button className="btn btn-primary ajoutVehicule">
            Ajouter un véhicule
          </button>
        </Link>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Marque</th>
              <th scope="col">Modèle</th>
              <th scope="col">Couleur</th>
              <th scope="col">{`Plaque d'immatriculation`}</th>
              <th scope="col">Kilométrage</th>
              <th scope="col">Prix journalier</th>
              <th scope="col"></th>
              <th scope="col"></th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {Vehicules &&
              Vehicules.map((vehicule) => {
                return (
                  <tr key={`vehicule-${vehicule.id}`}>
                    <td>{vehicule.Marque}</td>
                    <td>{vehicule.Modele}</td>
                    <td>{vehicule.Couleur}</td>
                    <td>{vehicule.PlaqueDImmatriculation}</td>
                    <td>{`${vehicule.Kilometre} Km`}</td>
                    <td>{`${vehicule.prixDAchat} €`}</td>
                    <td>
                      <div id="disponible"></div>
                    </td>
                    <td>
                      <Link href={`/reserver_vehicule/${vehicule.id}`}>
                        <button className="btn btn-dark">Reserver</button>
                      </Link>
                    </td>
                    <td>
                      <Link href={`/modif_vehicule/${vehicule.id}`}>
                        <button className="btn btn-dark">Modifier</button>
                      </Link>
                    </td>
                    <td>
                      <button
                        className="btn btn-dark"
                        onClick={() => handleDelete(vehicule.id)}
                      >
                        Supprimer
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Liste;
