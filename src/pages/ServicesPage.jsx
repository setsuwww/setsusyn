import React, { useState } from "react";
import Judul from "../components/TittlePage";

const labelColors = {
  HTML: "bg-orange-100 text-orange-900 my-2",
  CSS: "bg-blue-100 text-blue-900 my-2",
  PHP: "bg-violet-100 text-purple-900 my-2",
  JavaScript: "bg-yellow-100 text-yellow-900 my-2",
  TypeScript: "bg-blue-100 text-blue-900 my-2",
  React: "bg-cyan-100 text-cyan-900 my-2",
  Angular: "bg-red-100 text-red-900 my-2",
  Vue: "bg-green-100 text-green-900 my-2",
  Tailwind: "bg-teal-100 text-teal-900 my-2",
  MySQL: "bg-purple-100 text-purple-900 my-2",
  Vite: "bg-violet-100 text-violet-900 my-2",
};

const ServicePage = () => {
  const [posisiGambarSekarang, setposisiGambarSekarang] = useState(null);

  const cards = [
    {
      id: 1,
      image: "/Ramen.png",
      judulproyek: "Ramen Delight",
      paragraf: "This Website was made by PHP and Tailwind and used for Presenting Ramen",
      useWith: ["HTML", "CSS", "PHP", "Tailwind", "MySQL"],
    },
    {
      id: 2,
      image: "/RH.png",
      judulproyek: "Rinafa Homestay",
      paragraf: "This Company Profile about Rinafa Homestay made by Typescript and Tailwind",
      useWith: ["JavaScript", "React", "Tailwind", "MySQL"],
    },
    {
      id: 3,
      image: "Tourvue.png",
      judulproyek: "VueTour",
      paragraf: "This is a Website used for Destination information and made by Vue",
      useWith: ["JavaScript", "Vue", "Tailwind", "MySQL"],
    },
  ];

  const bukaPopup = (index) => {
    setposisiGambarSekarang(index);
  };

  const tutupPopup = () => {
    setposisiGambarSekarang(null);
  };

  const panahSelanjutnya = () => {
    setposisiGambarSekarang((indexSebelumnya) => (indexSebelumnya > 0 ? indexSebelumnya - 1 : cards.length - 1));
  };

  const panahSebelumnya = () => {
    setposisiGambarSekarang((indexSebelumnya) => (indexSebelumnya < cards.length - 1 ? indexSebelumnya + 1 : 0));
  };

  return (
    <div className="min-h-screen p-6" data-aos="zoom-in" data-aos-delay="200">
      <Judul judul="My Portfolio" keterangan="Explore the modern solutions my offer, designed with innovation and style." />

      <div className="flex items-center justify-center mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <div key={card.id} data-aos="fade-right" data-aos-delay={index * 200} className="bg-white rounded-lg shadow-lg w-full max-w-sm overflow-hidden">
              <img src={card.image} alt={`Card ${card.id}`} className="w-full h-50 object-cover cursor-pointer"
                onClick={() => bukaPopup(index)}
              />
              <div className="p-4">

                <div className="flex items-center justify-between">
                  <h1 className="mb-2 text-sky-900 text-xl font-semibold tracking-wide">
                    {card.judulproyek}
                  </h1>
                  <div className="flex space-x-1 mb-2">
                    {Array.from({ length: 5 }).map((_, starIndex) => (
                      <svg key={starIndex}
                        className={`w-4 h-4 text-amber-200 hover:text-amber-500 duration-300 animate-zoomInStar animate__delay-${starIndex * 900}`}
                        xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M12 .587l3.668 7.431 8.221 1.193-5.937 5.792 1.398 8.139-7.35-3.85-7.35 3.85 1.398-8.139-5.937-5.792 8.221-1.193z" />
                      </svg>
                    ))}
                  </div>
                </div>

                <hr className="border-b border-gray-400 my-2 rounded-lg" />
                <p className="text-gray-400 font-medium tracking-wide text-sm">{card.paragraf}</p>

                <div className="flex flex-wrap gap-x-2 gap-y-0 mt-4">
                  {card.useWith.map((tech) => (
                    <span key={tech}
                      className={`px-2 py-1 rounded-lg text-sm tracking-wide font-medium ${labelColors[tech] || "bg-gray-300 text-gray-800"}`}>
                      {tech}
                    </span>
                  ))}
                </div>

              </div>

            </div>
          ))}
        </div>
      </div>

      {posisiGambarSekarang !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative bg-sky-50 rounded-lg p-4">
            <button onClick={tutupPopup}
              className="absolute top-2 right-2 bg-red-300 text-white px-2 py-1 rounded-full hover:bg-red-500">
              ✕
            </button>

            <img src={cards[posisiGambarSekarang].image} alt={`Popup Image ${posisiGambarSekarang}`}
              className="max-w-full max-h-[80vh] object-contain"
            />

            <div className="flex justify-between mt-4">
              <button
                className="bg-red-200 text-red-900 hover:bg-red-300 px-6 py-2 font-semibold tracking-widest rounded c-animate"
                onClick={panahSelanjutnya}>
                Back
              </button>
              <button
                className="bg-sky-200 text-sky-900 hover:bg-sky-300 px-6 py-2 font-semibold tracking-widest rounded c-animate"
                onClick={panahSebelumnya}>
                Next
              </button>
            </div>

          </div>
        </div>
      )}
    </div>
  );
};

export default ServicePage;
