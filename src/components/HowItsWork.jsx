import { CircleCheckBig } from "lucide-react";
import HeroButton from "./Button";

const texts = [
  "7 in 10 people living with diabetes are of working age.",
  "3 in 4 people living with diabetes experience depression.",
  "4 in 5 people living with diabetes experience burnout.",
];

const HowItsWork = () => {
  return (
    <section
      id="howitswork"
      className="
        py-16 sm:py-20 md:py-28 
        bg-gradient-to-r from-white to-blue-100 
        w-full
      "
    >
      <div
        className="
          max-w-[1200px] mx-auto 
          flex flex-col md:flex-row items-center md:items-start justify-between 
          gap-6 sm:gap-10 md:gap-16     /* Reduced gap on mobile */
          px-4 sm:px-6 md:px-8 lg:px-0
        "
      >
        {/* === Left: Image === */}
        <div
          className="flex-1 flex justify-center md:justify-start"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <img
            src="/howitsworkImage.png"
            alt="How DiaCare Works"
            className="
              rounded-2xl w-full max-w-xs sm:max-w-sm md:max-w-md 
              hover:scale-105 transition-transform duration-700
            "
          />
        </div>

        {/* === Right: Text Content === */}
        <div
          className="
            flex-1 text-left mt-6 sm:mt-8 md:mt-0   /* Reduced top margin on mobile */
          "
          data-aos="fade-left"
          data-aos-delay="200"
          data-aos-duration="1000"
        >
          <h2
            className="
              font-Hanken font-bold text-black leading-tight mb-4
              text-[clamp(2.5rem,5vw,3.5rem)]
            "
          >
            Diabetes and{" "}
            <span className="bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-700 bg-clip-text text-transparent">
              wellbeing at work
            </span>
          </h2>

          <p
            className="
              text-sm sm:text-base md:text-lg 
              mb-6 sm:mb-8 max-w-lg 
              leading-relaxed font-Hanken text-gray-700
            "
          >
            If you have had a severe allergic reaction (anaphylaxis) or an
            immediate allergic reaction to any ingredient in the vaccine you are
            scheduled to receive, you should not get that vaccine.
          </p>

          {/* === Key Points === */}
          <div className="space-y-3 sm:space-y-5 mt-3 sm:mt-6">
            {texts.map((text, index) => (
              <div
                key={index}
                className="
                  flex items-center gap-3 sm:gap-4 
                  bg-white rounded-2xl 
                  p-3 sm:p-4 md:p-5 
                  shadow-sm transition-all duration-500 
                  hover:-translate-y-1
                "
                data-aos="fade-up"
                data-aos-delay={`${300 + index * 100}`}
              >
                <div className=" text-primary font-bold rounded-full w-8 h-8 sm:w-9 sm:h-9 md:w-9 md:h-9 flex items-center justify-center">
                  <CircleCheckBig className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <p className="font-Hanken text-sm sm:text-base md:text-lg text-gray-800">
                  {text}
                </p>
              </div>
            ))}
          </div>

          {/* === CTA Button === */}
          <div className="mt-8 sm:mt-10 flex justify-start text-sm md:text-[10px] lg:text-[16px]">
            <HeroButton text="Is your workplace Diabetic Friendly?" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItsWork;
