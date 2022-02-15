import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Publish from "./pages/Publish";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Payment from "./pages/Payment";

function App() {
  const stripePromise = loadStripe("pk_test_votreCléPublique");
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/publish" element={<Publish />} />
        <Route path="/payment" element={<Payment />} />
        <Elements stripe={stripePromise}>
          <Payment />
        </Elements>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
