const Hero = () => {
  return (
    <section
      id="hero"
      className="relative w-full h-screen flex items-center justify-start overflow-hidden"
    >
     
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/HeroBG.mp4" 
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay for readability */}
      <div className="absolute inset-0 backdrop-blur-sm shadow-sm"></div>

      {/* Content */}
      <div className="relative z-10 max-w-[1200px] px-8 text-left text-white">
        <h1 className="text-5xl md:text-6xl font-Hanken font-bold mb-4 drop-shadow-lg max-w-[486px]">
          Know more and do more
for diabetes at work
        </h1>
        <p className="text-lg md:text-xl mb-6 max-w-lg leading-relaxed text-gray-100">
          Join our movement to raise awareness and promote a healthier future for everyone.
        </p>
        <a
          href="#videos"
          className="inline-block bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition-all duration-300"
        >
          Watch Awareness Videos
        </a>
      </div>
    </section>
  );
};

export default Hero;
