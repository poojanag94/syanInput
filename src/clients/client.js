import React from "react";
import { withRouter } from "react-router-dom";

const Client = () => {
  return (
    <table>
      <thead>
        <tr>
          <th>Devices</th>
          <th>Quantity</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td> D1</td>
          <td> Q1</td>
        </tr>
        <tr>
          <td> D2</td>
          <td> Q2</td>
        </tr>
        <tr>
          <td> D3</td>
          <td> Q3</td>
        </tr>
        <tr>
          <td> D4</td>
          <td> Q4</td>
        </tr>
        <tr>
          <td> D5</td>
          <td> Q5</td>
        </tr>
        <tr>
          <td> D6</td>
          <td> Q6</td>
        </tr>
      </tbody>
    </table>
  );
};
export default withRouter(Client);
