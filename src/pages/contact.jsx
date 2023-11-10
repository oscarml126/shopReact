import React from "react";

export const Contact = () => {
  const contactContainerStyle = {
    textAlign: "center",
    padding: "20px",
  };

  const headerStyle = {
    fontSize: "24px",
    color: "#333",
  };

  const infoStyle = {
    fontSize: "16px",
    margin: "5px",
  };

  const linkStyle = {
    color: "#0077B5",
  };

  return (
    <div style={contactContainerStyle}>
      <h1 style={headerStyle}>Contact</h1>
      <div>
        <p style={infoStyle}>Name: Oscar Eduardo Montaño Lopez</p>
        <p style={infoStyle}>Profession: Ingeniero de Sistemas</p>
        <p style={infoStyle}>Email: oscarmontano222@gmail.com</p>
        <p style={infoStyle}>Phone: +573206753175</p>
        <p style={infoStyle}>
          <a
            href="https://www.linkedin.com/in/oscar-eduardo-montaño-lopez-84199b72/?originalSubdomain=co"
            target="_blank"
            rel="noopener noreferrer"
            style={linkStyle}
          >
            LinkedIn 
          </a>
        </p>
      </div>
    </div>
  );
};

