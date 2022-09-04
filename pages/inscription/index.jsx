import { useState } from "react";
import axios from "axios";

const Inscritpion = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const handleSubmit = (e) => {
    if (email !== "" && password !== "" && passwordConfirm !== "") {
      if (password === passwordConfirm) {
        console.log("ok", email, password, passwordConfirm);
        axios
          .post("http://www.5525.fr/utilisateurs", {
            email: email,
            password: password,
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
            <input type="text" class="form-control" placeholder="Doe" />
          </div>
          <label htmlFor="">Prénom</label>
          <div class="input-group">
            <input type="text" class="form-control" placeholder="John" />
          </div>
          <label htmlFor="">Date de naissance</label>
          <div class="input-group">
            <input type="date" class="form-control" placeholder="" />
          </div>
          <label htmlFor="">Adresse</label>
          <div class="input-group">
            <input type="text" class="form-control" placeholder="Votre adresse" />
          </div>
          <label htmlFor="">N° de téléphone</label>
          <div class="input-group">
            <input type="text" class="form-control" placeholder="Votre n° de téléphone" />
          </div>
          <label htmlFor="">N° de permis</label>
          <div class="input-group">
            <input type="text" class="form-control" placeholder="Votre n° de permis" />
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
