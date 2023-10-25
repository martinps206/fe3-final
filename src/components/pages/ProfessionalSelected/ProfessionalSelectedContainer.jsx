import React, { useContext, useEffect } from "react";
import {useParams} from "react-router-dom";
import ProfessionalSelected from "./ProfessionalSelected";
import { GlobalContext } from "../../../context/GlobalContext";
import { Container } from "@mui/material";
import axios from "axios";

const ProfessionalSelectedContainer = () => {
  const { state, dispatch } = useContext(GlobalContext);
  const { id } = useParams();

  useEffect(() => {
    const getUser = axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    getUser.then((res) => dispatch({ type: "GET_USER", payload: res.data }));
  }, []);

  return (
    <Container maxWidth="xl" sx={{paddingTop: "80px", paddingBottom: "80px"}}>
      {state.user ? (
        <ProfessionalSelected user={state.user} favs={state.favs} />
      ) : (
        <h2>Dentista no encontrado</h2>
      )}
    </Container>
  );
};

export default ProfessionalSelectedContainer;
