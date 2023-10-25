import React, { useContext } from "react";
import { Container } from "@mui/material";
import Professional from "../Professionals/Professional";
import {GlobalContext} from "../../../context/GlobalContext";

const FavoritesContainer = () => {
  const { state, dispatch } = useContext(GlobalContext);

  return (
    <Container maxWidth="xl" sx={{paddingTop: "80px", paddingBottom:"80px"}}>
      <h1>Mis favoritos:</h1>
      <Professional users={state.favs} dispatch={dispatch} favs={state.favs} />
    </Container>
  );
};

export default FavoritesContainer;
