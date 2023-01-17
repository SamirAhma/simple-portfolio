import React from "react";

const Skills = () => {
  return (
    <section id="skills" className="py-12 h-screen flex items-center">
      <div className="container mx-auto">
        <h2 className="text-3xl font-medium mb-4">Skills</h2>
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-gray-200 p-4 rounded-lg">
            <h3 className="text-lg font-medium">ReactJS</h3>
          </div>
          <div className="bg-gray-200 p-4 rounded-lg">
            <h3 className="text-lg font-medium">Tailwind</h3>
          </div>
          <div className="bg-gray-200 p-4 rounded-lg">
            <h3 className="text-lg font-medium">Gatsby</h3>
          </div>
          <div className="bg-gray-200 p-4 rounded-lg">
            <h3 className="text-lg font-medium">MongoDB</h3>
          </div>
          <div className="bg-gray-200 p-4 rounded-lg">
            <h3 className="text-lg font-medium">Node.js</h3>
          </div>
          <div className="bg-gray-200 p-4 rounded-lg">
            <h3 className="text-lg font-medium">Django</h3>
          </div>
          <div className="bg-gray-200 p-4 rounded-lg">
            <h3 className="text-lg font-medium">MySQL</h3>
          </div>
          <div className="bg-gray-200 p-4 rounded-lg">
            <h3 className="text-lg font-medium">AngularJS</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
