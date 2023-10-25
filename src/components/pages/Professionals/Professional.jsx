import React from "react";
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
  Grid,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Link } from "react-router-dom";

const Professional = ({ users, dispatch, favs }) => {
  return (
    <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
      {users.map((user, index) => {
        return (
          <Grid item xs={3} sm={3} md={3} key={index}>
            <Card>
              <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
                    {user.name.charAt(0)}
                  </Avatar>
                }
                title={user.name}
              />
              <Link to={`/dentista/${user.id}`}>
                <CardMedia
                  component="img"
                  height="194"
                  image={
                    "https://res.cloudinary.com/dnqfh2chg/image/upload/v1680834957/doctor_mpg4ix.jpg"
                  }
                  alt={user.name}
                />
              </Link>
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {user.email}
                  <br />
                  {user.phone}
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton
                  aria-label="add to favorites"
                  onClick={() =>
                    dispatch({ type: "HANDLE_FAVORITE", payload: user })
                  }
                >
                  <FavoriteIcon
                    color={
                      favs.some((fav) => fav.id === user.id)
                        ? "error"
                        : "disabled"
                    }
                  />
                </IconButton>
                <Button
                  component={Link}
                  to={`/dentista/${user.id}`}
                  variant="contained"
                >
                  Ver detalle
                </Button>
              </CardActions>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Professional;
