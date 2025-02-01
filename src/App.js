// import Home from "./routes/home/home.component";
import { Route, Routes } from "react-router-dom";
// import Navigation from "./routes/navigation/navigation.component";

// // import Shop from "./routes/shop/shop.component";
// import Authentication from "./routes/authentication/authentication.component";
// import CheckOut from "./routes/checkout/checkout.component";

import { useEffect ,lazy,Suspense} from "react";
import {
  craeteUserDocumnetFromAuth,
  getCurrentUser,
  onAuthStateChangedListener,
} from "./utils/firebase/firebase.utils";
import { checkUserSession, setCurrentUser } from "./store/user/user.action";
import { useDispatch } from "react-redux";

const Shop =   lazy(() => import('./routes/shop/shop.component'))
const Navigation = lazy(()=>import("./routes/navigation/navigation.component"));
const Authentication = lazy(() => import("./routes/authentication/authentication.component"));
const CheckOut = lazy(() => import("./routes/checkout/checkout.component"));
const Home = lazy(() => import("./routes/home/home.component"));


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    // const unsubscribe = onAuthStateChangedListener((user) => {
    //   if (user) {
    //     craeteUserDocumnetFromAuth(user);
    //   }
    //   dispatch(setCurrentUser(user));
    // });
    // return unsubscribe;
    // getCurrentUser().then((user) => console.log(user));
    dispatch(checkUserSession());
  }, [dispatch]);
  return (
    <Suspense fallback={null}>

    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/shop/*" element={<Shop />} />
        <Route path="/signin" element={<Authentication />} />
        <Route path="/checkout" element={<CheckOut />} />
      </Route>
    </Routes>
    </Suspense>
  );
}

export default App;
