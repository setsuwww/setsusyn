import React from "react";
import Judul from "../components/TittlePage";
import '../style/App.css'

const skills = [
  {
    deskripsi: "Basic Markup Language for web development, and Web Structure layout",
    judul: "HTML",
    logo: "fab fa-html5",
    warnaText: "text-orange-500",
  },
  {
    deskripsi: "Styling language to provide designing and coloring of the web",
    judul: "CSS",
    logo: "fab fa-css3-alt",
    warnaText: "text-blue-500",
  },
  {
    deskripsi: "The language used to make the web interactive and dynamic",
    judul: "JavaScript",
    logo: "fab fa-js",
    warnaText: "text-yellow-500",
  },
  {
    deskripsi: "Server side language used to interact with databases",
    judul: "PHP",
    logo: "fab fa-php",
    warnaText: "text-purple-600",
  },
  {
    deskripsi: "Reliable Javascript library because it supports reusable code",
    judul: "React",
    logo: "fab fa-react",
    warnaText: "text-sky-500",
  },
  {
    deskripsi: "Overpowering PHP Framework with MVC Structure ",
    judul: "Laravel",
    logo: "https://logospng.org/download/laravel/logo-laravel-icon-1024.png",
    warnaText: "text-red-500",
  },  
];

const SkillCard = ({ judul, deskripsi, logo, warnaText, link }) => (
  <div target="_blank" rel="noopener noreferrer" className="no-underline">
    <div className={`flex items-center p-4 border-2 border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-transform transform hover:scale-105 duration-200 radial-effect${warnaText}`}
      data-aos="fade-up" data-aos-delay={300}>

      {logo.startsWith("http") ? (
        <img src={logo} alt={judul} className="w-10 h-10 mr-4" data-aos="zoom-in" data-aos-delay={300} />
      ) : (
        <i className={`${logo} text-4xl mr-4 ${warnaText}`} data-aos="zoom-in" data-aos-delay={300} />
      )}

      <div>
        <h3 className={`${warnaText} font-bold text-lg`} data-aos="fade-right" data-aos-delay={300} >{judul}</h3>
        <p className="text-gray-600">{deskripsi}</p>
      </div>
    </div>
</div>
);

const App = () => {
  return (
    <>
      <Judul judul='My Skills' keterangan='The list of skills below consists of languages or frameworks that I have learned, but I am not an expert in.'/>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-14 py-6">

        {skills.map((skill, index) => (
          <SkillCard
            key={index}
            judul={skill.judul}
            deskripsi={skill.deskripsi}
            logo={skill.logo}
            warnaText={skill.warnaText}
          />
        ))}

      </div>
    </>
  );
};

export default App;
