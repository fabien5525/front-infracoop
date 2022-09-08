import Link from "next/link";
import Image from "next/image";

const EnLocation = () => {
    return (
        <>
            <div className="listeVehicule">
        <h1>Les véhicules en cours de location</h1>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Apercu</th>
              <th scope="col">Marque</th>
              <th scope="col">Modèle</th>
              <th scope="col">Couleur</th>
              <th scope="col">{`Plaque d'immatriculation`}</th>
              <th scope="col">Kilométrage</th>
              <th scope="col">Prix journalier</th>
              <th scope="col">Date de location</th>
              <th scope="col">Date de retour</th>
              <th scope="col">Locataire</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">
                <Image src="/clio.jpg" alt="logo-picture" 
                width={100} height={100}/>
              </th>
              <td>Renault</td>
              <td>Clio 4</td>
              <td>Bleu</td>
              <td>AB 123 CD</td>
              <td>10 000 Km</td>
              <td>15€</td>
              <td>07/09/2022</td>
              <td>
                09/07/2022
              </td>
              <td>John Doe
              </td>
            </tr>
            <tr>
              <th scope="row">
                <Image src="/peugeot.jpg" alt="Image voiture" 
                width={100} height/>
              </th>
              <td>Peugeot</td>
              <td>205</td>
              <td>Grise</td>
              <td>AB 124 DE</td>
              <td>15 000 Km</td>
              <td>5€</td>
              <td>05/09/2022</td>
              <td>
                15/09/2022
              </td>
              <td>Jean-Claude Dusse
              </td>
            </tr>
          </tbody>
        </table>
      </div>
        </>
    )
}

export default EnLocation;