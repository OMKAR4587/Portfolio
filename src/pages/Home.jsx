import { useEffect } from "react";
import gsap from "gsap";
import '../stylesheets/Home.css'


export default function Home() {


  useEffect(() => {
gsap.fromTo(".name",
  {
    clipPath: "inset(100% 0% 0% 0%)"
  },
  {
    clipPath: "inset(0% 0% 0% 0%)", 
    duration: 2,
    ease: "power4.out"
  }
);
gsap.fromTo(".tagline",
  {
    y:-50,
    opacity:0,
  }
  ,{
  y:0,
  opacity:1,
  duration:1
})
gsap.fromTo(".rolling-svg",
  {x:200,
    opacity:0
  },
  {
    x:0,
    opacity:1,
    duration:1
  })
}, []);

  const buttonsProperty = [
    { text: "VIEW PROJECT", w: "160px", h: "45px" },
    { text: "CONTACT ME", w: "160px", h: "45px" }
  ]

  return (
    <div className="hero">
      <div className="content">
        <p className="tagline">CRAFTING BEAUTIFUL DIGITAL EXPERIENCES</p>
        <h1 className="name">
          OMKAR<br />
          YEVLE
        </h1>
      </div>
      <svg className='rolling-svg' width="250" height="250" viewBox="0 0 250 250">

        {/* circle visible */}
        <circle
          cx="125"
          cy="125"
          r="50"
          fill="transparent"
        />

        {/* IMPORTANT: path instead of circle in defs */}
        <defs>
          <path
            id="curve"
            d="M 125,125 m -50,0 a 50,50 0 1,1 100,0 a 50,50 0 1,1 -100,0"
          />
        </defs>

        <text
          className='text'
          fill="black"
          fontSize="16"
          textAnchor="middle"
        >
          <textPath href="#curve" startOffset="50%">
            AVAILABLE • FOR • WORK •
          </textPath>
        </text>

      </svg>
    </div>
  )
}


