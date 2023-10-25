import React from 'react';
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  IconButton,
  Typography,
  Grid,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";

const ProfessionalSelected = ({ user, favs, dispatch }) => {
  // Hemos eliminado la etiqueta <></> que no era necesaria.

  return (
    <Grid container spacing={2}>
      {/* Utilizamos un Grid container para organizar el diseño. */}
      <Grid item xs={12}>
        <Card>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
                {user.name.charAt(0)}
              </Avatar>
            }
            title={user.name}
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              <p>{user.email}</p>
              <p>{user.phone}</p>
              <p>{user.company.name}</p>
              <p>{user.company.catchPhrase}</p>
              <p>{user.company.bs}</p>
              <p>{user.address.street}</p>
              <p>{user.address.suite}</p>
              <p>{user.address.city}</p>
              <p>{user.address.zipcode}</p>
              <p>{user.address.geo.lat}</p>
              <p>{user.address.geo.lng}</p>
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton
              aria-label="add to favorites"
              onClick={() => dispatch({ type: "HANDLE_FAVORITE", payload: user })}
            >
              <FavoriteIcon
                color={
                  favs.some((fav) => fav.id === user.id) ? "error" : "disabled"
                }
              />
            </IconButton>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
}

export default ProfessionalSelected;