import React from 'react'
import LandingPage from "../components/LandingPage";
import LanguageCard from "../components/LanguageCard";
import html from "/html.png";
import css from "/css.png"
import reactjs from "/react.png"
import bootstrapcss from "/bootstrapcss.png"
import nodejs from "/node.png"
import tailwind from "/tailwind.png"
import ejs from "/ejs.png"
import java from "/java.jpg"
const Home = () => {
  return (
    <div>
      <LandingPage />
        <div className="border-t-2"></div>
        <div className="bg-zinc-900 min-h-screen w-full absolute">
          <h1 className="text-white mx-[500px] my-10 font-bold w-[40vw] text-4xl">
            Languages I used during Internship
          </h1>
          <div className="flex flex-wrap gap-5 mx-32 pt-5 leading-none">
            <LanguageCard title="HTML" image={html} />
            <LanguageCard title="CSS" image={css} />
            <LanguageCard title="REACT JS" image={reactjs} />
            <LanguageCard title="NODE JS" image={nodejs} />
            <LanguageCard title="JAVA" image={java} />
            <LanguageCard title="TAILWIND CSS" image={tailwind} />
            <LanguageCard title="BOOTSTRAP" image={bootstrapcss} />
            <LanguageCard title="EMBEDDED JS" image={ejs} />
          </div>
         
        </div>
        
    </div>
  )
}

export default Home
