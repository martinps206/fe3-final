import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../../../context/GlobalContext";
import { Container } from "@mui/material";
import Professional from "./Professional";
import axios from "axios";

const ProfessionalsContainer = () => {
  const { state, dispatch } = useContext(GlobalContext);

  useEffect(() => {
    const getProfesionals = axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    getProfesionals
      .then((res) => dispatch({ type: "GET_USERS", payload: res.data }))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Container maxWidth="xl" sx={{paddingTop: "80px", paddingBottom:"80px"}}>
      <h1>Listado de dentistas:</h1>
      <Professional users={state.users} dispatch={dispatch} favs={state.favs} />
    </Container>
  );
};

export default ProfessionalsContainer;
