import React from "react";
import { withRouter, Link } from "react-router-dom";
import { List } from "@material-ui/core";

const ClientsIndex = () => {
  return (
    <>
      <List>
        <Link to="/client">C1</Link>
        <br />
        <Link to="/client">C2</Link>
        <br />
        <Link to="/client">C3</Link>
        <br />
        <Link to="/client">C4</Link>
        <br />
      </List>
    </>
  );
};
export default withRouter(ClientsIndex);
