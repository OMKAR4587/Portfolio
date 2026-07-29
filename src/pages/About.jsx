import "../stylesheets/About.css";
import Profile from "../assets/images/My-Profile.jpeg"
import Menu from "../components/layout/Menu";
import Footer from "../components/layout/Footer";
import {
    Brain,
    Headphones,
    BookOpen,
    ArrowUpRight,
} from "lucide-react";


const interests = [
    {
        icon: Brain,
        title: "Chess",
        description:
            "Chess sharpens strategic thinking, patience, and decision-making. It has taught me to analyze problems from multiple perspectives before writing a single line of code.",
    },
    {
        icon: Headphones,
        title: "Music",
        description:
            "Music is my productivity companion. Whether I'm designing interfaces or debugging applications, the right playlist helps me stay focused and in a creative flow.",
    },
    {
        icon: BookOpen,
        title: "Reading",
        description:
            "Currently reading 'Ikigai', exploring purpose, continuous improvement, and mindful living—principles that inspire both my personal and professional growth.",
    },
];

function About() {
    return (
        <>
            <Menu />
            <main className="about">


                {/* INTRO SECTION */}

                <section className="intro">

                    <div className="intro-text">

                        <p className="small-title">
                            ABOUT ME
                        </p>

                        <h1>
                            I build digital experiences
                            that solve real problems.
                        </h1>


                        <p className="description">

                            I'm a full-stack developer focused on creating
                            modern web applications with clean interfaces,
                            scalable backend systems, and meaningful user
                            experiences.

                        </p>


                        <div className="developer-tag">

                            <span></span>

                            Full Stack Developer

                        </div>


                    </div>



                    <div className="profile-wrapper">

                        <div className="profile-card">

                            <img
                                src={Profile}
                                alt="profile"
                            />

                        </div>


                        <div className="floating-note">

                            Building with curiosity
                            and consistency.

                        </div>


                    </div>


                </section>





                {/* EXPERIENCE SECTION */}


                <section className="experience">


                    <div className="section-header">

                        <p>
                            EXPERIENCE
                        </p>

                        <h2>
                            Where I've built
                            and learned.
                        </h2>

                    </div>



                    <div className="timeline">


                        <article>


                            <div className="year">
                                2025 — Present
                            </div>


                            <div className="role">

                                <h3>
                                    Full Stack Developer
                                </h3>


                                <p>

                                    Developing complete web applications,
                                    working across frontend architecture,
                                    backend APIs, databases, and performance
                                    optimization.

                                </p>


                            </div>


                        </article>





                        <article>


                            <div className="year">
                                6 Months
                            </div>


                            <div className="role">


                                <h3>
                                    Full Stack Developer Intern
                                </h3>


                                <p>

                                    Collaborated on real-world projects,
                                    built reusable components, integrated
                                    APIs, handled debugging, and improved
                                    development workflow.

                                </p>


                            </div>


                        </article>



                    </div>


                </section>





                {/* INTEREST SECTION */}


                <section className="interests">
                    <div className="section-heading">
                        <span>Beyond Coding</span>
                        <h2>Things I Enjoy</h2>
                        <p>
                            Small habits that shape how I think, learn, and create better
                            experiences.
                        </p>
                    </div>

                    <div className="interest-grid">
                        {interests.map((item) => {
                            const Icon = item.icon;

                            return (
                                <div className="interest-card" key={item.title}>
                                    <div className="interest-icon">
                                        <Icon size={28} strokeWidth={2} />
                                    </div>

                                    <div className="interest-content">
                                        <h3>{item.title}</h3>

                                        <p>{item.description}</p>
                                    </div>

                                    <ArrowUpRight
                                        className="arrow"
                                        size={20}
                                        strokeWidth={2}
                                    />
                                </div>
                            );
                        })}
                    </div>
                </section>




                {/* FINAL SECTION */}


                <section className="closing">


                    <h2>
                        I believe great software is not only
                        about writing code.
                    </h2>


                    <p>

                        It's about understanding people,
                        solving problems, and creating
                        experiences that make technology
                        feel simple.

                    </p>


                </section>


            </main>
            <Footer />
        </>
    );
}


export default About;