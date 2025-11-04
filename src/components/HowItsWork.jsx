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
      className="py-20 sm:py-28 bg-gradient-to-r from-white to-blue-100 min-h-screen w-full"
    >
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-12 px-5 md:px-8 lg:px-0">
        {/* === Left: Image === */}
        <div
          className="flex-1 flex justify-center"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <img
            src="/howitsworkImage.png"
            alt="How DiaCare Works"
            className="rounded-2xl w-full max-w-sm sm:max-w-md hover:scale-105 transition-transform duration-700 "
          />
        </div>

        {/* === Right: Text Content === */}
        <div
          className="flex-1 text-center md:text-left mt-8 md:mt-0"
          data-aos="fade-left"
          data-aos-delay="200"
          data-aos-duration="1000"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-Hanken text-black leading-tight mb-4">
            Diabetes and{" "}
            <span className="bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-700 bg-clip-text text-transparent">
              wellbeing at work
            </span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed font-Hanken text-gray-700">
            If you have had a severe allergic reaction (anaphylaxis) or an
            immediate allergic reaction to any ingredient in the vaccine you are
            scheduled to receive, you should not get that vaccine.
          </p>

          {/* === Key Points === */}
          <div className="space-y-5 sm:space-y-6 mt-4 sm:mt-6">
            {texts.map((text, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5 bg-white rounded-2xl p-4 sm:p-5 shadow-sm transition-all duration-500 hover:-translate-y-1"
                data-aos="fade-up"
                data-aos-delay={`${300 + index * 100}`}
              >
                <div className="bg-primary text-white font-bold rounded-full w-9 h-9 flex items-center justify-center mx-auto sm:mx-0">
                  <CircleCheckBig className="w-5 h-5" />
                </div>
                <p className="font-Hanken text-base sm:text-lg md:text-xl text-gray-800 text-center sm:text-left">
                  {text}
                </p>
              </div>
            ))}
          </div>

          {/* === CTA Button === */}
          <div className="mt-10 flex justify-center md:justify-start text-sm md:text-[16px]">
            <HeroButton text="Is your workplace Diabetic Friendly?" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItsWork;
