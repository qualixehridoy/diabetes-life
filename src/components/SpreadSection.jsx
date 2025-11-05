import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import HeroButton from "./Button";

export default function SpreadSection() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
      easing: "ease-in-out",
    });
  }, []);

  const facts = [
    "Provide a safe and private space for diabetes management and adequate storage for supplies.",
    "Provide access to food, water, toilet facilities, and breaks for people to attend medical needs.",
    "Foster an inclusive environment free from fear and diabetes-related stigma.",
    "Offer mental well-being support to employees.",
    "Make healthy food and snacks available in the workplace.",
    "Encourage physical activity through programs and incentives.",
    "Have a trained first aider and the necessary supplies to treat a diabetes-related emergency.",
    "Offer flexible working arrangements (e.g., part-time or remote work).",
    "Make information about diabetes available in the workplace.",
    "Organize diabetes screenings.",
  ];

  const colorVars = [
    "var(--color-one)",
    "var(--color-two)",
    "var(--color-three)",
    "var(--color-four)",
  ];

  return (
    <section
      id="spread"
      className="w-full bg-linear-to-l from-blue-50 to-blue-100 py-10 sm:py-24 md:py-28 px-2 sm:px-6 md:px-10 flex justify-center"
    >
      <div className="max-w-[1200px] w-full flex flex-col items-center text-center sm:space-y-12">
        
        {/* === Heading Section === */}
        <div data-aos="fade-up" className="space-y-4">
          <h1 className="text-4xl sm:text-5xl md:text-[60px] font-extrabold font-Hanken leading-tight text-gray-900">
            Spread the word about{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent animate-gradient-x">
              Diabetes
            </span>{" "}
            in November
          </h1>

          <p
            data-aos="fade-up"
            data-aos-delay="150"
            className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed"
          >
            November is <strong>Diabetes Awareness Month</strong> — a time to
            inspire action, understanding, and compassion. Let’s work together
            to make our workplaces healthier and more supportive for everyone.
          </p>
        </div>

        {/* === Section Title === */}
        <h2
          data-aos="fade-up"
          data-aos-delay="250"
          className="text-2xl sm:text-3xl md:text-4xl font-semibold text-blue-800 mt-4 font-Hanken"
        >
          10 Ways to Support Diabetes Awareness at Work
        </h2>

        {/* === Two-Column Facts Layout === */}
        <div
          className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 w-full"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          {/* === Left Column: 1–5 === */}
          <div className="space-y-4">
            {facts.slice(0, 5).map((fact, index) => (
              <div
                key={index}
                data-aos="fade-right"
                data-aos-delay={index * 100}
                className="flex items-center justify-start gap-4 bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition-all duration-500 min-h-[90px] sm:min-h-[100px]"
              >
                <div
                  className="font-bold rounded-full w-10 h-10 flex items-center justify-center text-base shadow-sm shrink-0"
                  style={{
                    backgroundColor: colorVars[index % colorVars.length],
                    color: "var(--color-secondary)",
                  }}
                >
                  {index + 1}
                </div>
                <p className="text-gray-700 text-sm sm:text-base font-medium leading-relaxed text-left">
                  {fact}
                </p>
              </div>
            ))}
          </div>

          {/* === Right Column: 6–10 === */}
          <div className="space-y-4">
            {facts.slice(5).map((fact, index) => (
              <div
                key={index + 5}
                data-aos="fade-left"
                data-aos-delay={index * 100}
                className="flex items-center justify-start gap-4 bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition-all duration-500 min-h-[90px] sm:min-h-[100px]"
              >
                <div
                  className="font-bold rounded-full w-10 h-10 flex items-center justify-center text-base shadow-sm shrink-0"
                  style={{
                    backgroundColor:
                      colorVars[(index + 5) % colorVars.length],
                    color: "var(--color-secondary)",
                  }}
                >
                  {index + 6}
                </div>
                <p className="text-gray-700 text-sm sm:text-base font-medium leading-relaxed text-left">
                  {fact}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* === Call-to-Action Button === */}
        <div data-aos="zoom-in" data-aos-delay="600" className="mt-14">
          <HeroButton text="Join Our Movement" />
        </div>
      </div>
    </section>
  );
}
