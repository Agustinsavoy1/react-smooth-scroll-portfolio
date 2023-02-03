import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import WorkImg from "../assets/workImg.jpeg";
// import realEstate from "../assets/realestate.jpg";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

const Work = () => {
  const [repoList, setRepoList] = useState([]);

  console.log(repoList);

  const slides = [
    {
      url: "https://api.pikwy.com/web/63dbd847e126aa6bbc5f180c.jpg",
    },
    {
      url: "https://api.pikwy.com/web/63dbd8ee4ee75628eb639e3b.jpg",
    },
    {
      url: "https://api.pikwy.com/web/63dbd94669772a24d27e249a.jpg",
    },

    // {
    //   url: "https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2253&q=80",
    // },
    // {
    //   url: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80",
    // },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    AOS.init();
    fetch("https://api.github.com/users/agustinsavoy1/repos")
      .then((response) => response.json())
      .then(
        (data) => {
          console.log(data);

          setRepoList(data);
        },
        (error) => {
          console.log(error);
        }
      );

    console.log();
  }, []);

  return (
    <>
      <div
        name="work"
        className="w-full md:h-screen text-gray-300 bg-[#0a192f] py-10"
      >
        <div className="max-w-[1000px] mx-auto flex flex-col justify-center w-full h-full">
          <div className="mt-10">
            <p
              data-aos="fade-up"
              className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600"
            >
              Work
            </p>
            <p data-aos="fade-up" className="py-6">
              // Check out some of my recent work
            </p>
          </div>

          <div
            data-aos="fade-up"
            className="max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group"
          >
            <div
              style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
              className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
            ></div>
            {/* Left Arrow */}
            <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
              <BsChevronCompactLeft onClick={prevSlide} size={30} />
            </div>
            {/* Right Arrow */}
            <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
              <BsChevronCompactRight onClick={nextSlide} size={30} />
            </div>
            <div className="flex top-4 justify-center py-2">
              {
                // repoList.slice(0, 6).map((s) => (
                //   <div
                //     key={s.id}
                //     onClick={() => goToSlide(s.id)}
                //     className="text-2xl cursor-pointer"
                //   >
                //     <RxDotFilled />
                //   </div>
                // ))
                slides.map((slide, slideIndex) => (
                  <div
                    key={slideIndex}
                    onClick={() => goToSlide(slideIndex)}
                    className="text-2xl cursor-pointer"
                  >
                    <RxDotFilled />
                  </div>
                ))
              }
            </div>
          </div>

          {/* <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          
            {repoList.slice(0, 6).map((repo) => {
              return (
                <div
                  key={repo.id}
                  style={{ backgroundImage: `url(${WorkImg})` }}
                  className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
                >
                 
                  <div className="opacity-0 group-hover:opacity-100">
                    <span className="text-2xl font-bold text-white tracking-wider text-justify">
                      {repo.name}
                    </span>
                    <div className="pt-8 text-center">
                      <a
                        target="_blank"
                        href={`https://${repo.name}.herokuapp.com`}
                        rel="noreferrer"
                      >
                        <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                          Demo
                        </button>
                      </a>
                      <a target="_blank" rel="noreferrer" href={repo.html_url}>
                        <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                          Code
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Work;
