import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckForm from "../components/CheckForm.js";
import Header from "../components/Header.js";

const Payment = () => {
  const stripePromise = loadStripe("pk_test_5z9rSB8XwuAOihoBixCMfL6X");

  return (
    <div>
      <Header />
      <h1>formulaire de paiment</h1>
      <Elements stripe={stripePromise}>
        <CheckForm />
      </Elements>
    </div>
  );
};
export default Payment;
