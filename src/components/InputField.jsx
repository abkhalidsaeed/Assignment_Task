import { TextField , Box, Button } from "@mui/material";
import { useState, useEffect } from "react";
import axios from "axios";
import Draggable from "react-draggable";
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
  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:3000/data/${id}`)
      .then(() => {
        alert("Post deleted!");
        axios.get("http://localhost:3000/data").then((response) => {
          setData(response.data);
        });
      });
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
            width: "250px",
            boxShadow: "0 0 3px 2px #cec7c759",
            alignItems: "center",
            padding: 20,
            borderRadius: 5,
          }}
        >
          {data?.map((element, index) => (
            <Draggable>
            <tr>
              <td>
              <Button variant="outlined" key={index}>
                {element?.name}
              </Button>
                <Button size="small" onClick={(e) => handleDelete(element.id)}>X</Button>
              </td>
            </tr>
            </Draggable>
          ))}
        </Box>
      </div>
      <div>
        <Box
          style={{
            float: "right",
            marginTop: "2%",
            marginRight: "15%",
            height: "400px",
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
