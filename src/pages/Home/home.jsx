import { Helmet } from 'react-helmet';
import Hero from '../../components/hero/hero';
import Services from '../../components/services/services';

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Smart AC Energy Meter - Home</title>
        <meta name="description" content="Track, analyze, and optimize your energy consumption in real-time with our advanced smart meter technology." />
        <meta name="keywords" content="smart meter, energy monitoring, AC energy, sustainable energy, real-time tracking" />
        <meta property="og:title" content="Smart AC Energy Meter - Home" />
        <meta property="og:description" content="Track, analyze, and optimize your energy consumption in real-time with our advanced smart meter technology." />
        <meta property="og:type" content="website" />
        <meta name="theme-color" content="#006D77" />
      </Helmet>
      <Hero/>
      <Services/>
    </div>
  );
};

export default Home;
