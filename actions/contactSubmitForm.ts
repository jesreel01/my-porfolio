"use server";

import z from "zod";
import { ActionType } from "./types";

const schema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  message: z.string().min(1, { message: "Message is required" }),
});

export type ContactFormData = z.infer<typeof schema>;

export async function contactSubmitForm(
  prevState: ActionType<ContactFormData> | null,
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

  return {
    ...prevState,
    success: true,
    data: {
      name: "",
      email: "",
      message: "",
    },
  };
}
