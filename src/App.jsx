import Navbar from "./components/NavBar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
// Importamos el nuevo contenedor de detalle que creamos
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <>
      <Navbar />
      {/* Tu catálogo de siempre */}
      <ItemListContainer greeting="¡Bienvenido a nuestra tienda de juegos de mesa!" />
      
      {/* Agregamos el detalle abajo para comprobar que cargue Catan correctamente */}
      <ItemDetailContainer />
    </>
  );
}

export default App;
