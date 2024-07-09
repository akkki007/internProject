import React from "react";

const Inseed = () => {
  return (
    <div>
      <h1 className="text-4xl text-white font-bold text-center">
      Inseed - A university ERP system
      </h1>{" "}
      <br />
      <img src="/1 (1).png" alt="" className="rounded-md w-[90vh] mx-[29vw]" />
      <div className="flex justify-center">
        <div>
          <div
            style={{ backgroundImage: `url("/concept.jpg")` }}
            className="w-fit h-fit p-10 m-10 bg-zinc-800 text-white rounded-xl"
          >
            <ul className="mx-5 list-disc">
              <span className="text-lg font-bold text-black">
                {" "}
                Concepts and languages used
              </span>
              <li className="flex bg-zinc-900 p-3 rounded-md my-2">
                {" "}
                React <img src="/vite.svg" className="w-7 mx-2" />
              </li>
              <li className="flex bg-zinc-900 p-3 rounded-md my-3">
                {" "}
                Node js <img src="/nodejs.svg" className="w-7 mx-2" />
              </li>
              <li className="flex bg-zinc-900 p-3 rounded-md my-3">
                {" "}
                Mongodb <img src="/mongodb.svg" className="w-7 mx-2" />
              </li>
            </ul>
          </div>
          <div className="w-96 h-fit p-10 m-10 bg-zinc-800 rounded-xl">
            <div className="flex justify-center bg-sky-400 rounded-md">
              <h1 className="text-2xl text-center font-bold text-white p-3">
                Functionality{" "}
              </h1>{" "}
              <h1 className="my-2">
                <img src="/setting.png" className="w-10" />
              </h1>
            </div>
            <br />
            <p className="text-lg text-white">
              1.{" "}
              <span className="font-bold text-xl text-sky-400">
                Login Authentication
              </span>
              : Users can log in to the system using their credentials, ensuring
              secure access to the ERP system. <br />
              2.{" "}
              <span className="font-bold text-xl text-sky-400">
                Registration
              </span>
              : New users can register for an account, providing necessary
              details to create a profile within the ERP system. <br />
              3.{" "}
              <span className="font-bold text-xl text-sky-400">
                Frontend and Backend Integration
              </span>
              : The system includes seamless integration between the frontend
              and backend, ensuring efficient communication and data flow.{" "}
              <br />
              4.{" "}
              <span className="font-bold text-xl text-sky-400">
                Node.js Backend
              </span>
              : The backend is developed using Node.js, providing a robust and
              scalable server-side environment. <br />
              5.{" "}
              <span className="font-bold text-xl text-sky-400">
                MongoDB Database
              </span>
              : The system utilizes MongoDB for data storage, offering
              flexibility and performance for handling large datasets. <br />
              <br />
              The project is currently 40% complete, with basic functionalities
              such as login authentication and registration already implemented.
            </p>
          </div>
        </div>
        <div className="my-10 w-[700px] text-white">
          <h1 className="text-center uppercase text-4xl font-bold">
            Project Description
          </h1>
          <p>
          <span className="text-3xl"> Inseed </span> is a comprehensive university website designed to provide
            students, alumni, and faculty with easy access to essential
            resources and information. The project is currently 40% complete and
            integrates an ERP system to enhance its functionalities. <br />
            <span className="text-sky-400 text-lg font-semibold">
              {" "}
              Key sections of the website include
            </span>{" "}
            : <br /> <span className="text-yellow-400 font-semibold text-lg"> Home</span> : The home page provides a welcoming interface with
            the latest news, updates, and links to important sections of the
            website. <br /> 
            <span className="text-yellow-400 font-semibold text-lg"> Alumni Community</span> : The alumni community section connects former students, facilitating
            networking and engagement through events, news, and discussion
            forums. <br />
            <span className="text-yellow-400 font-semibold text-lg"> About Us</span> : This section provides insights into the
            university’s administration, faculty, and staff, showcasing their
            expertise and contributions to the institution. <br />
            <span className="text-yellow-400 font-semibold text-lg">Login and Registration System </span> : A secure login and registration system allows
            students and faculty to access personalized information and
            services. This system is integrated with the ERP backend for
            efficient user management. <br /><span className="text-yellow-400 font-semibold text-lg"> Courses</span> : The courses section provides
            detailed information about the academic programs offered by the
            university, including course descriptions, schedules, and enrollment
            options. <br /> The website is developed using modern web technologies,
            with frontend and backend integration using Node.js and MongoDB to
            ensure a seamless and responsive user experience. <br /> <span className="underline text-2xl underline-offset-2"> Stay tuned for
            further updates as we continue to enhance and expand the
            functionalities of the Inseed university website ! </span>
          </p>
          <h1 className="text-center my-10 font-bold text-2xl">
            Use the App here !
          </h1>
          <a href="https://github.com/dashboard">
          <h1 className="flex bg-zinc-700 w-fit px-5 py-3 mx-72 rounded-lg">
            Github
            <img src="/github.svg" className="w-10 -my-2 mx-2"/>
          </h1>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Inseed;
