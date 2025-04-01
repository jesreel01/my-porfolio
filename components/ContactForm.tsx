import { ContactFormData, contactSubmitForm } from "@/actions/contactSubmitForm";
import { ActionType } from "@/actions/types";
import { SendIcon } from "lucide-react";
import React, { FormEvent, useActionState } from "react";

const ContactForm = () => {
  const [state, action] = useActionState<ActionType<ContactFormData> | null, FormData>(
    contactSubmitForm,
    null
  );

  console.log(state);

  return (
    <form className="space-y-4" action={action}>
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-1">
          Name
        </label>
        <input
          defaultValue={state?.data?.name}
          type="text"
          id="name"
          name="name"
          placeholder="Your name"
          className="w-full p-3 rounded-md border border-border bg-background focus:border-primary focus:ring-1 focus:ring-primary/30 transition-colors duration-200"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-1">
          Email
        </label>
        <input
          defaultValue={state?.data?.email}
          id="email"
          type="email"
          name="email"
          placeholder="Your email"
          className="w-full p-3 rounded-md border border-border bg-background focus:border-primary focus:ring-1 focus:ring-primary/30 transition-colors duration-200"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-1">
          Message
        </label>
        <textarea
          defaultValue={state?.data?.message}
          id="message"
          name="message"
          rows={5}
          placeholder="Your message"
          className="w-full p-3 rounded-md border border-border bg-background focus:border-primary focus:ring-1 focus:ring-primary/30 transition-colors duration-200"
        ></textarea>
      </div>

      <button
        type="submit"
        className="inline-flex items-center justify-center w-full px-5 py-3 mt-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-200 font-medium"
      >
        Send Message
        <SendIcon className="ml-2 h-4 w-4" />
      </button>
    </form>
  );
};

export default ContactForm;
