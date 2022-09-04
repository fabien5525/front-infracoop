const Profil = () => {
  return (
    <>
      <div className="table">
        <h1>Mon profil</h1>
        <button className="btn btn-dark">
          Modifier mon adresse email
        </button>
        <button className="btn btn-dark">Modifier mon mot de passe</button>
        <table class="table">
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
