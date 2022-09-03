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
      Inscription {email} {password} {passwordConfirm}
      <div>
        <input
          type="email"
          placeholder="john.doe@example.com"
          onChange={(e) => {
            setEmail(e.currentTarget.value);
          }}
        />
        <input
          type="password"
          placeholder="password"
          onChange={(e) => {
            setPassword(e.currentTarget.value);
          }}
        />
        <input
          type="password"
          placeholder="confirm password"
          onChange={(e) => {
            setPasswordConfirm(e.currentTarget.value);
          }}
        />
        <input
          type="submit"
          value="S'inscrire"
          onClick={(e) => handleSubmit(e)}
        />
      </div>
    </>
  );
};

export default Inscritpion;
