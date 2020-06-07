import React from "react";
import { withRouter, Link } from "react-router-dom";

const Landing = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <Link to="/clientsIndex">Clients</Link>
      <br />
      <Link>Devices</Link>
    </div>
  );
};
export default withRouter(Landing);
