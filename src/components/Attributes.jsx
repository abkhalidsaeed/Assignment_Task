import { Box } from "@mui/material";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Attributes = () => {
  // const [name, setName] = useState("");
  // const [display, setDisplay] = useState([]);

  // const handleKeyDown = (e) => {
  //   if (e.key === "Enter") {
  //     console.log("added");
  //     const names = {
  //       id: Math.floor(Math.random() * 100),
  //       value: name,
  //     };
  //     setDisplay((oldname) => [...oldname, names]);
  //     setName("");
  //     console.log(names);
  //   }
  // };
  // useEffect(() => {
  //   localStorage.setItem("dataKey", JSON.stringify(name));
  // }, [name]);
  // const handleDelete = () => {
  //   alert("name is deleted.");
  // };
  return (
    <div>
      <div>
        <Link
          style={{
            textDecoration: "none",
            color: "black",
            float: "right",
            marginTop: "4%",
            marginRight: "10%",
            boxShadow: "0 0 3px 2px #cec7c759",
            padding: 10,
            borderRadius: 5,
          }}
          to="/addattribute"
        >
          New Attribute
        </Link>
      </div>
      <div>
        <Box
          style={{
            float: "right",
            marginTop: "8%",
            height: "auto",
            width: "170px",
            boxShadow: "0 0 3px 2px #cec7c759",
            alignItems: "center",
            padding: 20,
            borderRadius: 5,
          }}
        ></Box>
      </div>
      <div>
        <Box
          style={{
            float: "right",
            marginTop: "8%",
            marginRight: "15%",
            height: "auto",
            width: "50%",
            boxShadow: "0 0 3px 2px #cec7c759",
            alignItems: "center",
            padding: 20,
            borderRadius: 5,
          }}
        ></Box>
      </div>
    </div>
  );
};

export default Attributes;
