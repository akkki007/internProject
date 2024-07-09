import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  const [greet, setGreet] = useState("");
  const [arrow, setArrow] = useState(false);
  useEffect(() => {
    const date = new Date();
    let hrs = date.getHours();
    if (hrs >= 6 && hrs < 12) {
      setGreet("Good Morning");
    } else if (hrs >= 12 && hrs < 18) {
      setGreet("Good Afternoon");
    } else if (hrs >= 18 && hrs < 20) {
      setGreet("Good Evening");
    } else if (hrs >= 20 && hrs <= 23) {
      setGreet("Good Night");
    } else {
      setGreet("Hello");
    }
  }, []);
  return (
    <>
      <div className="flex gap-16 text-center">
        <div className="my-3 flex flex-col h-fit mx-7 items-center">
          <h1 className="text-white text-4xl font-bold my-36 mx-20">
            {greet}.. <br /> I am{" "}
            <span className="text-yellow-300 h-fit leading-none text-5xl">
              Akshay Nazare
            </span>
          </h1>
          <p className="-my-32 mx-20 text-white text-2xl">
            This website will guide you through all my internship projects{" "}
            <br />
            That i coded within a month and a half
          </p>
        <Link to='/projects'><button
            onMouseOver={() => {
              setArrow(true);
            }}
            onMouseOut={()=>{
              setArrow(false)
            }}
            className="text-white font-semibold rounded-lg my-40 text-lg border border-yellow-500 max-w-fit px-5 py-3 hover:scale-110 hover:px-8 hover:transition-all overflow-hidden hover:bg-yellow-500 hover:text-black"
          >
            Projects
            <span
              style={arrow ? {visibility:"visible",color:"black",marginLeft:"7px"}:{display:"none"}}
            >→</span>
          </button></Link>
        </div>
        <div className="h-fit w-fit my-20 -mx-16">
          <img src="/hero.jpg" alt="hero" className="h-96 rounded-xl" />
        </div>
      </div>
      
    </>
  );
};

export default LandingPage;
