import Home from "./routes/home/home.component";
import { Route, Routes } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";

import Shop from "./routes/shop/shop.component";
import Authentication from "./routes/authentication/authentication.component";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/signin" element={<Authentication />} />
      </Route>
    </Routes>
  );
}

export default App;
