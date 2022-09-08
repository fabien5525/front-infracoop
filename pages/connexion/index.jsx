import Link from "next/link";
const Connexion = () => {
  return (
    <>
    <div className="  ">
      <h1>Connexion</h1>
      <form className="justify-content-center">
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
          />
        </div>
        <div className="col-2 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Se souvenir de moi
          </label>
        </div>
        <div>
          <Link href="#">
            <a href="#">Mot de passe oublié</a>
          </Link>
        </div>
        <br />
        <button type="submit" className="btn btn-dark">
          Se connecter
        </button>
      </form>
      </div>
    </>
  );
};

export default Connexion;
