"use client";

import { useState } from "react";
import { IconArrowRight, IconCheck } from "@/components/home/assets/assetsIcons";
import { LoadingSpinner } from "./loadingSpinner";

interface NewsletterInputProps {
  className?: string;
}

export function NewsletterInput({ className }: NewsletterInputProps) {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [submitMessage, setSubmitMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      setSubmitStatus("error");
      setSubmitMessage("Please enter your email address.");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");
    setSubmitMessage("");

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const result = await response.json();

      if (response.ok && result.data) {
        setSubmitStatus("success");
        setSubmitMessage("Successfully subscribed!");
        setEmail("");
      } else {
        setSubmitStatus("error");
        setSubmitMessage(
          result.message || result.error?.message || "Subscription failed. Please try again."
        );
      }
    } catch (error) {
      setSubmitStatus("error");
      setSubmitMessage("An unexpected error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={className}>
      <form onSubmit={handleSubmit} className="relative">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail"
          disabled={isSubmitting}
          className="w-full h-[48px] px-5 pr-14 rounded-full border border-muted-foreground/20 bg-transparent text-base text-foreground placeholder:text-muted-foreground focus:outline-hidden focus:border-foreground disabled:opacity-50"
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-background flex items-center justify-center hover:opacity-80 transition-opacity disabled:opacity-50"
        >
          {isSubmitting ? (
            <LoadingSpinner show={true} className="w-full h-full" />
          ) : submitStatus === "success" ? (
            <IconCheck />
          ) : (
            <IconArrowRight />
          )}
        </button>
      </form>
      {submitStatus !== "idle" && (
        <p
          className={`mt-2 text-sm ${
            submitStatus === "success" ? "text-foreground" : "text-red-600"
          }`}
        >
          {submitMessage}
        </p>
      )}
    </div>
  );
}
