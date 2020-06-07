import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";

import Login from "../login";
import Landing from "../DashBoard";
import ClientsIndex from "../clients";
import Client from "../clients/client";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/landing" exact component={Landing} />
      <Route path="/clientsIndex" exact component={ClientsIndex} />
      <Route path="/client" exact component={Client} />
    </Switch>
  );
};
export default withRouter(Routes);
