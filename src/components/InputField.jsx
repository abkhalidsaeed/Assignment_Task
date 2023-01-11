import { Input, Box } from "@mui/material";
import { useState, useEffect } from "react";
import axios from "axios";

const InputField = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3000/data").then((response) => {
      setData(response.data);
    });
  }, []);

  const handleKeyDown = async (e) => {
    if (e.key === "Enter") {
      axios
        .post("http://localhost:3000/data", { name: data })
        .then((response) => {
          setData(response.data);
        });
    }
  };
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
          placeholder="Enter Name"
          onChange={(e) => setData(e.target.value)}
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
          <h2 key={data.id}>{data.name}</h2>
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
