import "./styles.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import Favoritos from "./views/Favoritos";
import fotos from "./database/fotos.json";
import 'bootstrap/dist/css/bootstrap.min.css';
import FavoritesContext from "./context/FavoriteContext";
import { useState } from "react";

export default function App() {
const imagenes = fotos.photos;
const [imgSeleccionada, setImgSeleccionada] = useState()
const [favoritos, setFavoritos] = useState([])

  return (
    <div className="App">
      <FavoritesContext.Provider value={{imagenes, favoritos, setFavoritos, imgSeleccionada, setImgSeleccionada}}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favoritos" element={<Favoritos />} />
        </Routes>
      </BrowserRouter>
</FavoritesContext.Provider>
    </div>
  );
}
