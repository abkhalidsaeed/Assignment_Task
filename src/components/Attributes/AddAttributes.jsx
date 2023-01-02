import React, { useState } from "react";
import {
  Container,
  Typography,
  FormControl,
  InputLabel,
  Input,
  Box,
  FormGroup,
  Button,
} from "@mui/material";
import { addAttribute } from "../../Service/Api";
// import { useHistory } from 'react-router-dom';
const initialValue = {
  name: "",
};

const AddAttribute = () => {
  const [attribute, setAttribute] = useState(initialValue);
  const { name } = attribute;

  // const history = useHistory();

  const onValueChange = (e) => {
    //  console.log(e);
    // console.log(e.target.value);
    setAttribute({ ...attribute, [e.target.name]: e.target.value });
    console.log(attribute);
  };

  const addAttributeDetails = async () => {
    await addAttribute(attribute);
    //    history.push('/all');
  };

  return (
    <Container maxWidth="sm">
      <Box my={5}>
        <Typography variant="h5" align="center">
          Add Attribute Details
        </Typography>
        <FormGroup>
          <FormControl>
            <InputLabel>Name</InputLabel>
            <Input
              onChange={(e) => onValueChange(e)}
              name="name"
              value={name}
            />
          </FormControl>
          <Box my={3}>
            <Button
              variant="contained"
              onClick={() => addAttributeDetails()}
              color="primary"
              align="center"
            >
              Add Attribute
            </Button>
            <Button
            //   onClick={() => history.push("/all")}
              variant="contained"
              color="secondary"
              align="center"
              style={{ margin: "0px 20px" }}
            >
              Cancel
            </Button>
          </Box>
        </FormGroup>
      </Box>
    </Container>
  );
};

export default AddAttribute;
