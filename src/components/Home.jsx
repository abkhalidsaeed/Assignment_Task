import React from "react";
import { Link } from "react-router-dom";

function Home(props) {
  return (
    <div>
      <Link
        style={{
          textDecoration: "none",
          color: "black",
          float: "right",
          marginTop: "4%",
          marginRight: "5%",
          boxShadow: "0 0 3px 2px #cec7c759",
          padding: 10,
          borderRadius: 5,
        }}
        to="/input"
      >
        + New
      </Link>
    </div>
  );
}

export default Home;
