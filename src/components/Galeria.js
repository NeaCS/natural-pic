import { ImageList, ImageListItem } from "@mui/material";
import "../assets/css/galeria.css";
import FavoritesContext from "../context/FavoriteContext";
import { Card, CardImg } from "react-bootstrap";
import { useContext, useState } from "react";

export default function Home(props) {
  const { imagenes, favoritos, setFavoritos } = useContext(FavoritesContext);

  const guardarFavorito = (e, evt) => {
    setFavoritos([...favoritos, e]);
    evt.target.className = "bi-heart";
  };

  return (
    <div className="galeria grid-columns-5 p-3">
      {imagenes.map((imagen, index) => (
        <Card key={index}>
          <Card.Body>
            <CardImg variant="top" src={imagen.src.portrait} />
            <i
              style={{ fontSize: "32px", color: "red" }}
              className="bi bi-heart-fill"
              onClick={(evt) => guardarFavorito(imagen.src.portrait, evt)}
            ></i>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}
