import React from "react";

const ContactUs = () => {
  return (
    <section
      id="contact"
      className="py-12 h-screen flex items-center justify-center"
    >
      <div className="container mx-auto  flex  justify-center flex-col items-center">
        <h2 className="text-3xl font-medium mb-4">Contact Us</h2>
        <form name="contact" method="POST" data-netlify="true">
          <div className="mb-4">
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="bg-gray-200 p-2 rounded-lg"
              type="text"
              name="name"
              id="name"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="bg-gray-200 p-2 rounded-lg"
              type="email"
              name="email"
              id="email"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              className="bg-gray-200 p-2 rounded-lg"
              name="message"
              id="message"
              rows={8}
              cols={22}
              required
              defaultValue={""}
            />
          </div>
          <div className="text-center">
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
              type="submit"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
