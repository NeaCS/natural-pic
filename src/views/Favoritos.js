import { useContext } from "react";
import { Card, CardImg } from "react-bootstrap";
import FavoritesContext from "../context/FavoriteContext";

export default function Favoritos() {
  const { favoritos } = useContext(FavoritesContext);
  
  return (
    <div>
      <h1>Fotos favoritas</h1>
      <div className="galeria grid-columns-5 p-3">
      {favoritos.map((imagen, index) => (
        <Card>
          <Card.Body >
            <CardImg variant="top" src={imagen}  
             />
          </Card.Body>
        </Card>
      ))}
      </div>
    </div>
  );
}
