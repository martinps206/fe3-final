import React, { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/layouts/Navbar/Navbar";
import Footer from "./components/layouts/Footer/Footer";
import ProfessionalsContainer from "./components/pages/Professionals/ProfessionalsContainer";
import Home from "./components/pages/Home/Home";
import ProfessionalSelectedContainer from "./components/pages/ProfessionalSelected/ProfessionalSelectedContainer";
import FavoritesContainer from "./components/pages/Favorites/FavoritesContainer";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { GlobalContext } from "./context/GlobalContext";
import ContactoContainer from "./components/pages/Contacto/ContactoContainer";

function App() {
  // Usamos useContext para acceder al estado global de la aplicación.
  const { state } = useContext(GlobalContext);

  // Creamos un tema oscuro o claro en función del estado.
  const darkTheme = createTheme({
    palette: {
      mode: state.isDark ? "dark" : "light",
    },
  });

  return (
    // Utilizamos ThemeProvider para aplicar el tema a la aplicación.
    <ThemeProvider theme={darkTheme}>
      {/* CssBaseline normaliza el CSS para mejorar la consistencia en estilos. */}
      <CssBaseline />
      <BrowserRouter>
        {/* Navbar es el componente de navegación en la parte superior. */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dentistas" element={<ProfessionalsContainer />} />
          {/* Route para mostrar detalles de un profesional. */}
          <Route
            path="/dentista/:id"
            element={<ProfessionalSelectedContainer />}
          />
          <Route path="/favs" element={<FavoritesContainer />} />
          {/* Route para la página de contacto. */}
          <Route path="/contacto" element={<ContactoContainer />} />
          {/* Ruta predeterminada si no se encuentra ninguna coincidencia. */}
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
        {/* Footer es el componente de pie de página. */}
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;