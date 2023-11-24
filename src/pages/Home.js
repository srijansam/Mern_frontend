import Navbar from "../components/Navbar";
import "./Home.css";
import Socialmedia from "../assets/Socialmedia.gif";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <section className="home" id="home">
        <div className="row">
          <h1 className=" d-flex justify-content-center">
            Empower Your Support Journey, Where Tickets Turn into Solutions!{" "}
          </h1>
          <div className="col-md-6">
            <div className="image">
              <img src={Socialmedia} alt="img here" />
            </div>
          </div>
          <div className="content col-md-6">
            <h1>Ticketease</h1>
            <p>
              Ticketease understand the pivotal role customer satisfaction plays
              in the success of your business. Our user-friendly ticket support
              system is designed to empower your team, streamline issue
              resolution, and enhance overall customer experience. Elevate your
              support game with SupportHub – where every ticket is a step closer
              to customer delight!
            </p>
          </div>
        </div>
      </section>
      <section className="about" id="about">
        <h1 className="heading">
          <span>about</span> us
        </h1>
        <div className="row">
          <div className="content">
            <h3>your gateway to seamless customer support solutions</h3>
            <p>
              Welcome to Ticketease, where seamless customer support meets
              cutting-edge technology! In today's fast-paced business landscape,
              providing exceptional customer service is paramount. Our ticket
              support system is designed to revolutionize the way you manage and
              resolve customer issues, ensuring a streamlined and efficient
              support process.Our platform empowers businesses to streamline
              support processes, prioritize tasks, and foster better
              communication between support teams and customers.
            </p>
            <br />
            <h3>Why choose Ticketease?</h3>
            <p>
              Our system goes beyond mere ticketing – it's a comprehensive
              solution that integrates seamlessly into your workflow. From
              automated responses to insightful analytics, we offer a suite of
              tools to enhance your support team's efficiency and elevate
              customer satisfaction.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
