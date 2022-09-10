import axios from "axios";
import Link from "next/link";
import { useState } from "react";

const Connexion = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleConnexion = () => {
    //TODO check email with regex
    console.log(email, password);

    if (email === "" || password === "") return;

    console.log("email", email);
    console.log("password", password);

    axios
      .post("http://www.5525.fr/authentication_token", {
        email: email,
        password: password,
      })
      .then((response) => {
        console.log(response.data);
        localStorage.setItem("token", response.data.token);
      })
      .catch((error) => {
        console.error("axios err", error);
        if (error.code === "ERR_BAD_REQUEST") {
          alert("Mauvais identifiants");
        }
      });
  };

  return (
    <>
      <div className="  ">
        <h1>Connexion</h1>

        <div className="col-2">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Adresse email
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Votre adresse email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="col-2">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Mot de passe
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Votre mot de passe"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <Link href="#">
            <a>Mot de passe oublié</a>
          </Link>
        </div>
        <br />
        <button
          className="btn btn-dark"
          onClick={() => {
            handleConnexion();
          }}
        >
          Se connecter
        </button>
      </div>
    </>
  );
};

export default Connexion;
