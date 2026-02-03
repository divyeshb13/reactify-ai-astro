/* ================== START: Imports ================== */
import emailjs from "@emailjs/nodejs";
import type { IContactForm } from "@/utils/types";
/* ================== END: Imports ================== */

/* ================== START: Send Email Function ================== */
export const sendEmail = async (
  data: IContactForm,
): Promise<{ success: boolean; message: string }> => {
  const { firstName, lastName, email, message } = data;

  // Check if private key exists
  if (!import.meta.env.EMAILJS_PRIVATE_KEY) {
    console.error("EMAILJS_PRIVATE_KEY is missing from .env file.");
    return {
      success: false,
      message: "Server configuration error: Missing Private Key.",
    };
  }

  try {
    // Send email using EmailJS
    const response = await emailjs.send(
      import.meta.env.EMAILJS_SERVICE_ID,
      import.meta.env.EMAILJS_TEMPLATE_ID,
      {
        firstName,
        lastName,
        email,
        message,
        name: import.meta.env.FROM_NAME,
        time: new Date().toLocaleString(),
      },
      {
        publicKey: import.meta.env.EMAILJS_PUBLIC_KEY,
        privateKey: import.meta.env.EMAILJS_PRIVATE_KEY,
      },
    );

    if (response.status === 200) {
      return {
        success: true,
        message: "Email sent successfully!",
      };
    } else {
      throw new Error("Failed to send email");
    }
  } catch (error) {
    console.error("Error sending email:", error);
    return {
      success: false,
      message: "Failed to send email. Please try again later.",
    };
  }
};
/* ================== END: Send Email Function ================== */
