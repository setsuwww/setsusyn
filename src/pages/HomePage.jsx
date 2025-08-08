import { Link } from 'react-scroll';

const mainPage = {
  heading: "I'm Rifqi Ibrahim",
  paragraf:
    "Welcome to My Portfolio. I'm Rifqi Ibrahim, a Junior Frontend Developer specializing in JavaScript, crafting seamless and innovative digital experiences.",
};

const HomePage = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-t from-sky-500 via-sky-100 to-white relative overflow-hidden px-4">

      <main className="relative z-10 text-center py-12 sm:py-16 md:py-20 max-w-3xl w-full">
        <span className="inline-block bg-white border border-gray-200 px-4 py-1 font-semibold text-sky-600 rounded-full text-sm sm:text-base">
          Hello Everyone
        </span>

        <h1 className="DCScript text-3xl sm:text-4xl md:text-6xl font-extrabold text-sky-800 my-6 leading-tight"
          data-aos="fade-down"
        >
          {mainPage.heading}
        </h1>

        <p className="text-base sm:text-lg text-gray-600 font-normal mb-10 px-2 sm:px-4 md:px-0"
          data-aos="fade-up"
        >
          {mainPage.paragraf}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4"
          data-aos="zoom-in"
        >
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="px-8 py-3 bg-white text-sky-900 font-semibold rounded-lg shadow-lg hover:bg-sky-500 hover:text-white transition cursor-pointer w-full sm:w-auto text-center"
          >
            Explore My Work
          </Link>

          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="px-8 py-3 bg-sky-500 text-white font-semibold rounded-lg hover:bg-white hover:text-sky-900 transition cursor-pointer w-full sm:w-auto text-center"
          >
            Get in Touch
          </Link>
        </div>
      </main>
    </section>
  );
};

export default HomePage;
