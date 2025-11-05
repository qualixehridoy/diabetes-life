import HeroButton from "./Button";
import "./Hero.css";

const Hero = () => {
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
        loading="lazy"
        poster="/HeroBgFallback.jpg"
      />

      {/* Overlay for readability */}
      <div className="absolute inset-0 backdrop-blur-sm bg-black/20"></div>

      {/* Content */}
      <div
        className="
          w-full max-w-[1200px] relative z-10 mx-auto 
          px-4 sm:px-6                /* Less side padding on mobile */
          pt-16 sm:pt-20 md:pt-24     /* Reduced top padding on mobile */
          text-left text-white
        "
      >
        <h1
          className="
            font-Hanken font-extrabold mb-6 drop-shadow-lg leading-tight max-w-3xl
            text-[clamp(1.8rem,6vw,4rem)]  /* Fluid, mobile-friendly heading */
          "
        >
          Know more and do more
          <br />
          <span className="animated-gradient bg-clip-text text-transparent animate-gradient-x">
            for Diabetes at work
          </span>
        </h1>

        <p
          className="
            text-sm sm:text-base md:text-lg 
            mb-8 max-w-lg leading-relaxed text-gray-100 
            pt-4 sm:pt-6 font-Hanken
          "
        >
          Join our movement to raise awareness and promote a healthier future
          for everyone.
        </p>

        {/* Cursor-origin full-fill button */}
        <HeroButton text={"Are you in Diabetes Risk?"} />
      </div>
    </section>
  );
};

export default Hero;
