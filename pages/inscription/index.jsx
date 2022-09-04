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
      <h1>Inscription</h1>
      <div class="Inscription">
        <label htmlFor="">Votre email</label>
      <div class="input-group mb-3">
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
        <div class="input-group mb-3">
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
    </>
  );
};

export default Inscritpion;
