import React, { useContext } from "react";
import { Container, Typography, Box, IconButton, Link } from "@mui/material";
import { GlobalContext } from "../../../context/GlobalContext";
import {
  FaInstagram,
  FaFacebook,
  FaWhatsapp,
  FaTiktok,
} from 'react-icons/fa'; // Importa los íconos de react-icons

const Footer = () => {
  const { state } = useContext(GlobalContext);

  return (
    <Box
      sx={{
        backgroundColor: state.isDark ? "#000" : "#f1f1f1",
        position: "fixed",
        bottom: 0,
        width: "100%",
        height: 60,
        boxShadow: 3,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Container maxWidth="xl">
        <Typography sx={{ paddingTop: 2 }}>
          Martin Paliza Sanchez - Frontend III 2023
        </Typography>
        <div style={{ display: "flex" }}>
        <Link href="https://www.instagram.com/martinps_cc/" target="_blank">
          <IconButton>
            <FaInstagram />
          </IconButton>
        </Link>
        <Link href="https://www.facebook.com/" target="_blank">
          <IconButton>
            <FaFacebook />
          </IconButton>
        </Link>
        <Link href="https://wa.me/" target="_blank">
          <IconButton>
            <FaWhatsapp />
          </IconButton>
        </Link>
        <Link href="https://www.tiktok.com/" target="_blank">
          <IconButton>
            <FaTiktok />
          </IconButton>
        </Link>
        </div>
        
      </Container>
    </Box>
  );
};

export default Footer;