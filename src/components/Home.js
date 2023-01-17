import React from "react";

const Home = () => {
  return (
    <section className="bg-gray-300 py-32 h-screen" id="home">
      <div className="container mx-auto flex items-center justify-center h-full">
        <div className="text-center">
          <h1 className="text-md font-medium">Hi, my name is</h1>
          <h2 className="text-5xl font-medium">Ahmaddin</h2>
          <p className="text-xl font-medium mb-4">
            I&apos;m a Full Stack Developer.
          </p>
          <div className="flex justify-center">
            <a
              href="#works"
              className="px-4 py-2 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600"
            >
              View Work
            </a>
            <a
              href="#contact"
              className="px-4 py-2 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 ml-4"
            >
              Hire Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
