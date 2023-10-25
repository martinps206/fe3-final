import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../../context/GlobalContext";
import { Switch, AppBar, Box, Toolbar, Typography, Button } from "@mui/material";

// Definimos los elementos de navegación.
const navItems = [
  { name: "Home", path: "/" },
  { name: "Dentistas", path: "/dentistas" },
  { name: "Favoritos", path: "/favs" },
  { name: "Contacto", path: "/contacto" }
];

const NavBar = (props) => {
  const { state, dispatch } = useContext(GlobalContext);

  // Función para cambiar el modo claro/oscuro.
  const handleChange = () => {
    dispatch({ type: "SWITCH_MODE" });
  };

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar component="nav">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            DH Odonto
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button
                component={Link}
                to={item.path}
                key={item.name}
                sx={{ color: "#fff" }}
              >
                {item.name}
              </Button>
            ))}
          </Box>
          <Switch
            checked={state.isDark}
            onChange={handleChange}
            inputProps={{ "aria-label": "controlled" }}
          />{" "}
          Modo Oscuro
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavBar;
