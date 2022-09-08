
const ModifMdp = () => {
  return (
    <>
      <div className="table">
        <h1>Modifier votre mot de passe</h1>
        <label htmlFor="">Votre ancien mot de passe</label>
          <div className="input-group">
            <input
              type="password"
              className="form-control"
              placeholder="Votre ancien mot de passe"
            />
          </div>
        <label htmlFor="">Mot de passe</label>
          <div className="input-group">
            <input
              type="password"
              className="form-control"
              placeholder="Mot de passe"
            />
          </div>
          <label htmlFor="">Confirmer votre mot de passe</label>
          <div className="input-group mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Confirmer votre mot de passe"
            />
      </div>
      <button type="submit" className="btn btn-dark">Changer son mot de passe</button>
      </div>
    </>
  );
};

export default ModifMdp;
