import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function Home(props) {
  return (
    <>
      <div>
        <Typography
          style={{
            textAlign: "center",
            marginTop: "10%",
            fontSize: "100px",
            fontFamily: "initial",
            color: "inherit",
          }}
        >
          Welcome
        </Typography>
      </div>
      <div>
        <Link
          style={{
            textDecoration: "none",
            color: "black",
            float: "right",
            marginTop: "4%",
            marginRight: "48%",
            boxShadow: "0 0 3px 2px #cec7c759",
            padding: 10,
            borderRadius: 5,
          }}
          to="/input"
        >
          Attributes
        </Link>
      </div>
    </>
  );
}

export default Home;
