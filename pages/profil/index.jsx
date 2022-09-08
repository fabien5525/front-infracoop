import Link from "next/link";

const Profil = () => {
  return (
    <>
      <div className="table">
        <h1>Mon profil</h1>
        <br />
        <h3>Nom Prénom</h3>
        <p>Email: nom.prenom@test.fr</p>
        <p>Adresse: 1 rue de la paix, 78180 Montigny-le-Bretonneux</p>
        <br />
        <Link href={"/modif-mail"}>
        <button className="btn btn-dark">Modifier mon adresse email</button>
        </Link>
        <br />
        <br />
        <Link href={"/modif-mdp"}>
          <button className="btn btn-dark">Modifier mon mot de passe</button>
        </Link>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Vehicule</th>
              <th scope="col">Prix</th>
              <th scope="col">Date de fin</th>
              <th scope="col">Rendu</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Clio 4</th>
              <td>150€</td>
              <td>04/09/2022</td>
              <td>
                <div id="disponible"></div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Profil;
