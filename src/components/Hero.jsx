
import bannner from '../assets/banner.jpg';

const Hero = () => {
  return (
    <div
      className="hero h-[80vh] rounded-3xl my-10"
      style={{
        backgroundImage:
          `url(${bannner})`,
      }}>
      <div className="hero-overlay bg-opacity-30 rounded-3xl"></div>
     
    </div>
  );
};

export default Hero;
