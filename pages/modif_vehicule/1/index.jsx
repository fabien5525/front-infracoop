import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const modif_vehicule = () => {
  const [Vehicules, setVehicules] = useState([]);
  const [Marque, setMarque] = useState("");
  const [Modele, setModele] = useState("");
  const [NumeroDeSerie, setNumSerie] = useState("");
  const [Couleur, setCouleur] = useState("");
  const [PlaqueDImmatriculation, setPlaque] = useState("");
  const [Kilometre, setKm] = useState(0);
  const [DateDAchat, setDateAchat] = useState("");
  const [PrixDAchat, setPrixAchat] = useState(0);
  const [Disponible, setDisponible] = useState(false);

  useEffect(() => {
    axios
      .get("http://www.5525.fr/vehicules/1", {
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

  const handlePut = () => {
    if (confirm("Êtes-vous sûr ?")) {
      axios
        .put(`http://www.5525.fr/vehicules/1`, {
          Marque: Marque,
          Modele: Modele,
          NumeroDeSerie: NumeroDeSerie,
          Couleur: Couleur,
          PlaqueDImmatriculation: PlaqueDImmatriculation,
          Kilometre: Kilometre,
          DateDAchat: DateDAchat,
          PrixDAchat: PrixDAchat,
          Disponible: Disponible,
        })
        .catch((error) => {
          //delete ko
          console.error(error);
        });
    }
  };

  return (
    <>
      <br />
      <div className="table">
        <h1>Modification du véhicule</h1>
        <div className="card text-center">
          <div className="card-body">
            <h5 className="card-title">
              <div className="input-group col-2">
                <span className="input-group-text" id="basic-addon1">
                  Marque
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder={Vehicules.Marque}
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  onChange={(e) => {
                    setMarque(e.currentTarget.value);
                  }}
                />
              </div>
            </h5>
            <div className="input-group col-2">
              <span className="input-group-text" id="basic-addon1">
                Modèle
              </span>
              <input
                type="text"
                className="form-control"
                placeholder={Vehicules.Modele}
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
                placeholder={Vehicules.NumeroDeSerie}
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
                placeholder={Vehicules.Couleur}
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
                placeholder={Vehicules.PlaqueDImmatriculation}
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
                placeholder={Vehicules.Kilometre}
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
            <div className="input-group col-2">
              <span className="input-group-text" id="basic-addon1">
                {`Date d'achat`}
              </span>
              <input
                type="date"
                className="form-control"
                placeholder={Vehicules.DateDAchat}
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
                placeholder={Vehicules.PrixDAchat}
                aria-label="Username"
                aria-describedby="basic-addon1"
                onChange={(e) => {
                  setPrixAchat(e.currentTarget.value);
                }}
              />
            </div>
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Disponible
            </label>
          </div>
          <Link href="/liste_voiture">
            <button className="btn btn-dark" onClick={() => handlePut()}>
              Modifier le véhicule
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default modif_vehicule;
