import React from 'react';
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
  Container,
  Grid,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";

const ProfessionalSelected = ({ user, favs, dispatch }) => {
  return (
    <>
      <Card key={user.id}>
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
    </>
  );
}

export default ProfessionalSelected;
