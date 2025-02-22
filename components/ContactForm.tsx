"use client";
import React, { useState } from "react";

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface Errors {
  name: string;
  email: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<Errors>({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    const validationErrors = validateForm();
    if (Object.values(validationErrors).some((error) => error !== "")) {
      setErrors(validationErrors);
      return;
    }

    // Prepare the form data for sending
    const sanitizedData = {
      name: escape(formData.name),
      email: escape(formData.email),
      message: escape(formData.message),
    };

    console.log("Form data ready to be sent:", sanitizedData);

    // Here, you can send the data to your backend or API
    // await sendFormData(sanitizedData);
  };

  const validateForm = () => {
    const errors: Errors = { name: "", email: "", message: "" };

    // Name validation (min 3, max 50 characters)
    if (formData.name.length < 3) {
      errors.name = "Name must be at least 3 characters long.";
    } else if (formData.name.length > 50) {
      errors.name = "Name must be less than 50 characters.";
    }

    // Email validation (simple regex)
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(formData.email)) {
      errors.email = "Please enter a valid email address.";
    }

    // Message validation (min 10 characters)
    if (formData.message.length < 10) {
      errors.message = "Message must be at least 10 characters long.";
    }

    return errors;
  };

  return (
    <section className="bg-black text-white py-10 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="border border-gray-700 rounded-lg p-6 bg-[#101010]">
          <p className="text-2xl font-normal mb-6">Contact me</p>

          <form onSubmit={handleSubmit}>
            {/* Name Field */}
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm text-gray-400">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 bg-[#101010] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Name"
                minLength={3}
                maxLength={50}
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>

            {/* Email Field */}
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm text-gray-400">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 bg-[#101010] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Email"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            {/* Message Field */}
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm text-gray-400">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={11}
                className="w-full p-3 bg-[#101010] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                placeholder="Your Message"
                minLength={10}
                maxLength={500}
              />
              {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
            </div>

            <button
              type="submit"
              className="px-6 py-3 bg-transparent text-white rounded-lg hover:bg-gray-900 border border-gray-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
