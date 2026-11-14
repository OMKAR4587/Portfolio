
import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../stylesheets/Contact.css";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    whatsapp: "",
    project: "",
    message: "",
    answer: "",
  });

  const [captcha, setCaptcha] = useState({
    num1: 4,
    num2: 3,
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState({
    message: "",
    type: "",
  });

  const toastTimer = useRef(null);

  // Smooth staggered reveal
  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add(
        "(prefers-reduced-motion: no-preference)",
        () => {
          gsap.fromTo(
            ".contact-reveal",
            {
              opacity: 0,
              y: 24,
            },
            {
              opacity: 1,
              y: 0,
              duration: 0.9,
              stagger: 0.13,
              ease: "power3.out",
              scrollTrigger: {
                trigger: ".contact-section",
                start: "top 75%",
                once: true,
              },
            }
          );
        }
      );

      return () => mm.revert();
    });

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    return () => {
      if (toastTimer.current) {
        window.clearTimeout(toastTimer.current);
      }
    };
  }, []);

  const showToast = (message, type) => {
    if (toastTimer.current) {
      window.clearTimeout(toastTimer.current);
    }

    setToast({ message, type });

    toastTimer.current = window.setTimeout(() => {
      setToast({ message: "", type: "" });
    }, 3500);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const refreshCaptcha = () => {
    setCaptcha({
      num1: Math.floor(Math.random() * 8) + 2,
      num2: Math.floor(Math.random() * 8) + 1,
    });

    setForm((prev) => ({
      ...prev,
      answer: "",
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Please enter your name.";
    }

    if (!form.email.trim()) {
      newErrors.email = "Please enter your email.";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)
    ) {
      newErrors.email = "Enter a valid email address.";
    }

    if (!form.project) {
      newErrors.project = "Please select a project budget.";
    }

    if (!form.message.trim()) {
      newErrors.message = "Please tell me about your project.";
    }

    if (
      form.answer.trim() === "" ||
      Number(form.answer) !== captcha.num1 + captcha.num2
    ) {
      newErrors.answer = "Incorrect answer.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);

    const serviceId = import.meta.env.VITE_EMAIL_SERVICE;
    const templateId = import.meta.env.VITE_EMAIL_TEMPLATE;
    const publicKey = import.meta.env.VITE_EMAIL_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      showToast("Email service is not configured.", "error");
      setLoading(false);
      return;
    }

    const templateParams = {
      name: form.name,
      email: form.email,
      whatsapp: form.whatsapp || "Not provided",
      message: `Project Budget: ${form.project}\n\nProject Details:\n${form.message}`,
      time: new Date().toLocaleString(),
    };

    try {
      await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );

      showToast(
        "Message sent successfully!",
        "success"
      );

      setForm({
        name: "",
        email: "",
        whatsapp: "",
        project: "",
        message: "",
        answer: "",
      });

      setErrors({});
      refreshCaptcha();
    } catch (error) {
      console.error("EmailJS error:", error);

      showToast(
        "Something went wrong. Please try again.",
        "error"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">

        {/* TOP BAR */}
        <div className="contact-topbar contact-reveal">
          <span className="contact-brand">
            Portfolio<span>®</span>
          </span>

          <span className="contact-status">
            <i />
            Open to conversations
          </span>

          <span className="contact-year">
            Contact — {new Date().getFullYear()}
          </span>
        </div>

        {/* MAIN PANEL */}
        <div className="contact-panel">

          {/* LEFT SIDE */}
          <div className="contact-left">

            <div className="contact-heading contact-reveal">
              <span className="contact-eyebrow">
                GET IN TOUCH
              </span>

              <h1>
                Let's start a real
                <br />
                <em>conversation.</em>
              </h1>

              <p>
                Have an idea or a project in mind?
                I'd love to hear from you.
              </p>
            </div>

            {/* CONTACT LINKS */}
            <div className="contact-details contact-reveal">

              <a href="mailto:omee5663@gmail.com">
                <span className="contact-icon">
                  <svg viewBox="0 0 24 24" fill="none">
                    <rect
                      x="3.5"
                      y="5.5"
                      width="17"
                      height="13"
                      rx="2"
                    />
                    <path d="m4 7 8 6 8-6" />
                  </svg>
                </span>

                <span>omee5663@gmail.com</span>
                <b>↗</b>
              </a>

              <a
                href="https://wa.me/917021357156"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="contact-icon">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M20 11.5a8 8 0 0 1-11.8 7L4 20l1.5-4.1A8 8 0 1 1 20 11.5Z" />
                    <path d="M9 9c.5 2 2 3.5 4 4l1-1 2 1c-.5 2-2 2-3 2-3-1-5-3-5-5 0-1 0-2 1-2l1 1Z" />
                  </svg>
                </span>

                <span>WhatsApp</span>
                <b>↗</b>
              </a>

              <a
                href="https://github.com/OMKAR4587"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="contact-icon">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M9 19c-4 1-4-2-6-2m12 4v-3.5c0-1 .1-1.5-.5-2 3-.3 6-1.5 6-6.5a5 5 0 0 0-1.4-3.5A4.5 4.5 0 0 0 19 2s-1.2-.4-4 1a13 13 0 0 0-6 0C6.2 2 5 2 5 2a4.5 4.5 0 0 0-.1 3.5A5 5 0 0 0 3.5 9c0 5 3 6.2 6 6.5-.6.5-.6 1-.5 2V21" />
                  </svg>
                </span>

                <span>GitHub</span>
                <b>↗</b>
              </a>
            </div>

            {/* SMALL INFORMATION */}
            <div className="contact-meta contact-reveal">
              <div>
                <span>Preferred contact</span>
                <strong>Email</strong>
              </div>

              <div>
                <span>Project enquiries</span>
                <strong>Always welcome</strong>
              </div>

              <div>
                <span>Collaboration</span>
                <strong>Let's discuss</strong>
              </div>
            </div>

          </div>

          {/* RIGHT SIDE FORM */}
          <div className="contact-right contact-reveal">

            <form
              className="contact-form"
              onSubmit={handleSubmit}
              noValidate
            >

              <div className="contact-name-email">
                <div className="contact-input-wrap">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    value={form.name}
                    onChange={handleChange}
                    autoComplete="name"
                    aria-label="Your name"
                    required
                  />
                  {errors.name && (
                    <p className="error">{errors.name}</p>
                  )}
                </div>

                <div className="contact-input-wrap">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email address"
                    value={form.email}
                    onChange={handleChange}
                    autoComplete="email"
                    aria-label="Email address"
                    required
                  />
                  {errors.email && (
                    <p className="error">{errors.email}</p>
                  )}
                </div>
              </div>

              <div className="contact-input-wrap">
                <select
                  name="project"
                  value={form.project}
                  onChange={handleChange}
                  aria-label="Project budget"
                  required
                >
                  <option value="" disabled>
                    Project budget
                  </option>
                  <option value="Not decided yet">
                    Not decided yet
                  </option>
                  <option value="Below ₹10,000">
                    Below ₹10,000
                  </option>
                  <option value="₹10,000 – ₹25,000">
                    ₹10,000 – ₹25,000
                  </option>
                  <option value="₹25,000 – ₹50,000">
                    ₹25,000 – ₹50,000
                  </option>
                  <option value="₹50,000+">
                    ₹50,000+
                  </option>
                </select>

                {errors.project && (
                  <p className="error">{errors.project}</p>
                )}
              </div>

              <div className="contact-input-wrap">
                <textarea
                  name="message"
                  placeholder="Project details"
                  value={form.message}
                  onChange={handleChange}
                  rows="4"
                  aria-label="Project details"
                  required
                />

                {errors.message && (
                  <p className="error">{errors.message}</p>
                )}
              </div>

              {/* OPTIONAL WHATSAPP */}
              <div className="contact-whatsapp">
                <input
                  type="tel"
                  name="whatsapp"
                  placeholder="WhatsApp (optional)"
                  value={form.whatsapp}
                  onChange={handleChange}
                  autoComplete="tel"
                  aria-label="WhatsApp number"
                />
              </div>

              {/* CAPTCHA */}
              <div className="contact-captcha">
                <span>
                  Quick check: <b>{captcha.num1} + {captcha.num2}</b>
                </span>

                <input
                  type="number"
                  name="answer"
                  placeholder="Answer"
                  value={form.answer}
                  onChange={handleChange}
                  aria-label="CAPTCHA answer"
                  required
                />
              </div>

              {errors.answer && (
                <p className="error captcha-error">
                  {errors.answer}
                </p>
              )}

              <button
                type="submit"
                className="contact-submit"
                disabled={loading}
              >
                <span>
                  {loading ? "Sending..." : "Let's work together"}
                </span>
                <span className="submit-arrow">→</span>
              </button>

            </form>
          </div>

          {/* BOTANICAL DECORATION */}
          <div className="contact-botanical" aria-hidden="true">
            <svg viewBox="0 0 340 190" fill="none">
              <g stroke="#536b4d" strokeWidth="1.2" strokeLinecap="round">
                <path d="M10 180 Q100 110 175 35 Q225 0 325 15" />
                <path d="M75 135 Q60 90 30 70" />
                <path d="M110 105 Q115 60 95 30" />
                <path d="M150 70 Q170 40 160 12" />
                <path d="M185 40 Q220 50 245 75" />
                <path d="M220 23 Q255 5 275 0" />
              </g>

              <g fill="#536b4d" opacity=".78">
                <ellipse cx="31" cy="69" rx="9" ry="20" transform="rotate(-42 31 69)" />
                <ellipse cx="53" cy="92" rx="9" ry="19" transform="rotate(50 53 92)" />
                <ellipse cx="94" cy="30" rx="9" ry="20" transform="rotate(-25 94 30)" />
                <ellipse cx="117" cy="66" rx="9" ry="20" transform="rotate(42 117 66)" />
                <ellipse cx="160" cy="13" rx="9" ry="19" transform="rotate(-15 160 13)" />
                <ellipse cx="169" cy="42" rx="9" ry="20" transform="rotate(42 169 42)" />
                <ellipse cx="245" cy="75" rx="9" ry="20" transform="rotate(60 245 75)" />
                <ellipse cx="275" cy="0" rx="9" ry="18" transform="rotate(45 275 0)" />
                <ellipse cx="290" cy="26" rx="9" ry="20" transform="rotate(60 290 26)" />
                <ellipse cx="321" cy="15" rx="8" ry="18" transform="rotate(70 321 15)" />
              </g>

              <g fill="#87966a" opacity=".7">
                <ellipse cx="67" cy="115" rx="6" ry="15" transform="rotate(50 67 115)" />
                <ellipse cx="135" cy="91" rx="7" ry="16" transform="rotate(40 135 91)" />
                <ellipse cx="205" cy="53" rx="7" ry="16" transform="rotate(55 205 53)" />
                <ellipse cx="260" cy="45" rx="7" ry="16" transform="rotate(60 260 45)" />
                <ellipse cx="300" cy="66" rx="7" ry="16" transform="rotate(55 300 66)" />
              </g>
            </svg>
          </div>

        </div>

        <div className="contact-bottom-line contact-reveal">
          <span>Designed with intention.</span>
          <span>© {new Date().getFullYear()}</span>
        </div>

      </div>

      {/* TOAST */}
      {toast.message && (
        <div
          className={`contact-toast ${toast.type}`}
          role="status"
          aria-live="polite"
        >
          <span className="toast-dot" />
          {toast.message}
        </div>
      )}
    </section>
  );
};

export default Contact;
