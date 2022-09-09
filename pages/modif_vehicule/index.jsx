import Link from "next/link";
import Image from "next/image";

const modif_vehicule = () => {
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
                  placeholder="Le nom de la marque"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
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
                placeholder="Le modèle"
                aria-label="Username"
                aria-describedby="basic-addon1"
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
                aria-label="Username"
                aria-describedby="basic-addon1"
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
            <button className="btn btn-dark">Modifier le véhicule</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default modif_vehicule;
