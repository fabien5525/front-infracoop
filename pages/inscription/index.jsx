import { useState } from "react";
import axios from "axios";

const Inscritpion = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [date, setDate] = useState("");
  const [adresse, setAdresse] = useState("");
  const [telephone, setTelephone] = useState("");
  const [permis, setPermis] = useState("");

  const handleSubmit = (e) => {
    if (
      email !== "" &&
      password !== "" &&
      passwordConfirm !== "" &&
      nom !== "" &&
      prenom !== "" &&
      date !== "" &&
      adresse !== "" &&
      telephone !== "" &&
      permis !== ""
    ) {
      if (password === passwordConfirm) {
        console.log("ok", email, password, passwordConfirm);
        axios
          .post("http://www.5525.fr/utilisateurs", {
            email: email,
            password: password,
            Client: {
              Nom: nom,
              Prenom: prenom,
              DateDeNaissance: date,
              Adresse: adresse,
              Telephone: telephone,
              NumeroDePermis: permis,
            },
          }, {
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json",
            },
          })
          .then((response) => {
            window.location.href = "/connexion";
          })
          .catch((error) => {
            console.error(error);
            //maybe email déjà pris
          });
      }
    }
  };

  return (
    <>
      <div className="col-2">
        <h1>Inscription</h1>
        <div className="Inscription">
          <label htmlFor="">Nom</label>
          <div className="input-group">
            <input
              type="nom"
              className="form-control"
              placeholder="Doe"
              onChange={(e) => {
                setNom(e.currentTarget.value);
              }}
            />
          </div>

          <label htmlFor="">Prénom</label>
          <div className="input-group">
            <input
              type="prenom"
              className="form-control"
              placeholder="John"
              onChange={(e) => {
                setPrenom(e.currentTarget.value);
              }}
            />
          </div>

          <label htmlFor="">Date de naissance</label>
          <div className="input-group">
            <input
              type="date"
              className="form-control"
              placeholder=""
              onChange={(e) => {
                setDate(e.currentTarget.value);
              }}
            />
          </div>

          <label htmlFor="">Adresse</label>
          <div className="input-group">
            <input
              type="adresse"
              className="form-control"
              placeholder="Votre adresse"
              onChange={(e) => {
                setAdresse(e.currentTarget.value);
              }}
            />
          </div>

          <label htmlFor="">N° de téléphone</label>
          <div className="input-group">
            <input
              type="telephone"
              className="form-control"
              placeholder="Votre n° de téléphone"
              onChange={(e) => {
                setTelephone(e.currentTarget.value);
              }}
            />
          </div>

          <label htmlFor="">N° de permis</label>
          <div className="input-group">
            <input
              type="permis"
              className="form-control"
              placeholder="Votre n° de permis"
              onChange={(e) => {
                setPermis(e.currentTarget.value);
              }}
            />
          </div>

          <label htmlFor="">Votre email</label>
          <div className="input-group">
            <input
              type="email"
              className="form-control"
              placeholder="john.doe@example.com"
              onChange={(e) => {
                setEmail(e.currentTarget.value);
              }}
            />
          </div>
          <label htmlFor="">Mot de passe</label>
          <div className="input-group">
            <input
              type="password"
              className="form-control"
              placeholder="Mot de passe"
              onChange={(e) => {
                setPassword(e.currentTarget.value);
              }}
            />
          </div>
          <label htmlFor="">Confirmer votre mot de passe</label>
          <div className="input-group mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Confirmer votre mot de passe"
              onChange={(e) => {
                setPasswordConfirm(e.currentTarget.value);
              }}
            />
          </div>
          <input
            type="submit"
            className="btn btn-dark"
            value="S'inscrire"
            onClick={(e) => handleSubmit(e)}
          />
        </div>
      </div>
    </>
  );
};

export default Inscritpion;
