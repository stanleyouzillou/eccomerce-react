import React from "react";

import Directory from "../../components/directory/directory.component";

import "./homepage.style.scss";

const Homepage = props => (
  <div className="homepage">
    {console.log(props)}
    <Directory />
  </div>
);

export default Homepage;
