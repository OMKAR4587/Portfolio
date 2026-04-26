import { useState, useEffect } from "react";
import "../stylesheets/Contact.css";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { MdEmail } from "react-icons/md";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaWhatsapp, FaGithub } from "react-icons/fa";
const EMAIL_SERVICE = import.meta.env.VITE_EMAIL_SERVICE;
const EMAIL_TEMPLATE = import.meta.env.VITE_EMAIL_TEMPLATE;
const EMAIL_PUBLIC_KEY = import.meta.env.VITE_EMAIL_PUBLIC_KEY;

const Contact = () => {

    
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

 gsap.fromTo(".contact-left",
  { x: -100, opacity: 0 },
  {
    x: 0,
    opacity: 1,
    duration: 1,
    scrollTrigger: {
      trigger: ".contact-section",
      start: "top 80%",
      toggleActions: "play none none reverse"
    }
  }
);
  gsap.fromTo(".contact-right", 
    {
      x:100,
      opacity:0
    },
    {
    x: 0,
    opacity: 1,
    duration: 1,
    scrollTrigger: {
      trigger: ".contact-section",
      start: "top 80%",
      toggleActions: "play none none reverse"
    },
  })
  }, [])

    const [form, setForm] = useState({
        name: "",
        email: "",
        whatsapp: "",
        message: "",
        answer: "",
    });

    const [errors, setErrors] = useState({});
    const [captcha, setCaptcha] = useState({ num1: 0, num2: 0 });
    const [loading, setLoading] = useState(false);

    // Generate random numbers
    const generateCaptcha = () => {
        const n1 = Math.floor(Math.random() * 10);
        const n2 = Math.floor(Math.random() * 10);
        setCaptcha({ num1: n1, num2: n2 });
    };

    useEffect(() => {
        generateCaptcha();
    }, []);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        console.log(form)
    };

    const validate = () => {
        let newErrors = {};

        if (!form.name.trim()) {
            newErrors.name = "Name required";
        }

        if (!form.email.trim()) {
            newErrors.email = "Email required";
        } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
            newErrors.email = "Invalid email";
        }

        if (!form.message.trim()) {
            newErrors.message = "Message required";
        }

        // CAPTCHA validation
        const correctAnswer = captcha.num1 + captcha.num2;

        if (!form.answer) {
            newErrors.answer = "Answer required";
        } else if (isNaN(form.answer)) {
            newErrors.answer = "Must be a number";
        } else if (parseInt(form.answer) !== correctAnswer) {
            newErrors.answer = "Wrong answer. Try again.";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // Submit
    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validate()) return;

        setLoading(true);

        const templateParams = {
            name: form.name,
            email: form.email,
            whatsapp: form.whatsapp,
            message: form.message
        };
        console.log(templateParams)

        emailjs
            .send(
                EMAIL_SERVICE,
                EMAIL_TEMPLATE,
                templateParams,
                EMAIL_PUBLIC_KEY
            )
            .then(
                (response) => {
                    console.log("SUCCESS!", response.status, response.text);
                    toast.success("Message sent successfully!");

                    // Reset form
                    setForm({
                        name: "",
                        email: "",
                        whatsapp: "",
                        message: "",
                        answer: ""
                    });

                    setErrors({});
                    generateCaptcha();
                },
                (error) => {
                    console.log("FAILED...", error);

                    if (!navigator.onLine) {
                        toast.error("No internet connection 🚫");
                    } else if (error?.text) {
                        toast.error(error.text);
                    } else if (error?.message) {
                        toast.error(error.message);
                    } else {
                        toast.error("Something went wrong. Try again.");
                    }
                }
            )
            .finally(() => {
                setLoading(false);
            });
    };

    return (
        <div className="contact-section">

            <div className="contact-left">
                <p className="tag">GET IN TOUCH</p>
                <h1>Let's Work  <span>Together</span></h1>
                <div className="desc">
                    <p className="text-line"></p>
                    Have a project in mind? I'd love to hear about it.
                </div>

                <a href="mailto:omee5663@gmail.com?subject=Hello&body=I want to contact you" className="info-box">
                    <MdEmail />
                    <div>
                        <p>
                            Email
                        </p>
                        <span>omee5663@gmail.com</span>
                        <svg className="arr" width="16" height="16" viewBox="0 0 24 24">
                            <path d="M5 12h14M13 5l7 7-7 7"
                                stroke="red"
                                fill="none"
                                strokeWidth={2} />
                        </svg>
                    </div>
                </a>

                <a href="https://wa.me/7021357156" className="info-box">
                    <FaWhatsapp />
                    <div>
                        <p target="_blank">
                            WhatsApp
                        </p>
                        <span>+91 7021357156</span>
                        <svg className="arr" width="16" height="16" viewBox="0 0 24 24">
                            <path d="M5 12h14M13 5l7 7-7 7"
                                stroke="red"
                                fill="none"
                                strokeWidth={2} />
                        </svg>
                    </div>
                </a>

                <a href="https://github.com/OMKAR4587" className="info-box">
                    <FaGithub />
                    <div>
                        <p target="_blank">
                            GitHub
                        </p>
                        <span>github.com/omee</span>
                        <svg className="arr" width="16" height="16" viewBox="0 0 24 24">
                            <path d="M5 12h14M13 5l7 7-7 7"
                                stroke="red"
                                fill="none"
                                strokeWidth={2} />
                        </svg>
                    </div>
                </a>

                <div className="status">
                    <p id="dot"></p>Available for freelance projects
                </div>
            </div>

            <div className="contact-right">
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={form.name}
                        onChange={handleChange}
                    />
                    {errors.name && <p className="error-text">{errors.name}</p>}

                    <div className="row">
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={form.email}
                            onChange={handleChange}
                        />


                        <input
                            type="text"
                            name="whatsapp"
                            placeholder="WhatsApp (Optional)"
                            value={form.whatsapp}
                            onChange={handleChange}
                        />
                    </div>
                    {errors.email && <p className="error-text">{errors.email}</p>}

                    <textarea
                        name="message"
                        placeholder="Tell me about your project..."
                        value={form.message}
                        onChange={handleChange}
                    />
                    {errors.message && <p className="error-text checkbox-text">{errors.message}</p>}

                    {/* 🔢 Math CAPTCHA */}
                    <div className="captcha">
                        <div className="captcha-formula">
                            <p className="captcha-text">
                                A tiny test of humanity: <span> {captcha.num1} + {captcha.num2} = ?</span>
                            </p>
                            <input
                                type="number"
                                name="answer"
                                placeholder="Your Answer"
                                value={form.answer}
                                onChange={handleChange}
                            />
                        </div>
                        {errors.answer && <p className="error-text">{errors.answer}</p>}
                    </div>

                    <button type="submit" disabled={loading}>
                        {loading ? "Sending..." : "Send Message →"}
                    </button>
                </form>
            </div>


        </div>
    );
};

export default Contact;