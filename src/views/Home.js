import { useEffect, useState } from "react";
import Galeria from "../components/Galeria";
import { Button } from "react-bootstrap";


export default function Home() {
  return (
    <div id="Home">
      <h1>Natural Pic</h1>

      <Galeria />
      
      </div>
  );
}
