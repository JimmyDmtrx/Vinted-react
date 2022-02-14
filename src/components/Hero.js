import Heropic from "../assets/img/vinted-hero.jpeg";
const Hero = () => {
  return (
    <div className="relative">
      <div className="hero">
        <img className="heropic" src={Heropic} alt="hero" />
      </div>
      <div className="tabHero">
        <p>prets à faire du tri dans vos placards ?</p>
        <button className="button-hero">commencez à vendre</button>
      </div>
    </div>
  );
};

export default Hero;
