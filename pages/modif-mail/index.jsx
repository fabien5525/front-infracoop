const ModifMail = () => {
  return (
    <>
      <div className="table">
        <h1>Modifier votre adresse email</h1>
        <label htmlFor="">Votre nouvelle adresse email</label>
        <div className="input-group">
          <input
            type="email"
            className="form-control"
            placeholder="Adresse email"
          />
        </div>
        <button type="submit" className="btn btn-dark">Changer mon adresse mail</button>
      </div>
    </>
  );
};

export default ModifMail;
