import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

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
    "Have a trained first aider and the necessary supplies to treat a diabetes-related emergency.",
    "Foster an inclusive environment free from fear and diabetes-related stigma.",
    "Offer flexible working arrangements (e.g., part-time or remote work).",
    "Offer mental well-being support to employees.",
    "Make healthy food and snacks available in the workplace.",
    "Encourage physical activity through programs and incentives.",
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
      id="about"
      className="w-full bg-gradient-to-b from-blue-50 to-blue-100 py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-10 flex justify-center"
    >
      <div className="max-w-[1200px] w-full flex flex-col items-center text-center space-y-10 sm:space-y-12">
        {/* Heading */}
        <h1
          data-aos="fade-up"
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-800 leading-tight"
        >
          Spread the Word About{" "}
          <span className="text-blue-600">Diabetes in November</span>
        </h1>

        {/* Subheading */}
        <p
          data-aos="fade-up"
          data-aos-delay="150"
          className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl leading-relaxed"
        >
          November is <strong>Diabetes Awareness Month</strong>. Help raise
          awareness about the physical and mental challenges of diabetes.
          Together, let’s create healthier, more compassionate workplaces —
          because awareness can save lives.
        </p>

        {/* Section Title */}
        <h2
          data-aos="fade-up"
          data-aos-delay="250"
          className="text-2xl sm:text-3xl md:text-4xl font-semibold text-blue-800 mt-4"
        >
          10 Ways to Do More for Diabetes at Work
        </h2>

        {/* Two Column Layout */}
        <div className="mt-10 w-full">
          <div className="border border-blue-100 shadow-xl rounded-3xl p-6 sm:p-8 md:p-10 grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 md:gap-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
            {facts.map((fact, index) => (
              <div
                key={index}
                data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                data-aos-delay={100 + index * 100}
                className="flex items-start sm:items-center gap-4 sm:gap-5 bg-white rounded-2xl p-4 sm:p-5 shadow-sm transition-all duration-300 hover:shadow-md"
              >
                <div
                  className="font-bold rounded-full w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center text-lg sm:text-xl shadow-md shrink-0"
                  style={{
                    backgroundColor: colorVars[index % colorVars.length],
                    color: "var(--color-secondary)",
                  }}
                >
                  {index + 1}
                </div>
                <p className="text-gray-700 text-base sm:text-lg font-medium leading-relaxed text-left">
                  {fact}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Call-to-Action Button */}
        <div data-aos="fade-up" data-aos-delay="700" className="mt-12 sm:mt-16">
          <button className="bg-primary hover:bg-blue-700 text-white font-semibold text-base sm:text-lg px-8 sm:px-10 py-3 sm:py-4 rounded-full shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 focus:ring-4 focus:ring-blue-300">
            Join the Movement
          </button>
        </div>
      </div>
    </section>
  );
}
