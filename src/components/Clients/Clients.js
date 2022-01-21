import tomas from "../../images/image-thomas.jpg";
import emily from "../../images/image-emily.jpg";
import jennie from "../../images/image-jennie.jpg";
import Client from "./Client/Client";

const Clients = () => {
  {
    /*Clients-component: Considering the backend*/
  }

  /*
   *Do some API request
   *Get response,
   *Save it to some reducer state
   *Display it back
   *I'm not gonna do this step, not in this scope "Frontend"
   */
  const clients = [
    {
      name: "Tomas S",
      position: "Chief Operating Officer",
      profileImg: tomas,
      description:
        "The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog",
    },
    {
      name: "Emily R",
      position: "Marketing Director",
      profileImg: emily,
      description:
        "The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog",
    },
    {
      name: "Jennie F",
      position: "Business Owner",
      profileImg: jennie,
      description:
        "The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog",
    },
  ];

  return (
    <div className="transform-text">
      <div className="client-testimonials">
        <h4>Client Testimonials</h4>
        <div className="row clients">
          {clients.map((client) => (
            <Client client={client} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clients;
