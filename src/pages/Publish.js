import Header from "../components/Header";
import { useState } from "react";
import axios from "axios";
import "../assets/CSS/Publish.css";
import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";

const Publish = () => {
  const [titre, setTitre] = useState("");
  const [article, setArticle] = useState("");
  const [marque, setMarque] = useState("");
  const [taille, setTaille] = useState("");
  const [couleur, setCouleur] = useState("");
  const [etat, setEtat] = useState("");
  const [lieu, setLieu] = useState("");
  const [prix, setPrix] = useState("");
  const [picture, setPicture] = useState();
  const [change, setChange] = useState(false);
  const userToken = Cookies.get("userToken");

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const formData = new FormData();
      formData.append("title", titre);
      formData.append("description", article);
      formData.append("picture", picture);
      formData.append("brand", marque);
      formData.append("size", taille);
      formData.append("color", couleur);
      formData.append("condition", etat);
      formData.append("city", lieu);
      formData.append("price", prix);

      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/offer/publish",
        formData,
        {
          headers: {
            authorization: "Bearer " + userToken,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (response.data._id) {
        Navigate(`/offer/${response.data._id}`);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return userToken ? (
    <div>
      <Header />
      <div className="publish-main">
        <div className="form-contain">
          <h2 className="h2publish">Vends ton article</h2>
          <form onSubmit={handleSubmit}>
            <div className="file-contain">
              <input
                className="input-publish"
                type="file"
                onChange={(event) => setPicture(event.target.files[0])}
              />
            </div>
            <div className="form-contain2">
              <div className="sousdiv-contain">
                <p className="entete">titre</p>
                <input
                  className="input-publish"
                  value={titre}
                  type="text"
                  placeholder=" ex: chemise "
                  onChange={(event) => setTitre(event.target.value)}
                ></input>
              </div>
              <div className="form-contain2">
                <div className="sousdiv-contain">
                  <p>Décris ton article</p>
                  <textarea
                    className="input-publish"
                    value={article}
                    type="textarea"
                    placeholder="donnez des détails sur l'article"
                    onChange={(event) => setArticle(event.target.value)}
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="form-contain2">
              <div className="sousdiv-contain">
                <p>Marque</p>
                <input
                  className="input-publish"
                  value={marque}
                  type="text"
                  placeholder=" ex: sacroflex"
                  onChange={(event) => setMarque(event.target.value)}
                ></input>
              </div>
              <div className="sousdiv-contain">
                <p>taille</p>
                <input
                  className="input-publish"
                  value={taille}
                  type="text"
                  placeholder="ex: L / 40/ 12"
                  onChange={(event) => setTaille(event.target.value)}
                ></input>
              </div>
              <div className="sousdiv-contain">
                <p>Couleur</p>
                <input
                  className="input-publish"
                  value={couleur}
                  type="text"
                  placeholder="ex: blaaack"
                  onChange={(event) => setCouleur(event.target.value)}
                ></input>
              </div>
              <div className="sousdiv-contain">
                <p>Etat</p>
                <input
                  className="input-publish"
                  value={etat}
                  type="text"
                  placeholder="neuf/porté/usé"
                  onChange={(event) => setEtat(event.target.value)}
                ></input>
              </div>
              <div className="sousdiv-contain">
                <p>Lieu</p>
                <input
                  className="input-publish"
                  value={lieu}
                  type="text"
                  placeholder="ex : Paris"
                  onChange={(event) => setLieu(event.target.value)}
                ></input>
              </div>
            </div>
            <div className="form-contain2">
              <div>
                <p>prix</p>
              </div>
              <div className="sousdiv-contain">
                <input
                  className="input-publish"
                  value={prix}
                  type="Number"
                  placeholder="0,00€"
                  onChange={(event) => setPrix(event.target.value)}
                ></input>{" "}
                <input
                  type="checkbox"
                  onChange={(event) => setChange(event.target.checked)}
                />
                <input type="submit" value={"Ajouter"} />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  ) : (
    <Navigate to="/login" />
  );
};

export default Publish;
