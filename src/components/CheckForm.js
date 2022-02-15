import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import axios from "axios";

const CheckForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const userId = "097864643523";

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const cardElements = elements.getElement(CardElement);
      const stripeResponse = await stripe.createToken(cardElements, {
        name: userId,
      });
      console.log("Stripe Response ===> ", stripeResponse);
      const response = await axios.post("http://localhost:3100/payment", {
        stripeToken: stripeResponse.token.id,
        productPrice: 20,
      });
      console.log(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement />
        <input type="submit" />
      </form>
    </div>
  );
};
export default CheckForm;
