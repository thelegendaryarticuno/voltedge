import { Helmet } from "react-helmet";
import AboutHero from "../../components/hero/abouthero";

const About = () => {
    return (
      <div>
        <Helmet>
        <title>Smart AC Energy Meter - About</title>
        <meta name="description" content="Learn about our smart AC energy meter technology and our mission to promote sustainable energy consumption." />
        <meta name="keywords" content="about us, smart meter company, energy monitoring solutions, sustainable technology, AC meter manufacturer" />
        <meta property="og:title" content="Smart AC Energy Meter - About" />
        <meta property="og:description" content="Learn about our smart AC energy meter technology and our mission to promote sustainable energy consumption." />
        <meta property="og:type" content="website" />
        <meta name="theme-color" content="#006D77" />
      </Helmet>
      <AboutHero/>
      </div>
    );
  };
  
  export default About;
  