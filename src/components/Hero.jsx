import HeroButton from "./Button";
import './Hero.css';

const Hero =()=>{
  return (
    <section
      id="hero"
      className="relative w-full h-screen flex items-center justify-start overflow-hidden"
    >
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/HeroBG.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay for readability */}
      <div className="absolute inset-0 backdrop-blur-sm bg-black/40"></div>

      {/* Content */}
      <div className="w-full max-w-[1200px] relative z-10 mx-auto px-6 pt-24 text-left text-white">
        <h1 className="text-5xl md:text-6xl font-Hanken font-extrabold mb-6 drop-shadow-lg leading-tight max-w-3xl">
          Know more and do more
          <br />
          <span className="animated-gradient  bg-clip-text text-transparent animate-gradient-x">
            for Diabetes at work
          </span>
        </h1>

        <p className="text-lg md:text-xl mb-8 max-w-lg leading-relaxed text-gray-100 pt-[30px] font-Hanken">
          Join our movement to raise awareness and promote a healthier future
          for everyone.
        </p>

        {/* Cursor-origin full-fill button */}
       <HeroButton text={'Are you in Diabetes Risk?'} />
      </div>
    </section>
  );
};

export default Hero;
