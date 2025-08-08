import React, { useEffect } from "react";
import 'aos/dist/aos.css';
import AOS from 'aos';

const isiBuatSkill = [
  {
    id: 1,
    judul: "Creative Design",
    paragrap: "Expert in creating many themes visually appealing and functional designs with Frontend Framework",
    sumberGambar: "/watercolor.gif",
  },
  {
    id: 2,
    judul: "Innovative Thinking",
    paragrap: "Always striving for creative User Experience, Problem Solving from User and efficient solutions.",
    sumberGambar: "/creative.gif",
  },
  {
    id: 3,
    judul: "Coding",
    paragrap: "I have Experience Studying too Many Programming Language, like Javascript, Typescript, PHP, & Python",
    sumberGambar: "/php.gif",
  },
];

const SkillBasic = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="bg-transparent py-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6" data-aos="fade-left">
        {isiBuatSkill.map((skill) => (
          <div key={skill.id} className="border-2 border-sky-200 border-dashed p-6 rounded-xl text-center bg-white shadow-lg"
            
          >
            <img src={skill.sumberGambar} alt={skill.judul} className="w-16 h-16 mx-auto mb-4 c-animate" load="lazy"/>
            <h3 className="text-lg md:text-xl text-sky-900 font-semibold mb-2">{skill.judul}</h3>
            <p className="text-xs md:text-sm text-sky-600 tracking-wide font-medium">{skill.paragrap}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillBasic;
