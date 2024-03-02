"use server";

import React from "react";
import { Resend } from "resend";
import { emailTemp } from "@/components/email-template";

const resend = new Resend(process.env.RESEND_API_KEY);
type propType = {
  email: string;
  body: string;
};

export const sendEmail = async ({ email, body }: propType) => {
  // simple server-side validation

  let data;
  try {
    data = await resend.emails.send({
      from: `Contact Form <onboarding@resend.dev>`,
      to: "shahoriar.ratul@gmail.com",
      reply_to: `${email}`,

      subject: "Message from contact form",
      react: emailTemp({ body, email }),
    });
    console.log(data);
  } catch (error: unknown) {
    return {
      error: error,
    };
  }

  return {
    data,
  };
};
