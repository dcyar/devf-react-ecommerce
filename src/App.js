import { ShopCartProvider } from "./context/cartContext";
import { UserProvider } from "./context/userContext";
import Routes from "./routes";

function App() {
  return (
    <UserProvider>
      <ShopCartProvider>
        <Routes />
      </ShopCartProvider>
    </UserProvider>
  );
}

export default App;
