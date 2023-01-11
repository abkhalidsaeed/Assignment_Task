import { TextField , Box, Button } from "@mui/material";
import { useState, useEffect } from "react";
import axios from "axios";

const InputField = () => {
  const [data, setData] = useState([]);
  const[inputValue, SetInput] = useState('')

  useEffect(() => {
    axios.get("http://localhost:3000/data").then((response) => {
      setData(response.data);
    });
  }, []);

  const handleKeyDown =  (e) => {
    if (e.key === "Enter") {
      axios
        .post("http://localhost:3000/data", { name: inputValue })
        .then((response) => {
          setData([response.data, ...data]);
          SetInput('')
        });
    }
  };
  const handleDelete = () => {
    alert("name is deleted.");
  };
  return (
    <div>
      <div style={{ textAlign: "right", marginTop: "4%", marginRight: "5%" }}>
        <TextField
        
        value={inputValue}
        id="standard-basic" l
        label="Enter name" 
        variant="standard"
          onChange={(e) => SetInput(e.target.value)}
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
        { data?.map((element, index) => (
            <Button variant="outlined" key={index}>{element?.name} <Button>X</Button></Button>
        ))
        }
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
