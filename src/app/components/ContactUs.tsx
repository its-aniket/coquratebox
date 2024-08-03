"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { error } from "console";
import { Pompiere } from "next/font/google";
import LazyLoad from 'react-lazyload';

const pompiere = Pompiere({
  subsets: ["latin"],
  weight: "400",
});

const ContactUs = () => {
  const formRef = useRef<HTMLFormElement>();
  const [form, setForm] = useState({
    name: "",
    mobile: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const validateForm = () => {
    const { name, mobile, email } = form;
    const nameRegex = /^[a-zA-Z\s]+$/;
    const emailRegex =  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const mobileRegex = /^\d{10}$/;

    if (!name) {
      alert("Name is required");
      return false;
    }
    if (!nameRegex.test(name)) {
      alert("Name should not contain numbers or special characters");
      return false;
    }
    if (!email) {
      alert("Email is required");
      return false;
    }
    if (!emailRegex.test(email)) {
      alert("Invalid email address");
      return false;
    }
    if (!mobile) {
      alert("Phone number is required");
      return false;
    }
    if (!mobileRegex.test(mobile)) {
      alert("Phone number should be exactly 10 digits and contain only numbers");
      return false;
    }
    return true;
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);

    emailjs
      .send(
        "service_k94sr55",
        "template_6lsws37",
        {
          from_name: form.name,
          to_name: "Coqurate Box",
          mobile: form.mobile,
          from_email: form.email,
          to_email: "aniketjadhav770698@gmail.com",
          message: form.message,
        },
        "Betsi43-mYoPh2_jF"
      )
      .then(() => {
        setLoading(false);
        alert("Thank you, I will get back to you as soon as possible.");
        setForm({
          name: "",
          mobile: "",
          email: "",
          message: "",
        });
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
        alert("Something went wrong, please try again.");
      });
  };

  return (
    <div className="mt-[1px] flex flex-col w-[100%] h-auto bg-[#E9DEF4] sm:flex-row">
      <div className="flex flex-col w-[100%] h-auto p-10 sm:w-[50%] sm:h-auto sm:p-10">
        <div className="flex flex-col gap-2 text-center sm:text-left">
          <h2 className={`${pompiere.className} text-[30px]  tablet:text-[35px] sm:text-[40px]`}>
            We are just a call away!
          </h2>
          <p className={`${pompiere.className} text-sm sm:text-xl`}>
            We would love to speak to you, understand your requirements and
            offer solutions that are perfect for you.
          </p>
        </div>
        
        <form
          onSubmit={handleSubmit}
          className="mt-7 flex flex-col gap-8"
        >
          <div className="w-full flex flex-col justify-center">
            <label className="flex flex-col w-full">
              <span className="text-black text-[15px] font-medium mb-1">Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your good name?"
                className="bg-tertiary py-2 px-4 placeholder:text-sm text-black rounded-lg outlined-none border-none font-medium"
              />
            </label>
          </div>
          <div className="flex flex-col w-full gap-2 sm:flex-row">
            <label className="flex flex-col w-full sm:w-[50%]">
              <span className="text-black text-[15px] font-medium mb-1">
                Phone number
              </span>
              <input
                type="text"
                name="mobile"
                value={form.mobile}
                onChange={handleChange}
                placeholder="Mobile number"
                className="bg-tertiary py-2 px-6 placeholder:text-xs text-black rounded-lg outlined-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col w-full sm:w-[50%]">
              <span className="text-black text-[15px] font-medium mb-1">
                Email Address
              </span>
              <input
                type="text"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email address"
                className="bg-tertiary py-2 px-6 placeholder:text-xs text-black rounded-lg outlined-none border-none font-medium"
              />
            </label>
          </div>
          <label className="flex flex-col">
            <span className="text-black text-[15px] font-medium mb-1">Your message</span>
            <textarea
              rows={3}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-sm text-black rounded-lg outlined-none border-none font-medium"
            />
          </label>

          <button
            type="submit"
            disabled={loading}
            className="p-2 bg-[#FFF1BD] text-black py-3 rounded-tr-[31px] rounded-bl-[31px]"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
      {/* divider */}
      <div className="flex w-full h-full items-center justify-center preload-image sm:w-[50%] sm:h-auto">
        <img src="./assets/contact.webp" alt="" loading="lazy" />
      </div> 
    </div>
  );
};

export default ContactUs;
