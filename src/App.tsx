import { Route, Routes } from "react-router";
import { Store } from "./layout/Store";

import { Home, Product, Collection } from "./pages";

const App = () => {
  return (
    <Routes>
      <Route element={<Store />}>
        <Route path="/" element={<Home />} />
        <Route path="/product/:handle" element={<Product />} />
        <Route path="/collection/:handle" element={<Collection />} />
      </Route>
    </Routes>
  );
};

export default App;
