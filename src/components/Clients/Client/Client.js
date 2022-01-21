const Client = ({ client }) => {
  return (
    <div
      className="col-xsm-12 col-sm-4 col-md-4 col-lg-4"
      style={{ minHeight: "300px" }}
    >
      <img src={client.profileImg} className="client-profile-img" />
      <p>{client.description}</p>
      <div className="clientInfo">
        <h3 style={{ color: "black" }}>{client.name}</h3>
        <br />
        <h6>{client.position}</h6>
      </div>
    </div>
  );
};

export default Client;
