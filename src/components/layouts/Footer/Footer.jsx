import React, {useContext} from 'react'
import { Box, Container, Typography } from '@mui/material'
import { GlobalContext } from "../../../context/GlobalContext";

const Footer = () => {
  const {state} = useContext(GlobalContext);
  return (
    <Box
      sx={{
        backgroundColor: state.isDark ? "#000" : "#f1f1f1",
        position: "fixed",
        bottom: 0,
        width: "100%",
        height: 60,
        boxShadow: 3,
      }}
    >
      <Container maxWidth="xl">
        <Typography sx={{paddingTop: 2}}>
          Martin Paliza Sanchez - Frontend III 2023
        </Typography>
      </Container>
    </Box>
  );
}
export default Footer