import Link from "next/link";
const Liste = () => {
  return (
    <>
      <div className="listeVehicule">
        <h1>La liste des véhicules</h1>
        <Link href="/ajout_vehicule">
          <button className="btn btn-primary ajoutVehicule">
            Ajouter un véhicule
          </button>
        </Link>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Apercu</th>
              <th scope="col">Marque</th>
              <th scope="col">Modèle</th>
              <th scope="col">Couleur</th>
              <th scope="col">Plaque d'immatriculation</th>
              <th scope="col">Kilométrage</th>
              <th scope="col">Prix journalier</th>
              <th scope="col"></th>
              <th scope="col"></th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">
                <img src="/clio.jpg" alt="logo-picture" 
                width={100}/>
              </th>
              <td>Renault</td>
              <td>Clio 4</td>
              <td>Bleu</td>
              <td>AB 123 CD</td>
              <td>10 000 Km</td>
              <td>15€</td>
              <td>
                <div id="disponible"></div>
              </td>
              <td>
                <Link href={"/reserver_vehicule"}>
                  <button className="btn btn-dark">Reserver</button>
                </Link>
              </td>
              <td>
                <Link href={"/modif_vehicule"}>
                <button className="btn btn-dark">Modifier</button>
                </Link>
              </td>
              <td>
                <Link href={"/suppr_vehicule"}>
                <button className="btn btn-dark">Supprimer</button>
                </Link>
              </td>
            </tr>
            <tr>
              <th scope="row">
                <img src="/peugeot.jpg" alt="Image voiture" 
                width={100}/>
              </th>
              <td>Peugeot</td>
              <td>205</td>
              <td>Grise</td>
              <td>AB 124 CD</td>
              <td>15 000 Km</td>
              <td>5€</td>
              <td>
                <div id="occupe"></div>
              </td>
              <td>
                <button className="btn btn-outline-black" disabled>
                  Reserver
                </button>
              </td>
              <td>
              <Link href={"/modif_vehicule"}>
              <button className="btn btn-dark">
                Modifier
              </button>
              </Link>
              </td>
              <td>
              <Link href={"/suppr_vehicule"}>
                <button className="btn btn-dark">Supprimer</button>
              </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Liste;
