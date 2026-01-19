import React from "react";
import HeaderText from "../../components/HeaderText/HeaderText";
import { useMode } from "../../layout/ModeContext";
import { TextField } from "../../components/Form/TextField";

const Contact = () => {
  const { mode } = useMode();
  return (
    <div>
      <HeaderText headerTitle="Get in Touch" />
      <div style={{ width: "100%", height: "100px" }}>
        <iframe
          src=""
          width="100%"
          height="250px"
          style={{ filter: mode === "dark" ? "invert(100%)" : "none" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          marginTop: "150px",
        }}
      >
        <div>
          <h5>ADDRESS .....Satungal, Chandragiri-11, Kathmandu</h5>
          <h5>PHONE .....9808706524</h5>
        </div>
        <div>
          <h5>EMAIL .....pradhanprince000@gmail.com</h5>
          <h5></h5>
        </div>
      </div>
      <HeaderText headerTitle="Contact Form" />
      <div style={{ width: "97%", display: "flex", gap: "2rem" }}>
        <TextField width="50%" placeholder="Full Name" />
        <TextField width="50%" placeholder="Email Address" />
      </div>
      <TextField width="97%" placeholder="Your Message" textarea={true} />
      <button style={{
        backgroundColor: "#EFCB89",
        border: "1px solid #E5E5E5",
        padding: "9px",
        borderRadius: "6px",
        width: "144px",
        color: "black",
        fontWeight: "bold",
        boxShadow: "inherit"
      }}>Submit</button>
    </div>
  );
};

export default Contact;
