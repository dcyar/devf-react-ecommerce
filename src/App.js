import { ShopCartProvider } from "./context/cartContext";
import { ProductProvider } from "./context/productsContext";
import { UserProvider } from "./context/userContext";
import Routes from "./routes";

function App() {
  return (
    <UserProvider>
      <ShopCartProvider>
        <ProductProvider>
          <Routes />
        </ProductProvider>
      </ShopCartProvider>
    </UserProvider>
  );
}

export default App;
