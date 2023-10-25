import React from "react";
import { Link } from "react-router-dom";
import { Typography, Container, Button } from "@mui/material";

const Home = () => {
  return (
    <Container maxWidth="sm" sx={{ paddingTop: "30vh" }}>
      <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
        DH Odonto
      </Typography>
      <Typography variant="h6" align="center" color="textSecondary" paragraph>
        Este proyecto final de Frontend III utiliza tecnologías como React con Vite,
        Material UI, React Router Dom, Context API y localStorage. Además, aprovecha los
        hooks de React, incluyendo useContext, useState, useEffect y useReducer.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        component={Link}
        to="/dentistas"
        sx={{ display: "flex", justifyContent: "center" }}
      >
        Ir a Mis Dentistas
      </Button>
    </Container>
  );
}

export default Home;
