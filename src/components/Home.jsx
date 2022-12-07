import React from "react";

function Home(props) {
  return (
    <div>
      <div style={{ display: "flex" }}>
        <button style={{ marginLeft: "90%" }}> + New </button>
      </div>
      <div style={{ textAlign: "right", marginTop: "4%", marginRight: "5%" }}>
        <input style={{ width: "200px" }} placeholder="Enter Name" />
      </div>
      <div
        style={{
          float: "right",
          marginTop: "2%",
          marginRight: "5%",
          height: 100,
          width: "170px",
          boxShadow: "0 0 3px 2px #cec7c759",
          alignItems: "center",
          padding: 20,
          borderRadius: 5,
        }}
      ></div>
    </div>
  );
}

export default Home;
