import Link from "next/link";
import Image from "next/image";

const ReserverVehicule = () => {
  return (
    <>
      <div className="table">
        <h1>Finaliser votre reservation:</h1>
        <br />
        <div className="input-group col-2">
          <span className="input-group-text" id="basic-addon1">
            Date de début de location
          </span>
          <input
            type="date"
            className="form-control"
            placeholder="Date de début"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </div>
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
          />
        </div>
        <br />
        <h2>Résumé de la commande</h2>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Véhicule</th>
              <th scope="col">{`Plaque d'immatriculation`}</th>
              <th scope="col">Prix journalier</th>
              <th scope="col">Nombre de jour de location</th>
              <th scope="col">Coût total</th>
            </tr>
          </thead>
          <tbody>
            <td>
              
            </td>
            <td>AB 123 CD</td>
            <td>15€</td>
            <td>5 jours</td>
            <td>75€</td>
          </tbody>
        </table>
        <Link href={"/paiement"}>
          <button type="submit" className="btn btn-dark">
            Confirmer la réservation
          </button>
        </Link>
      </div>
    </>
  );
};

export default ReserverVehicule;
