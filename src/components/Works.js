import React from "react";

const Works = () => {
  return (
    <section className="py-20 flex items-center" id="works">
      <div className="container mx-auto">
        <h2 className="text-2xl font-medium text-center mb-4">Work</h2>
        <div className="flex flex-wrap sm:flex-no-wrap lg:flex-wrap">
          <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <img
                src="./img.png"
                class="w-full h-64 object-cover rounded-lg mb-4 sm:h-48 lg:h-64"
              />
              <h3 className="text-lg font-medium mb-2">Work Title</h3>
              <p className="text-gray-700 mb-4">
                Some brief description about the work.
              </p>
              <div className="flex justify-between">
                <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg">
                  View
                </button>
                <button className="bg-gray-300 hover:bg-gray-400 text-gray-700 py-2 px-4 rounded-lg">
                  Edit
                </button>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <img
                src="./img.png"
                class="w-full h-64 object-cover rounded-lg mb-4 sm:h-48 lg:h-64"
              />
              <h3 className="text-lg font-medium mb-2">Work Title</h3>
              <p className="text-gray-700 mb-4">
                Some brief description about the work.
              </p>
              <div className="flex justify-between">
                <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg">
                  View
                </button>
                <button className="bg-gray-300 hover:bg-gray-400 text-gray-700 py-2 px-4 rounded-lg">
                  Edit
                </button>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <img
                src="./img.png"
                class="w-full h-64 object-cover rounded-lg mb-4 sm:h-48 lg:h-64"
              />
              <h3 className="text-lg font-medium mb-2">Work Title</h3>
              <p className="text-gray-700 mb-4">
                Some brief description about the work.
              </p>
              <div className="flex justify-between">
                <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg">
                  View
                </button>
                <button className="bg-gray-300 hover:bg-gray-400 text-gray-700 py-2 px-4 rounded-lg">
                  Edit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;
