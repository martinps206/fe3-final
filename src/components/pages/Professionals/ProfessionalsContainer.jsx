import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../../../context/GlobalContext";
import { Container } from "@mui/material";
import Professional from "./Professional";
import axios from "axios";

const ProfessionalsContainer = () => {
  const { state, dispatch } = useContext(GlobalContext);

  useEffect(() => {
    // Utiliza async/await para hacer que el código sea más legible
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        dispatch({ type: "GET_USERS", payload: response.data });
      } catch (error) {
        console.log(error);
      }
    };

    fetchData(); // Llama a la función para cargar los dentistas.
  }, [dispatch]); // Agrega dispatch como dependencia.

  return (
    <Container maxWidth="xl" sx={{ paddingTop: "80px", paddingBottom: "80px" }}>
      <h1>Listado de dentistas:</h1>
      <Professional users={state.users} dispatch={dispatch} favs={state.favs} />
    </Container>
  );
};

export default ProfessionalsContainer;
