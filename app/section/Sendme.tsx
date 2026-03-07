"use client";
import emailjs from "@emailjs/browser";
import React, { useRef, useState } from "react";
import FooterComp from "./component/Footer";

const Sendme = ({ id }: { id: string }) => {
  const [loading, setLoading] = useState(false);
  const form = useRef<HTMLFormElement>(null);

  const SendMessage = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_ikbyhsd",
        "template_zgmwk1k",
        form.current || "",
        "3C1j0goxlvghwX2g9",
      )
      .then(
        () => alert("Message sent successfully! 🚀"),
        () => alert("Oops! Failed to send the message. Please try again."),
      )
      .finally(() => setLoading(false));
  };

  return (
    <div
      className="relative min-h-screen w-full overflow-hidden bg-[#e2e2e7] dark:bg-[#03030d] transition-colors duration-700 flex flex-col"
      id={id}
    >
      <div className="absolute bottom-[10%] left-[-10%] w-[40%] h-[40%] rounded-full pointer-events-none blur-[120px] bg-blue-600/10 dark:bg-violet-900/20" />
      <div className="absolute bottom-0 right-0 w-full h-[30%] bg-gradient-to-t from-white/50 dark:from-white/[0.02] to-transparent pointer-events-none" />

      <div className="relative z-10 flex-1 flex items-center justify-center container mx-auto px-6 py-24">
        <div className="w-full max-w-[40rem]">
          <header className="flex flex-col gap-2 mb-12">
            <div className="flex items-center gap-3">
              <div className="h-[2px] w-10 bg-[#0b0ed4] dark:bg-violet-500 shadow-[0_0_10px_#0b0ed4]" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 dark:text-slate-500">
                Contact Me
              </span>
            </div>
            <h1 className="font-black text-slate-900 dark:text-white text-2xl md:text-5xl tracking-tighter mt-4">
              Let's{" "}
              <span className="text-[#0b0ed4] dark:text-violet-400 italic">
                Talk.
              </span>
            </h1>
            <p className="text-slate-500 dark:text-slate-400 font-medium text-sm md:text-base mt-2">
              Have a question or want to work together? Drop me a message below.
            </p>
          </header>
          <div className="relative group">
            {loading && (
              <div className="absolute inset-0 z-20 backdrop-blur-md bg-white/10 dark:bg-black/20 flex items-center justify-center rounded-[2.5rem] transition-all duration-500">
                <div className="flex flex-col items-center gap-4">
                  <div className="w-12 h-12 border-4 border-[#0b0ed4] border-t-transparent rounded-full animate-spin" />
                  <span className="font-black text-[10px] uppercase tracking-widest dark:text-white text-slate-900">
                    Sending...
                  </span>
                </div>
              </div>
            )}

            <form
              ref={form}
              onSubmit={SendMessage}
              className="relative overflow-hidden backdrop-blur-xl rounded-[2.5rem] p-8 md:p-12
                bg-white/40 dark:bg-white/[0.02] 
                border border-white/60 dark:border-white/10
                shadow-[0_8px_32px_rgba(0,0,0,0.02)] dark:shadow-[0_20px_80px_rgba(0,0,0,0.3)]"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="name"
                    className="text-[10px] font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 ml-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="from_name"
                    required
                    placeholder="John Doe"
                    className="w-full bg-white/50 dark:bg-white/[0.03] border border-white/60 dark:border-white/10 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[#0b0ed4]/20 transition-all dark:text-white text-slate-900 placeholder:text-slate-400 dark:placeholder:text-slate-600"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="email"
                    className="text-[10px] font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 ml-2"
                  >
                    E-Mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="from_email"
                    required
                    placeholder="john@example.com"
                    className="w-full bg-white/50 dark:bg-white/[0.03] border border-white/60 dark:border-white/10 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[#0b0ed4]/20 transition-all dark:text-white text-slate-900 placeholder:text-slate-400 dark:placeholder:text-slate-600"
                  />
                </div>
                <div className="flex flex-col gap-2 md:col-span-2">
                  <label
                    htmlFor="message"
                    className="text-[10px] font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 ml-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    placeholder="How can I help you?"
                    className="w-full bg-white/50 dark:bg-white/[0.03] border border-white/60 dark:border-white/10 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[#0b0ed4]/20 transition-all dark:text-white text-slate-900 placeholder:text-slate-400 dark:placeholder:text-slate-600 min-h-[120px] resize-none"
                  />
                </div>
              </div>
              <button
                type="submit"
                disabled={loading}
                className="mt-10 w-full md:w-auto group/btn relative overflow-hidden bg-[#0b0ed4] dark:bg-violet-600 text-white font-black uppercase tracking-[0.2em] text-[10px] px-10 py-5 rounded-2xl shadow-xl shadow-blue-600/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
              >
                <span className="relative z-10">Send Message</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000" />
              </button>
            </form>
          </div>
        </div>
      </div>

      <FooterComp />
    </div>
  );
};

export default Sendme;
