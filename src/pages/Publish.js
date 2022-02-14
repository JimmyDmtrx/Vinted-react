import Header from "../components/Header";
import { useState } from "react";
const Publish = () => {
  const [titre, setTitre] = useState("");
  const [article, setArticle] = useState("");
  //   const [marque, setMarque] = useState("");
  //   const [taille, setTaille] = useState("");
  //   const [couleur, setCouleur] = useState("");
  //   const [etat, setEtat] = useState("");
  //   const [lieu, setLieu] = useState("");
  //   const [prix, setPrix] = useState("");
  console.log(setArticle);
  return (
    <div>
      <Header />
      <h2>Vends ton article</h2>
      <div>Ajoute une photo</div>
      <div>
        <div>
          <p>titre</p>
          <input
            value={titre}
            type="text"
            placeholder="chemise de fou malade"
            onChange={(event) => setTitre(event.target.value)}
          ></input>
        </div>
        <div>
          <p>Décris ton article</p>
          <input
            value={article}
            type="textarea"
            placeholder="donnez des détails sur l'article"
            onChange={(event) => setArticle(event.target.value)}
          ></input>
        </div>
      </div>
      <div>
        <div>
          <p>Marque</p>
          <input type="text" placeholder=" ex: sacroflex"></input>
        </div>
        <div>
          <p>taille</p>
          <input type="text" placeholder="ex: L / 40/ 12"></input>
        </div>
        <div>
          <p>Couleur</p>
          <input type="text" placeholder="ex: blaaack"></input>
        </div>
        <div>
          <p>Etat</p>
          <input type="text" placeholder="neuf/porté/usé"></input>
        </div>
        <div>
          <p>Lieu</p>
          <input type="text" placeholder="ex : Paris"></input>
        </div>
      </div>
      <div>
        <p>prix</p>
        <input type="Number" placeholder="0,00€"></input>
      </div>
      <input type="submit" value={"Ajouter"} />
    </div>
  );
};

export default Publish;
