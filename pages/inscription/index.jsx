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
    if (email !== "" && password !== "" && passwordConfirm !== "") {
      if (password === passwordConfirm) {
        console.log("ok", email, password, passwordConfirm);
        axios
          .post("http://www.5525.fr/utilisateurs", {
            email: email,
            password: password,
            nom: nom,
            prenom: prenom,
            date: date,
            adresse: adresse,
            telephone: telephone,
            permis: permis, 
          })
          .then((response) => {
            console.log(response.status, response.data);
          })
          .catch((error) => {
            console.error(error);
          });
      }
    }
  };

  return (
    <>
      <div className="col-2">
        <h1>Inscription</h1>
        <div class="Inscription">

          <label htmlFor="">Nom</label>
          <div class="input-group">
            <input 
            type="nom" 
            class="form-control" 
            placeholder="Doe" 
            onChange={(e) => {
              setNom(e.currentTarget.value);
            }}
            />
          </div>

          <label htmlFor="">Prénom</label>
          <div class="input-group">
            <input 
            type="prenom" 
            class="form-control" 
            placeholder="John"
            onChange={(e) => {
              setPrenom(e.currentTarget.value);
            }} 
            />
          </div>

          <label htmlFor="">Date de naissance</label>
          <div class="input-group">
            <input 
            type="date" 
            class="form-control" 
            placeholder="" 
            onChange={(e) => {
              setDate(e.currentTarget.value);
            }}
            />
          </div>

          <label htmlFor="">Adresse</label>
          <div class="input-group">
            <input 
            type="adresse" 
            class="form-control" 
            placeholder="Votre adresse"
            onChange={(e) => {
              setAdresse(e.currentTarget.value);
            }} 
            />
          </div>

          <label htmlFor="">N° de téléphone</label>
          <div class="input-group">
            <input 
            type="telephone" 
            class="form-control" 
            placeholder="Votre n° de téléphone"
            onChange={(e) => {
              setTelephone(e.currentTarget.value);
            }} 
            />
          </div>

          <label htmlFor="">N° de permis</label>
          <div class="input-group">
            <input 
              type="permis" 
              class="form-control" 
              placeholder="Votre n° de permis"
              onChange={(e) => {
                setPermis(e.currentTarget.value);
                }}             
              />
          </div>

          <label htmlFor="">Votre email</label>
          <div class="input-group">
            <input
              type="email"
              class="form-control"
              placeholder="john.doe@example.com"
              onChange={(e) => {
                setEmail(e.currentTarget.value);
              }}
            />
          </div>
          <label htmlFor="">Mot de passe</label>
          <div class="input-group">
            <input
              type="password"
              class="form-control"
              placeholder="Mot de passe"
              onChange={(e) => {
                setPassword(e.currentTarget.value);
              }}
            />
          </div>
          <label htmlFor="">Confirmer votre mot de passe</label>
          <div class="input-group mb-3">
            <input
              type="password"
              class="form-control"
              placeholder="Confirmer votre mot de passe"
              onChange={(e) => {
                setPasswordConfirm(e.currentTarget.value);
              }}
            />
          </div>
          <input
            type="submit"
            class="btn btn-dark"
            value="S'inscrire"
            onClick={(e) => handleSubmit(e)}
          />
        </div>
      </div>
    </>
  );
};

export default Inscritpion;
