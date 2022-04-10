import "./categories.styles.scss";
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import SignIn from "./routes/sign-in/sign-in.component";
import Shop from "./routes/shop/shop.component";
import Checkout from "./routes/checkout/checkout.component";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigation></Navigation>}>
          <Route index element={<Home></Home>}></Route>
          <Route path="shop/*" element={<Shop></Shop>}></Route>
          <Route path="sign-in" element={<SignIn></SignIn>}></Route>
          <Route path="checkout" element={<Checkout></Checkout>}></Route>
        </Route>
      </Routes>
    </>
  );
};

export default App;
