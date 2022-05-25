import React, { useEffect, useState } from "react";
import WorkImg from "../assets/workImg.jpeg";
// import realEstate from "../assets/realestate.jpg";

const Work = () => {
  const [repoList, setRepoList] = useState([]);

  useEffect(() => {

      fetch("https://api.github.com/users/agustinsavoy1/repos")
      .then((response) => response.json())
      .then(
        (data) => {
          console.log(data);
          
          setRepoList(data)
        },
        (error) => {
          console.log(error);
        }
      );

      console.log()
  }, []);

  
  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Work
          </p>
          <p className="py-6">// Check out some of my recent work</p>
        </div>
        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Grid Item */}
              {repoList.slice(0,6).map((repo) => {
                return (
                <div key={repo.id}
                style={{ backgroundImage: `url(${WorkImg})` }}
                className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
              >
                {/* Hover Effects */}
                <div className="opacity-0 group-hover:opacity-100">
                  <span className="text-2xl font-bold text-white tracking-wider text-justify">
                    {repo.name}
                  </span>
                  <div className="pt-8 text-center"> 
                    <a target="_blank" href={`https://${repo.name}.herokuapp.com`} rel="noreferrer">
                      <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                        Demo
                      </button>
                    </a>
                    <a target='_blank' rel="noreferrer" href={repo.html_url}>
                      <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                        Code
                      </button>
                    </a>
                  </div>
                </div>
              </div>)})}
        </div>
      </div>
    </div>
  );
};

export default Work;
