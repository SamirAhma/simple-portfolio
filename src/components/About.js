import React from "react";

const About = () => {
  return (
    <section
      className="bg-gray-300 py-12 h-screen flex items-center"
      id="about"
    >
      <div className="container mx-auto flex items-center flex-col">
        <h2 className="text-2xl font-medium text-center mb-4">About</h2>
        <div className="mx-4">
          <p>
            A brief introduction about yourself, your background, experience,
            and what you do.
          </p>
          <p>
            Provide information about your education, certifications, and
            relevant skills.
          </p>
          <p>
            Talk about your interests and any achievements or recognition you
            have received for your work.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
