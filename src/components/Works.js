import React from "react";

const Works = () => {
  return (
    <section className="py-12 h-screen flex items-center" id="works">
      <div className="container mx-auto">
        <h2 className="text-2xl font-medium text-center">Work</h2>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full lg:w-1/3 px-4 mb-8">
            <div className="bg-white rounded-lg overflow-hidden">
              <img src="./img.png" alt="Project 1" className="w-full" />
              <div className="px-6 py-4">
                <h3 className="text-xl font-medium">Project 1</h3>
                <p className="text-gray-600">
                  A brief description of the project.
                </p>
                <div className="flex items-center mt-4">
                  <a
                    href="#"
                    className="px-4 py-2 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600"
                  >
                    View
                  </a>
                  <a
                    href="#"
                    className="px-4 py-2 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 ml-4"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/3 px-4 mb-8">
            <div className="bg-white rounded-lg overflow-hidden">
              <img src="./img.png" alt="Project 1" className="w-full" />
              <div className="px-6 py-4">
                <h3 className="text-xl font-medium">Project 2</h3>
                <p className="text-gray-600">
                  A brief description of the project.
                </p>
                <div className="flex items-center mt-4">
                  <a
                    href="#"
                    className="px-4 py-2 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600"
                  >
                    View
                  </a>
                  <a
                    href="#"
                    className="px-4 py-2 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 ml-4"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/3 px-4 mb-8">
            <div className="bg-white rounded-lg overflow-hidden">
              <img src="./img.png" alt="Project 1" className="w-full" />
              <div className="px-6 py-4">
                <h3 className="text-xl font-medium">Project 3</h3>
                <p className="text-gray-600">
                  A brief description of the project.
                </p>
                <div className="flex items-center mt-4">
                  <a
                    href="#"
                    className="px-4 py-2 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600"
                  >
                    View
                  </a>
                  <a
                    href="#"
                    className="px-4 py-2 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 ml-4"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;
