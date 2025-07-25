import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_gtwc16p",         // ✅ Your Service ID
        "template_kv1mzrv",        // ✅ Your Template ID
        formRef.current,
        "uPmNSNdmwf7uR3yg8"        // ✅ Your Public Key
      )
      .then(
        (result) => {
          console.log("Email sent successfully!", result.text);
          setSuccess(true);
          setLoading(false);
          formRef.current.reset();
        },
        (error) => {
          console.error("Email failed to send:", error.text);
          setSuccess(false);
          setLoading(false);
        }
      );
  };

  return (
    <section id="contact" className="min-h-screen px-6 md:px-20 py-16 bg-white">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-blue-700">
        Contact Me
      </h2>

      <form
        ref={formRef}
        onSubmit={sendEmail}
        className="max-w-xl mx-auto bg-blue-50 p-8 rounded-xl shadow-lg space-y-6"
      >
        <div>
          <label className="block text-gray-700 font-medium mb-2">Name</label>
          <input
            type="text"
            name="name"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">Email</label>
          <input
            type="email"
            name="email"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">Message</label>
          <textarea
            name="message"
            rows="5"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md transition"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>

        {success === true && (
          <p className="text-green-600 text-center font-medium mt-4">
            ✅ Message sent successfully!
          </p>
        )}
        {success === false && (
          <p className="text-red-600 text-center font-medium mt-4">
            ❌ Failed to send message. Please try again later.
          </p>
        )}
      </form>
    </section>
  );
};

export default Contact;
