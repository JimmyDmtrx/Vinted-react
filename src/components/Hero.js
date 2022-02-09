import Logo from "../assets/img/vinted-hero.jpeg";
const Hero = () => {
  return (
    <div>
      <img src={Logo} alt="hero" />
      <div>
        <span>prets à faire du tri dans vos placard ?</span>
        <button>commencez à vendre</button>
      </div>
    </div>
  );
};

export default Hero;
