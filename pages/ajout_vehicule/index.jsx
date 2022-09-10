import Link from "next/link";
import { useState } from "react";
import axios from "axios";
import Router from "next/router";

const Ajout_vehicule = () => {
  const [Marque, setMarque] = useState("");
  const [Type, setType] = useState("scooter");
  const [Modele, setModele] = useState("");
  const [NumeroDeSerie, setNumSerie] = useState("");
  const [Couleur, setCouleur] = useState("");
  const [PlaqueDImmatriculation, setPlaque] = useState("");
  const [Kilometre, setKm] = useState(0);
  const [DateDAchat, setDateAchat] = useState("");
  const [PrixDAchat, setPrixAchat] = useState(0);
  const [Disponible, setDisponible] = useState(false);

  const AjoutVehiculeSubmit = (e) => {
    const VALID =
      Type !== "" &&
      Marque !== "" &&
      Modele !== "" &&
      NumeroDeSerie !== "" &&
      Couleur !== "" &&
      PlaqueDImmatriculation !== "" &&
      Kilometre !== 0 &&
      DateDAchat !== "" &&
      PrixDAchat !== 0;

    if (!VALID) return;

    axios
      .post(
        "http://www.5525.fr/vehicules",
        {
          Type: Type,
          Marque: Marque,
          Modele: Modele,
          NumeroDeSerie: NumeroDeSerie,
          Couleur: Couleur,
          PlaqueDImmatriculation: PlaqueDImmatriculation,
          Kilometre: parseFloat(Kilometre),
          DateDAchat: DateDAchat,
          PrixDAchat: parseFloat(PrixDAchat),
          disponible: Disponible,
          EnCoursDeLocation: false
        },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      )
      .then((response) => {
        console.log("ENVOYER")
        //redirection vers la page liste des véhicules
        Router.push("/liste_voiture");
      })
      .catch((error) => {
        console.error(JSON.parse(error.response.request.response));
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
              <select
                type="option"
                className="form-control"
                aria-describedby="basic-addon1"
                onChange={(e) => {
                  setType(e.currentTarget.value);
                }}
              >
                <option value="scooter">Scooter</option>
                <option value="voiture">Voiture</option>
              </select>
            </div>
            <div className="input-group col-2">
              <span className="input-group-text" id="basic-addon1">
                Marque
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Le nom de la marque"
                aria-describedby="basic-addon1"
                minLength={1}
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
                aria-describedby="basic-addon1"
                minLength={1}
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
                aria-describedby="basic-addon1"
                minLength={1}
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
                minLength={1}
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
                placeholder="N° d'immatriculation"
                minLength={1}
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
                type="number"
                className="form-control"
                placeholder="Le kilomètrage du véhicule"
                minLength={1}
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
                type="date"
                className="form-control"
                placeholder="Date d'achat"
                minLength={1}
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
                type="number"
                className="form-control"
                placeholder="Le prix de la location journalière"
                minLength={1}
                aria-describedby="basic-addon1"
                onChange={(e) => {
                  setPrixAchat(e.currentTarget.value);
                }}
              />
            </div>
            <div className="input-group col-2">
              <span className="input-group-text" id="basic-addon1">
                Disponible ?
              </span>
              <input
                type="checkbox"
                className="form-check-input ms-3 mt-2"
                placeholder="Le prix de la location journalière"
                minLength={1}
                aria-describedby="basic-addon1"
                onChange={(e) => {
                  setDisponible(e.currentTarget.checked);
                }}
              />
            </div>
          </div>

          <button
            className="btn btn-outline-primary"
            onClick={() => AjoutVehiculeSubmit()}
          >
            Ajouter un véhicule
          </button>
        </div>
      </div>
    </>
  );
};

export default Ajout_vehicule;
