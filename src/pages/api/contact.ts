export const prerender = false;

import type { APIRoute } from "astro";
import { client } from "@/lib/sanity";
import { sendEmail } from "./send-mail";

export const POST: APIRoute = async ({ request }) => {
  const raw = await request.text();

  let data;
  try {
    data = JSON.parse(raw);
  } catch {
    return new Response(JSON.stringify({ error: "Invalid JSON" }), {
      status: 400,
    });
  }

  // Support both formats: {name, email, message} and {firstName, lastName, email, message}
  const name =
    data.name || `${data.firstName || ""} ${data.lastName || ""}`.trim();
  const email = data.email;
  const message = data.message;
  const firstName = data.firstName || data.name?.split(" ")[0] || "";
  const lastName =
    data.lastName || data.name?.split(" ").slice(1).join(" ") || "";

  if (!name || !email || !message) {
    return new Response(JSON.stringify({ error: "Missing required fields" }), {
      status: 400,
    });
  }

  try {
    // Save to Sanity
    await client.create({
      _type: "contact-form",
      name: name,
      email: email,
      message: message,
      createdAt: new Date().toISOString(),
    });

    // Send email using the utility function
    const emailResult = await sendEmail({
      firstName,
      lastName,
      email,
      message,
    });

    if (!emailResult.success) {
      console.error("Email sending failed:", emailResult.message);
      // Don't fail the whole request if email fails
      return new Response(
        JSON.stringify({
          success: true,
          warning: "Message saved but email notification failed",
        }),
        { status: 200 },
      );
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: "Message sent successfully",
      }),
      { status: 200 },
    );
  } catch (err) {
    console.error("Sanity error:", err);
    return new Response(JSON.stringify({ error: "Failed to save message" }), {
      status: 500,
    });
  }
};
