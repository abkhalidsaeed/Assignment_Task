import React from "react";
import { Input, Box, Chip } from "@mui/material";
import { useState,useEffect } from "react";

function Home(props) {
  const [name, setName] = useState([]);

  const handleKeyDown = (e) => {
    if (e.key == "Enter") {
      setName(e.target.value);
    

      //setName((prevState)=>console.log(prevState))
    }
  };
  useEffect(()=>{
    setName((prevState)=>[...prevState,name])
  })
  const handleClick = () => {
    console.info('You clicked the Chip.');
  };
const findValues=()=>{
}
  const handleDelete = () => {
    alert('name is deleted.');
  };

  return (
    <div>
      {/* <div style={{ display: "flex" }}>
        <button style={{ marginLeft: "90%" }}> + New </button>
      </div> */}
      <div style={{ textAlign: "right", marginTop: "4%", marginRight: "5%" }}>
        <Input
          style={{ width: "210px" }}
          type="text"
          id="name"
          name="name"
          placeholder="Enter Name"
          onKeyDown={handleKeyDown}
        />
      </div>
      <Box
        style={{
          float: "right",
          marginTop: "2%",
          marginRight: "5%",
          height: "auto",
          width: "170px",
          boxShadow: "0 0 3px 2px #cec7c759",
          alignItems: "center",
          padding: 20,
          borderRadius: 5,
        }}
      >
        <Chip

          label={name.map((values)=>{
            return values
          })}
          onClick={handleClick}
          onDelete={handleDelete}
        />
      </Box>
    </div>
  );
}

export default Home;
