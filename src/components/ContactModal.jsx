import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Mail, Check, Send, FileText } from "lucide-react";

const ContactModal = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const email = "ibrahimabdulquadri446@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", stiffness: 350, damping: 30 }}
            className="relative w-full max-w-lg bg-[#121217] border border-white/10 rounded-[32px] p-6 sm:p-8 shadow-2xl z-10 text-[#D7E2EA] overflow-hidden"
          >
            {/* Ambient background glow */}
            <div className="absolute -top-24 -right-24 w-60 h-60 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-60 h-60 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none" />

            {/* Header */}
            <div className="flex items-center justify-between pb-6 border-b border-white/10">
              <div>
                <span className="text-xs uppercase tracking-widest text-white/50 font-mono">
                  [ Direct Channel ]
                </span>
                <h3 className="text-2xl sm:text-3xl font-black uppercase text-white tracking-tight mt-1">
                  Let&apos;s Build Together
                </h3>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="p-2 rounded-full bg-white/5 hover:bg-white/15 text-white/70 hover:text-white transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="py-6 space-y-6">
              <p className="text-sm sm:text-base text-[#D7E2EA]/80 font-light leading-relaxed">
                I&apos;m available for full-stack engineering roles, low-level systems projects, backend architecture, and creative web platforms.
              </p>

              {/* Quick Email Copy Box */}
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 overflow-hidden">
                  <Mail className="w-5 h-5 text-purple-400 shrink-0" />
                  <span className="text-xs sm:text-sm font-mono truncate text-white">
                    {email}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={handleCopy}
                  className="shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-xs font-medium uppercase tracking-wider text-white transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <span>Copy</span>
                  )}
                </button>
              </div>

              {/* Social Channels & Resume */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <a
                  href="https://github.com/ibrahimabdulquadri101"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 p-3.5 rounded-2xl bg-white/[0.04] border border-white/10 hover:bg-white/[0.08] hover:border-white/25 transition-all text-xs sm:text-sm uppercase tracking-wider font-medium text-white"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                  <span>GitHub</span>
                </a>

                <a
                  href="https://linkedin.com/in/ibrahim-abdulquadri-abiodun"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 p-3.5 rounded-2xl bg-white/[0.04] border border-white/10 hover:bg-white/[0.08] hover:border-white/25 transition-all text-xs sm:text-sm uppercase tracking-wider font-medium text-white"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                  <span>LinkedIn</span>
                </a>
              </div>

              <a
                href="./cv1.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 p-3.5 rounded-2xl bg-white/[0.04] border border-white/10 hover:bg-white/[0.08] hover:border-white/25 transition-all text-xs sm:text-sm uppercase tracking-wider font-medium text-white"
              >
                <FileText className="w-4 h-4" />
                <span>View Full Curriculum Vitae (PDF)</span>
              </a>

              <a
                href={`mailto:${email}?subject=Project%20Inquiry%20-%20Abdulquadri%20Ibrahim`}
                className="w-full inline-flex items-center justify-center gap-2 rounded-full py-3.5 px-6 font-medium uppercase tracking-widest text-xs sm:text-sm text-white"
                style={{
                  background:
                    "linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)",
                  boxShadow:
                    "0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset",
                  outline: "2px solid rgba(255, 255, 255, 0.9)",
                  outlineOffset: "-3px",
                }}
              >
                <Send className="w-4 h-4" />
                <span>Send Direct Message</span>
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;
