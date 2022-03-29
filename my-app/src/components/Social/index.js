
import { FiInstagram } from "react-icons/fi";

import { BsLinkedin } from "react-icons/bs";

import { DiGithubBadge } from "react-icons/di";

export default function Social() {
  return (
    <div id="social"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 30,
      }}
    >
      <a href="https://www.instagram.com/francieli_celeghim/">
        <FiInstagram size={60} color="purple" />
      </a>

      <a href="https://www.linkedin.com/in/francieli-celeghim-30477a139/">
        <BsLinkedin size={60} color="#0000FF" />
      </a>

      <a href="https://github.com/Francieli-Celeghim">
        <DiGithubBadge size={80} color="black" />    
      </a>

    </div>

    
  );
}