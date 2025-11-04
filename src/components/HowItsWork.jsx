import { CircleCheckBig } from 'lucide-react';

const HowItsWork = () => {
  return (
    <section
      id="howitswork"
      className="py-30  bg-linear-to-r from-white to-blue-100 min-h-screen w-full"
    >
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center gap-12 pt-20 px-4 md:px-0">
        {/* Left: Image */}
        <div
          className="flex-1 flex justify-center"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <img
            src="/howitsworkImage.png"
            alt="How DiaCare Works"
            className="rounded-2xl  w-full max-w-md hover:scale-105 transition-transform duration-700"
          />
        </div>

        {/* Right: Content */}
        <div
          className="flex-1 text-center md:text-left"
          data-aos="fade-left"
          data-aos-delay="200"
          data-aos-duration="1000"
        >
          <h2 className="text-4xl md:text-6xl font-bold font-Hanken text-primary mb-10 max-w-4xl">
            Diabetes and wellbeing at work
          </h2>
          



          {/* Steps */}
          <div className="space-y-10 mt-6">
            <div className="flex items-start gap-3" data-aos="fade-up" data-aos-delay="300">
              <div className="bg-green-300 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center"><CircleCheckBig /></div>
              <p className="font-Hanken text-xl">7 in 10 people living with diabetes are of working age.</p>
            </div>

            <div className="flex items-start gap-3" data-aos="fade-up" data-aos-delay="400">
             <div className="bg-green-300 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center"><CircleCheckBig /></div>
              <p className="font-Hanken text-xl">3 in 4 people living with diabetes have depression</p>
            </div>

            <div className="flex items-start gap-3" data-aos="fade-up" data-aos-delay="500">
              <div className="bg-green-300 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center"><CircleCheckBig /></div>
              <p className="font-Hanken text-xl">4 in 5 people living with diabetes experienced burnout.</p>
            </div>
          </div>

          {/* Button */}
          <a
            href="#gallery"
            className="inline-block mt-8 bg-primary hover:bg-accent text-white text:[18px] lg:text-xl px-10 py-4 lg:px-[30px] lg:py-4 rounded-[30px] font-semibold shadow-lg transition-all duration-400"
            data-aos="zoom-in"
            data-aos-delay="600"
          >
           Is your workplace Diabetic Friendly? 
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItsWork;
