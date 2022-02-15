import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import axios from "axios";
import "../assets/CSS/CheckForm.css";

const CheckForm = ({ title, price }) => {
  const stripe = useStripe();
  const elements = useElements();
  const protec = (Number(price) * 0.1).toFixed(1);
  const port = Number(price) * 0.15;
  const total = Number(price) + Number(protec) + Number(port);

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const cardElements = elements.getElement(CardElement);
      const stripeResponse = await stripe.createToken(cardElements, {
        name: "id",
      });
      const stripeToken = stripeResponse.token.id;
      console.log("Stripe Response ===> ", stripeResponse);

      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/payment",
        {
          token: stripeToken,
          title: title,
          amount: price,
        }
      );
      console.log(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="div-form-check">
      <form onSubmit={handleSubmit}>
        <div className="résumé">Résumé de la commande</div>
        <div>
          <ul>
            <li className="li">
              <span className="keyspan">Commande</span>
              <span>{price}€</span>
            </li>
            <li className="li">
              <span className="keyspan">Frais de protection des acheteurs</span>
              <span>{protec}€</span>
            </li>
            <li className="li">
              <span className="keyspan">Frais de Port</span>
              <span>{port}€</span>
            </li>
          </ul>
        </div>
        <div className="total-check">
          <span className="total">Total</span>
          <span>{total}€</span>
        </div>
        <div>
          <p>
            il ne vous reste plus qu'une étape pour vous offrir{" "}
            <span>{title}</span> . <br /> Vous allez payer <span>{price}€</span>{" "}
            (frais de protection et frais de port compris)
          </p>
        </div>
        <CardElement className="credit-card-info" />
        <input className="pay-button" type="submit" />
      </form>
    </div>
  );
};
export default CheckForm;
