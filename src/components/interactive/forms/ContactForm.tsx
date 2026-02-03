import { Button } from "@/components/interactive/ui/button";
import { AlertCircle, ArrowRight, Sparkles } from "lucide-react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import type { IContactForm } from "@/utils/types";
import { useState } from "react";
import { userSchema } from "@/utils/schema";
import { Input } from "@/components/interactive/ui/input";
import CardGradientBg from "@/components/background_animation/CardGradientBg";

interface ContactFormProps {
  className?: string;
}

const ContactForm = ({ className = "" }: ContactFormProps) => {
  const [emailError, setEmailError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<IContactForm>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    },
    resolver: yupResolver(userSchema),
    mode: "onBlur",
    reValidateMode: "onChange",
  });

  const onSubmit = async (formData: IContactForm) => {
    const loadingToast = toast.loading("⏳ Sending your message...");
    try {
      setEmailError(null);

      // Call the API endpoint to save to Sanity and send email
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        toast.dismiss(loadingToast);

        if (result.warning) {
          // Show warning if email failed but data was saved
          toast.success("✅ Message saved! " + result.warning);
        } else {
          toast.success(
            "✅ Message sent successfully! We'll get back to you soon.",
          );
        }
        reset();
      } else {
        throw new Error(result.error || "Failed to send message");
      }
    } catch (error) {
      toast.dismiss(loadingToast);
      const errorMessage =
        error instanceof Error
          ? error.message
          : "Failed to send message. Please try again later.";
      toast.error("❌ " + errorMessage);
      setEmailError(errorMessage);
      console.error("Form submission failed:", error);
    }
  };

  const containerClassName =
    `bg-card/50 backdrop-blur-xl border border-primary-foreground/10 sm:p-8 p-5 rounded-3xl overflow-hidden ${className}`.trim();

  return (
    <div className={containerClassName} data-aos="zoom-in" data-aos-delay="500">
      <CardGradientBg className="opacity-0 dark:opacity-10" gridOpacity={0} />
      <div className="flex flex-col gap-3 sm:gap-6">
        <div className="flex items-center gap-2 z-10">
          <Sparkles className="w-5 h-5 text-primary" />
          <h3 className="text-lg sm:text-xl font-bold">Send us a message</h3>
        </div>

        <form
          className="flex flex-col gap-4 sm:gap-6 z-10"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="grid md:grid-cols-2 gap-4">
            <Input
              label="First Name"
              placeholder="John"
              {...register("firstName")}
              error={errors.firstName?.message}
            />
            <Input
              label="Last Name"
              placeholder="Doe"
              {...register("lastName")}
              error={errors.lastName?.message}
            />
          </div>
          <Input
            label="Email"
            placeholder="john@reactifyai.com"
            {...register("email")}
            error={errors.email?.message}
          />
          <div className="flex flex-col gap-2">
            <label className="block text-sm font-medium">Message</label>
            <textarea
              rows={4}
              {...register("message")}
              className={`w-full px-4 py-3 rounded-xl bg-background/50 border ${
                errors.message ? "border-destructive" : "border-border"
              } focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none`}
              placeholder="Tell us about your project..."
            />
            {errors.message && (
              <p className="text-destructive text-sm">
                {errors.message.message}
              </p>
            )}
          </div>
          {emailError && (
            <div className="flex items-center gap-1 mt-1 text-sm text-destructive">
              <AlertCircle className="w-4 h-4" />
              <span>{emailError}</span>
            </div>
          )}
          <Button
            variant="hero"
            className="w-full"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
            <ArrowRight className="w-5 h-5" />
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
