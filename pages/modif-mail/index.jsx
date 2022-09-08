const ModifMail = () => {
  return (
    <>
      <div className="table">
        <h1>Modifier votre adresse email</h1>
        <label htmlFor="">Votre nouvelle adresse email</label>
        <div className="input-group">
          <input
            type="password"
            className="form-control"
            placeholder="Adresse email"
          />
        </div>
        <button type="submit" className="btn btn-dark">Changer de mot de passe</button>
      </div>
    </>
  );
};

export default ModifMail;
