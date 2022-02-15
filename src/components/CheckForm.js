import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import axios from "axios";

const CheckForm = ({ title, price }) => {
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
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/payment",
        {
          stripeToken: stripeResponse.token.id,
          productPrice: 20,
        }
      );
      console.log(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>Résumé de la commande</div>
        <div>
          <ul>
            <li>Commande</li>
            <li>Frais de protection des acheteurs</li>
            <li>Frais de Port</li>
          </ul>
        </div>
        <div>
          <span>Total</span>
          <span>{price}</span>
        </div>
        <div>
          <p>
            il ne vous reste plus qu'une étape pour vous offrir {title}. Vous
            allez payer {price}€ (frais de protection et frais de port compris
          </p>
        </div>
        <CardElement />
        <input type="submit" />
      </form>
    </div>
  );
};
export default CheckForm;
