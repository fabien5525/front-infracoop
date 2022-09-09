import Link from "next/link";
import { useState } from "react";
import axios from "axios";

const Ajout_vehicule = () => {
  const [Marque, setMarque] = useState("");
  const [Type, setType] = useState("");
  const [Modele, setModele] = useState("");
  const [NumeroDeSerie, setNumSerie] = useState("");
  const [Couleur, setCouleur] = useState("");
  const [PlaqueDImmatriculation, setPlaque] = useState("");
  const [Kilometre, setKm] = useState("");
  const [DateDAchat, setDateAchat] = useState("");
  const [PrixDAchat, setPrixAchat] = useState("");

  const handleSubmit = (e) => {
    axios
      .post("http://www.5525.fr/vehicules", {
        Type: Type,
        Marque: Marque,
        Modele: Modele,
        NumeroDeSerie: NumeroDeSerie,
        Couleur: Couleur,
        PlaqueDImmatriculation: PlaqueDImmatriculation,
        Kilometre: Kilometre,
        DateDAchat: DateDAchat,
        PrixDAchat: PrixDAchat,
      })
      .then((response) => {
        console.log(response.status, response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <br />
      <div className="table">
        <h1>{`Ajout d'un véhicule`}</h1>
        <div className="card text-center">
          <div className="card-body">
              <div className="input-group col-2">
                <span className="input-group-text" id="basic-addon1">
                  Type
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Scooter ou voiture"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  onChange={(e) => {
                    setType(e.currentTarget.value);
                  }}
                />
              </div>
              <div className="input-group col-2">
                <span className="input-group-text" id="basic-addon1">
                  Marque
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Le nom de la marque"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  onChange={(e) => {
                    setMarque(e.currentTarget.value);
                  }}
                />
              </div>
            <div className="input-group col-2">
              <span className="input-group-text" id="basic-addon1">
                Modèle
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Le modèle"
                aria-label="Username"
                aria-describedby="basic-addon1"
                onChange={(e) => {
                  setModele(e.currentTarget.value);
                }}
              />
            </div>
            <div className="input-group col-2">
              <span className="input-group-text" id="basic-addon1">
                N° de série
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Le numéro de série"
                aria-label="Username"
                aria-describedby="basic-addon1"
                onChange={(e) => {
                  setNumSerie(e.currentTarget.value);
                }}
              />
            </div>
            <div className="input-group col-2">
              <span className="input-group-text" id="basic-addon1">
                Couleur
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Couleur du véhicule"
                aria-label="Username"
                aria-describedby="basic-addon1"
                onChange={(e) => {
                  setCouleur(e.currentTarget.value);
                }}
              />
            </div>
            <div className="input-group col-2">
              <span className="input-group-text" id="basic-addon1">
                {`Plaque d'immatriculation`}
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="N] d'immatriculation"
                aria-label="Username"
                aria-describedby="basic-addon1"
                onChange={(e) => {
                  setPlaque(e.currentTarget.value);
                }}
              />
            </div>
            <div className="input-group col-2">
              <span className="input-group-text" id="basic-addon1">
                Kilomètre
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Le kilomètrage du véhicule"
                aria-label="Username"
                aria-describedby="basic-addon1"
                onChange={(e) => {
                  setKm(e.currentTarget.value);
                }}
              />
            </div>
            <div className="input-group col-2">
              <span className="input-group-text" id="basic-addon1">
                {`Date d'achat`}
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Date d'achat"
                aria-label="Username"
                aria-describedby="basic-addon1"
                onChange={(e) => {
                  setDateAchat(e.currentTarget.value);
                }}
              />
            </div>
            <div className="input-group col-2">
              <span className="input-group-text" id="basic-addon1">
                Prix location
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Le prix de la location journalière"
                aria-label="Username"
                aria-describedby="basic-addon1"
                onChange={(e) => {
                  setPrixAchat(e.currentTarget.value);
                }}
              />
            </div>
          </div>
          <Link href="/liste_voiture">
            <input
              type="submit"
              value="Ajouter le véhicule"
              onClick={(e) => handleSubmit(e)}
            />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Ajout_vehicule;
