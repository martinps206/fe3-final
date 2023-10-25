import React, { useContext } from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from "./components/layouts/Navbar/Navbar";
import Footer from "./components/layouts/Footer/Footer";
import ProfessionalsContainer from "./components/pages/Professionals/ProfessionalsContainer";
import Home from "./components/pages/Home/Home";
import ProfessionalSelectedContainer from "./components/pages/ProfessionalSelected/ProfessionalSelectedContainer";
import FavoritesContainer from "./components/pages/Favorites/FavoritesContainer";
import {ThemeProvider, createTheme} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { GlobalContext } from "./context/GlobalContext";
import ContactoContainer from "./components/pages/Contacto/ContactoContainer";

function App() {
  const {state} = useContext(GlobalContext);
  const darkTheme = createTheme({
    palette: {
      mode: state.isDark ? "dark" : "light",
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dentistas" element={<ProfessionalsContainer />} />
          <Route
            path="/dentista/:id"
            element={<ProfessionalSelectedContainer />}
          />
          <Route path="/favs" element={<FavoritesContainer />} />
          <Route path="/contacto" element={<ContactoContainer />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
