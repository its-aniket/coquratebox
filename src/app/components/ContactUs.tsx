"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { error } from "console";
import { Pompiere } from "next/font/google";

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

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_k94sr55",
        "template_6lsws37",
        {
          from_name: form.name,
          to_name: "Aniket",
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
    <div className=" flex flex-col w-[100%] h-auto bg-[#E9DEF4] sm:flex-row">
      <div className="flex flex-col w-[100%] h-auto p-5 sm:w-[50%] sm:h-auto sm:p-10">
        <div className="text-center sm:text-left">
          <h2 className={`${pompiere.className} text-[30px] sm:text-[45px]`}>
            We are just a call away!
          </h2>
          <p className={`${pompiere.className} text-sm sm:text-xl`}>
            We would love to speak to you, understand your requirements and
            offer solutions that are perfect for you.
          </p>
        </div>
        <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-3 flex flex-col gap-8"
          >
            <div className="w-full flex flex-col justify-center">
              <label className="flex flex-col w-full">
                <span className="text-black text-[15px] font-medium mb-1">Your Name</span>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="What's your good name ?"
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
                  placeholder="mobile number"
                  className="bg-tertiary py-2 px-6 placeholder:text-xs  text-black rounded-lg outlined-none border-none font-medium"
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
                  placeholder="email address"
                  className="bg-tertiary py-2 px-6 placeholder:text-xs  text-black rounded-lg outlined-none border-none font-medium"
                />
              </label>
            </div>
            <label className="flex flex-col">
              <span className="text-black text-[15px] font-medium mb-1">Your message</span>
              <textarea
                rows="3"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What do you want to say ?"
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
      <div className="flex w-full h-full items-center justify-center sm:w-[50%] sm:h-auto">
        <img src="./assets/contact.png" alt="" />
      </div> 
    </div>
  );
};

export default ContactUs;
