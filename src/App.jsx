import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <>
      <Navbar />
      <ItemListContainer greeting="¡Bienvenido a nuestra tienda de juegos de mesa!" />
    </>
  );
}

export default App;
