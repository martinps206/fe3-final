import React from "react";
import { Link } from "react-router-dom";
import { Typography, Container, Button } from "@mui/material";

const Home = () => {
  return (
    <Container maxWidth="sm" sx={{paddingTop: "30vh"}}>
      <Typography
        component="h1"
        variant="h2"
        align="center"
        color="textPrimary"
        gutterBottom
      >
        DENTISTAS.COM
      </Typography>
      <Typography variant="h6" align="center" color="textSecondary" paragraph>
        Este es el proyecto final de Frontend III. En este proyecto se usa React con Vite,
        Material UI, React Router Dom, Context API y localStorage Se usan los
        siguientes hooks, useContext, useState, useEffect, useReducer.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        to="/dentistas"
        component={Link}
        sx={{display: "flex", align: ""}}
      >
        Ir a mis dentistas
      </Button>
    </Container>
  );
}

export default Home;
