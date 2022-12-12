import { Input, Box, Chip } from "@mui/material";
import { useState, useEffect } from "react";

const InputField = () => {
  const [name, setName] = useState("");
  const [display, setDisplay] = useState([]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      console.log("added");
      const names = {
        id: Math.floor(Math.random() * 100),
        value: name,
      };
      setDisplay((oldname) => [...oldname, names]);
      setName("");
      console.log(names);
    }
  };
  useEffect(() => {
    localStorage.setItem("dataKey", JSON.stringify(name));
  }, [name]);
  const handleDelete = () => {
    alert("name is deleted.");
  };
  return (
    <div>
      <div style={{ textAlign: "right", marginTop: "4%", marginRight: "5%" }}>
        <Input
          style={{ width: "210px" }}
          type="text"
          id="name"
          name="name"
          value={name}
          placeholder="Enter Name"
          onChange={(e) => setName(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </div>
      <div>
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
          {display.map((names) => (
            <div key={names.id}>
              <span>{names.value}</span>
            </div>
          ))}
        </Box>
      </div>
      <div>
        <Box
          style={{
            float: "right",
            marginTop: "2%",
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

export default InputField;
