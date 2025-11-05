import HeroButton from "./Button";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative w-full h-screen flex items-center justify-start overflow-hidden"
    >
      {/*======== Background Video============== */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/HeroBG.mp4"
        autoPlay
        loop
        muted
        playsInline
        poster="/HeroBgFallback.avif"
      />

      {/* Overlay for readability */}
      <div className="absolute inset-0 backdrop-blur-sm bg-white/10"></div>

      {/* Content */}
      <div
        className="
          w-full max-w-[1200px] relative z-10 mx-auto 
          px-4 sm:px-6 
          pt-10 sm:pt-28 md:pt-32
          text-left text-white
        "
      >
        {/* Main Heading */}
        <h1
          className="
            capitalize font-bold font-myfont mb-6 drop-shadow-lg leading-tight
            max-w-3xl
            text-3xl sm:text-5xl md:text-6xl lg:text-[60px]
          "
        >
          Know more and do more
          <br />
          <span className="bg-primary bg-clip-text text-transparent animate-gradient-x">
            for Diabetes at work
          </span>
        </h1>

        {/* Subtext */}
        <p
          className="
            text-sm sm:text-base md:text-lg 
            mb-18 md:8 max-w-lg leading-relaxed text-gray-100 
            pt-4 sm:pt-5 font-myfont font-semibold
          "
        >
          Join our movement to raise awareness and promote a healthier future
          for everyone.
        </p>

        {/* CTA Button */}
        <div className="text-sm md:text-[16px]">
        <HeroButton text="Are you in Diabetes Risk?" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
