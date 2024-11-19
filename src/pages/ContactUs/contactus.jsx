import React from "react";
import { Helmet } from "react-helmet";
import FormPage from "../../components/contactus/form";

const ContactUs = () => {
  return (
    <div>
      <Helmet>
        <title>Smart AC Energy Meter - Contact Us</title>
        <meta name="description" content="Contact us for any queries or feedback." />
        <meta name="keywords" content="contact us, smart meter company, energy monitoring solutions, sustainable technology, AC meter manufacturer" />
        <meta property="og:title" content="Smart AC Energy Meter - Contact Us" />
        <meta property="og:description" content="Contact us for any queries or feedback." />
        <meta property="og:type" content="website" />
        <meta name="theme-color" content="#006D77" />
      </Helmet>
      <FormPage/>
    </div>
  );
};

export default ContactUs;


