import React, { useEffect } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    AOS.init();
  });
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p data-aos="fade-up" className="text-pink-600">
          Hi, my name is
        </p>
        <h1
          data-aos="fade-down"
          className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]"
        >
          Juan Agustin Savoy
        </h1>
        <h2
          data-aos="fade-down"
          className="text-4xl sm:text-7xl font-bold text-[#8892b0]"
        >
          I'm a Full Stack Developer.
        </h2>
        <p data-aos="fade-down" className="text-[#8892b0] py-4 max-w-[700px]">
          I’m a FullStack Developer, Computer Software Engineering specializing
          in building (and occasionally designing) exceptional digital
          experiences. Currently, I’m focused on building responsive web
          applications.
        </p>
        <div>
          <Link to="work" smooth={true} duration={500}>
            <button
              data-aos="fade-down"
              className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600"
            >
              View Work
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3 " />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
