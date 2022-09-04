import Link from "next/link";
const Connexion = () => {
  return (
    <>
    <div className="  ">
      <h1>Connexion</h1>
      <form className="justify-content-center">
        <div class="col-2">
          <label for="exampleInputEmail1" class="form-label">
            Adresse email
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Votre adresse email"
          />
        </div>
        <div class="col-2">
          <label for="exampleInputPassword1" class="form-label">
            Mot de passe
          </label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Votre mot de passe"
          />
        </div>
        <div class="col-2 form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">
            Se souvenir de moi
          </label>
        </div>
        <div>
          <Link href="#">
            <a href="#">Mot de passe oublié</a>
          </Link>
        </div>
        <br />
        <button type="submit" class="btn btn-dark">
          Se connecter
        </button>
      </form>
      </div>
    </>
  );
};

export default Connexion;
