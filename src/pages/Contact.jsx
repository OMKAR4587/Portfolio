import { useEffect, useState } from "react";
import "../stylesheets/Contact.css";

import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { FaArrowRight } from "react-icons/fa";

const EMAIL_SERVICE = import.meta.env.VITE_EMAIL_SERVICE;
const EMAIL_TEMPLATE = import.meta.env.VITE_EMAIL_TEMPLATE;
const EMAIL_PUBLIC_KEY = import.meta.env.VITE_EMAIL_PUBLIC_KEY;


gsap.registerPlugin(ScrollTrigger);


const Contact = () => {


    const [form, setForm] = useState({

        name: "",
        email: "",
        whatsapp: "",
        project: "",
        message: "",
        answer: ""

    });


    const [captcha, setCaptcha] = useState({

        num1: 0,
        num2: 0

    });


    const [errors, setErrors] = useState({});

    const [loading, setLoading] = useState(false);



    useEffect(() => {

        generateCaptcha();


        gsap.fromTo(
            ".contact-reveal",

            {
                y: 40,
                opacity: 0
            },

            {
                y: 0,
                opacity: 1,
                duration: .8,
                stagger: .15,

                scrollTrigger: {
                    trigger: ".contact-section",
                    start: "top 75%",
                    end:"top 10%",
                    scrub:true,
                    // markers:true
                }

            }

        );


    }, []);



    const generateCaptcha = () => {


        setCaptcha({

            num1: Math.floor(Math.random() * 10),

            num2: Math.floor(Math.random() * 10)

        });


    };



    const handleChange = (e) => {


        setForm({

            ...form,

            [e.target.name]: e.target.value

        });


    };



    const validate = () => {


        let error = {};



        if (!form.name.trim())
            error.name = "Name is required";


        if (!form.email.trim())
            error.email = "Email is required";


        else if (!/^\S+@\S+\.\S+$/.test(form.email))

            error.email = "Invalid email";



        if (!form.project)

            error.project = "Select project type";



        if (!form.message.trim())

            error.message = "Message required";



        if (
            Number(form.answer)
            !== captcha.num1 + captcha.num2
        )

            error.answer = "Wrong answer";



        setErrors(error);


        return Object.keys(error).length === 0;


    };




    const submitHandler = async (e) => {


        e.preventDefault();



        if (!validate()) return;



        try {


            setLoading(true);



            await emailjs.send(

                EMAIL_SERVICE,

                EMAIL_TEMPLATE,

                {

                    name: form.name,

                    email: form.email,

                    whatsapp: form.whatsapp,

                    message: `
                    Project Type:${form.project}
                    Message:${form.message} `,

                    time: new Date().toLocaleString(),


                },

                EMAIL_PUBLIC_KEY

            );



            toast.success("Message sent successfully");


            setForm({

                name: "",
                email: "",
                project: "",
                whatsapp: "",
                message: "",
                answer: ""

            });


            generateCaptcha();



        }

        catch (err) {

            toast.error("Something went wrong");

        }

        finally {

            setLoading(false);

        }



    };


    

    return (

        <section className="contact-section">


            <div className="contact-container">



                <div className="contact-intro contact-reveal">


                    <p className="contact-label">

                        CONTACT

                    </p>


                    <h1>

                        Let's build

                        <br />

                        <span>

                            something meaningful.

                        </span>

                    </h1>


                    <p className="contact-description">

                        Have an idea, opportunity or project?

                        I would love to hear about it and create something valuable together.

                    </p>


                </div>

               <div className="bottom-form-link">
                 <div className="contact-links contact-reveal">


                    <a href="mailto:omee5663@gmail.com">

                        <div>

                            <p>Email</p>

                            <span>
                                omee5663@gmail.com
                            </span>

                        </div>


                        <FaArrowRight />

                    </a>



                    <a
                        href="https://github.com/OMKAR4587"
                        target="_blank"
                        rel="noreferrer"
                    >


                        <div>

                            <p>Github</p>

                            <span>
                                github.com/OMKAR4587
                            </span>

                        </div>


                        <FaArrowRight />


                    </a>




                    <a
                        href="https://wa.me/917021357156"
                        target="_blank"
                        rel="noreferrer"
                    >


                        <div>

                            <p>WhatsApp</p>

                            <span>
                                Available for conversations
                            </span>

                        </div>


                        <FaArrowRight />


                    </a>



                </div>

                <form
                    className="contact-form contact-reveal"
                    onSubmit={submitHandler}
                >



                    <div className="field">

                        <input

                            name="name"

                            value={form.name}

                            onChange={handleChange}

                            placeholder=" "

                        />

                        <label>Name</label>

                    </div>

                    {errors.name &&
                        <p className="error">
                            {errors.name}
                        </p>
                    }




                    <div className="field">

                        <input

                            name="email"

                            value={form.email}

                            onChange={handleChange}

                            placeholder=" "

                        />

                        <label>Email</label>

                    </div>


                    {errors.email &&
                        <p className="error">
                            {errors.email}
                        </p>
                    }

                    <div className="field">

                        <input

                            name="whatsapp"

                            value={form.whatsapp}

                            onChange={handleChange}

                            placeholder=" "

                        />

                        <label>
                            WhatsApp (Optional)
                        </label>

                    </div>

                    <div className="field">


                        <select

                            name="project"

                            value={form.project}

                            onChange={handleChange}

                        >

                            <option value="">
                                Project Type
                            </option>


                            <option>
                                Freelance Project
                            </option>


                            <option>
                                Full Time Opportunity
                            </option>


                            <option>
                                Collaboration
                            </option>


                        </select>


                    </div>


                    {errors.project &&
                        <p className="error">
                            {errors.project}
                        </p>
                    }





                    <div className="field">


                        <textarea

                            name="message"

                            value={form.message}

                            onChange={handleChange}

                            placeholder=" "

                            rows="5"

                        />


                        <label>
                            Message
                        </label>


                    </div>


                    {errors.message &&
                        <p className="error">
                            {errors.message}
                        </p>
                    }




                    <div className="captcha">


                        <p>

                            Human verification:

                            <b>
                                {captcha.num1} + {captcha.num2}
                            </b>

                        </p>


                        <input

                            type="number"

                            name="answer"

                            value={form.answer}

                            onChange={handleChange}

                            placeholder="Answer"

                        />


                    </div>


                    {errors.answer &&
                        <p className="error">
                            {errors.answer}
                        </p>
                    }





                    <button disabled={loading}>


                        {loading
                            ?
                            "Sending..."
                            :
                            <>
                                Send Message
                                <FaArrowRight />
                            </>

                        }


                    </button>




                </form>
               </div>




            </div>


        </section>

    );


};


export default Contact;