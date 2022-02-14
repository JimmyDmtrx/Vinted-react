import Heropic from "../assets/img/vinted-hero.jpeg";
const Hero = () => {
  return (
    <div className="relative">
      <div className="hero">
        <img className="heropic" src={Heropic} alt="hero" />
      </div>
      <div className="tabHero">
        <p>prets à faire du tri dans vos placard ?</p>
        <button>commencez à vendre</button>
      </div>
    </div>
  );
};

export default Hero;
