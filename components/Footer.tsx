"use client";
import React, { EventHandler, FormEvent, useState } from "react";

import { TbMailForward } from "react-icons/tb";
import { sendEmail } from "@/components/sendmail";
import toast, { Toaster } from "react-hot-toast";

import { SlReload } from "react-icons/sl";

export default function Footer() {
  const [email, setEmail] = useState<string>("");
  const [body, setBody] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [pending, setpending] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setpending(true);
    await sendEmail({ email, body, name });
    toast.success("Email sent successfully");
    setpending(false);
  }
  return (
    <div
      id="footer"
      className="flex w-full flex-col justify-evenly sm:h-auto sm:flex-row"
    >
      <Toaster />
      <div className=" m-5 ">
        <div className="flex items-center justify-center">
          <p className="mb-5 text-3xl font-medium uppercase text-[#16f2b3]">
            Contact with me
          </p>
        </div>
        <div className="m-5 max-w-3xl rounded-lg border border-[#464c6a] p-3 text-white lg:p-5">
          <p className="text-sm text-[#d3d8e8]">
            {
              "If you have any questions or concerns, please don't hesitate to contact me. I am open to any work opportunities that align with my skills and interests."
            }
          </p>
          <form className="mt-6 flex flex-col gap-4" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-2">
              <label className="text-base">Your Name: </label>
              <input
                className="w-full rounded-md border border-[#353a52] bg-[#10172d] px-3 py-2 outline-0 ring-0 transition-all duration-300 focus:border-[#16f2b3]"
                type="text"
                placeholder="Your Name"
                maxLength={100}
                required={true}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-base">Your Email: </label>
              <input
                className="w-full rounded-md border border-[#353a52] bg-[#10172d] px-3 py-2 outline-0 ring-0 transition-all duration-300 focus:border-[#16f2b3]"
                placeholder="Email Address"
                type="email"
                maxLength={100}
                required={true}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-base">Your Message: </label>
              <textarea
                className="w-full rounded-md border border-[#353a52] bg-[#10172d] px-3 py-2 outline-0 ring-0 transition-all duration-300 focus:border-[#16f2b3]"
                maxLength={500}
                placeholder="Type your message here..."
                name="message"
                required={true}
                onChange={(e) => setBody(e.target.value)}
                rows={4}
              />
            </div>
            <div className="flex flex-col items-center gap-2">
              <button
                className="flex items-center gap-1 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-5 py-2.5 text-center text-xs font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:gap-3 hover:text-white hover:no-underline md:px-12 md:py-3 md:text-sm md:font-semibold"
                role="button"
                type="submit"
                disabled={pending}
              >
                {!pending ? (
                  <>
                    <span>Send Message</span>
                    <TbMailForward className="mt-1" size={18} />
                  </>
                ) : (
                  <>
                    <span>Sending...</span>
                    <SlReload size={18} className="mt-1 animate-spin" />
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="space-y-[10%] p-10 py-32 sm:basis-1/2 sm:space-y-[15%]">
        <p className=" text-lg">
          <span className="font-semibold">About this website : </span> built
          with React & Next.js (App Router & Server Actions), TypeScript,
          Tailwind CSS, Framer Motion, React Email & Resend, Vercel hosting.
        </p>
        <small className="absolute mb-2 block text-xs">
          &copy; 2023 Shahoriar Ratul. All rights reserved.
        </small>
      </div>
    </div>
  );
}
