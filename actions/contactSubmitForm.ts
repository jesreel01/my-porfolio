"use server";

import z from "zod";
import { ActionType } from "./types";
import { sendMail } from "@/lib/mailer";

const schema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  message: z.string().min(1, { message: "Message is required" }),
});

export type ContactFormData = z.infer<typeof schema>;

export async function contactSubmitForm(
  prevState: ActionType<ContactFormData>,
  formData: FormData
): Promise<ActionType<ContactFormData>> {
  const result = await schema.safeParseAsync(Object.fromEntries(formData));

  if (!result.success) {
    const errors = result.error.flatten();

    return {
      ...prevState,
      success: false,
      error: "Validation failed",
      validationErrors: errors.fieldErrors,
      data: Object.fromEntries(formData.entries()) as ContactFormData,
    };
  }

  const { name, email, message } = result.data;
  try {
    await sendMail(name, email, message);
  } catch (error) {
    console.error("Error sending email:", error);
    return {
      ...prevState,
      success: false,
      error: "Failed to send message",
      validationErrors: {},
      data: Object.fromEntries(formData.entries()) as ContactFormData,
    };
  }

  return {
    success: true,
  };
}
