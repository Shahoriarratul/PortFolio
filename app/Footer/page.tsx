"use client";
import React, { EventHandler, FormEvent, useState } from "react";
import { FaPaperPlane } from "react-icons/fa";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useFormStatus } from "react-dom";

import { Resend } from "resend";
import { sendEmail } from "@/components/sendmail";

const resend = new Resend("re_KnBU9U4Z_5TxRyx8Sa5HG9USjRuS7r1BH");

export default function Footer() {
  const [email, setEamil] = useState<string>("");
  const [body, setBody] = useState<string>("");

  const { pending } = useFormStatus();
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    await sendEmail({ email, body });
    alert("email sent");
  }
  return (
    <div
      id="footer"
      className="justify-betwee flex h-full w-full flex-col sm:h-[60vh] sm:flex-row"
    >
      <div className=" sm:basis-1/2">
        <form
          onSubmit={handleSubmit}
          className="flex h-full flex-col items-center justify-center space-y-4 text-lg"
        >
          <div className=" p-4 text-center text-4xl text-violet-300">
            CONTACT ME
          </div>
          <div className=" p-2 text-center text-gray-300 sm:text-left ">
            Please contact me directly to my email{" "}
            <span className=" underline">shahoriar.ratul@gamil.com</span>
          </div>
          <Input
            placeholder="Your Email"
            name="SenderMail"
            onChange={(e) => setEamil(e.target.value)}
            className=" w-[80%] border-gray-600 bg-slate-100/10 text-start sm:w-[32vw]"
          />
          <Textarea
            name="textMail"
            onChange={(e) => setBody(e.target.value)}
            placeholder="Your message.."
            className="h-[15vh] w-[80%] border-gray-600 bg-slate-100/10 sm:w-[32vw]"
          />
          <button
            type="submit"
            className="group flex h-[3rem] w-[8rem] items-center justify-center gap-2 rounded-full bg-violet-800/25 text-white outline-none transition-all hover:scale-110 hover:bg-gray-950 focus:scale-110 active:scale-105 disabled:scale-100 disabled:bg-opacity-65 dark:bg-white dark:bg-opacity-10"
            disabled={pending}
          >
            {pending ? (
              <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
            ) : (
              <>
                Submit{" "}
                <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:-translate-y-1 group-hover:translate-x-1" />{" "}
              </>
            )}
          </button>
        </form>
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
