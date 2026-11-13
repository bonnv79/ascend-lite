"use server";

/**
 * Newsletter form handler. It validates the input and return a message for the form.
 * It has a TODO where you connect your own provider (Resend, Loops,
 * ConvertKit, a database...). Nothing is sent anywhere until you do.
 */

export type FormState = { ok: boolean; message: string } | null;

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function text(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

export async function subscribe(_prev: FormState, formData: FormData): Promise<FormState> {
  const email = text(formData, "email");
  if (!EMAIL.test(email)) return { ok: false, message: "Enter a valid email address." };

  // TODO: add the address to your mailing list provider here.

  return { ok: true, message: "Thanks! Check your inbox to confirm." };
}
