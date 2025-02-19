import { useGSAP } from "@gsap/react";
import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import AnimatedTitle from "./AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });

    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });
  });

  return (
    <div id="about" className="min-h-screen w-screen">
      <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
        {/* small upper heading */}
        <h2 className="text-sm font-general uppercase md:text-[12px]">
          Welcome to AetherCore
        </h2>

        <AnimatedTitle
          title="Disc<b>o</b>ver the world's <br /> largest shared <b>a</b>dventure"
          containerClass={`mt-5 !text-black text-center text-4xl sm:text-8xl special-font`}
        />

        {/* another text */}
        <div className="about-subtext">
          <p>The Game of Games begin-your life, now ane epic MMORPG</p>
          <p>
            AetherCore unites every player from countless games and platforms
          </p>
        </div>
      </div>

      {/* the poster or image in about section */}
      <div id="clip" className="h-dvh w-screen">
        <div className="mask-clip-path about-image h-[40%] w-[60%] sm:h-[60%] sm:w-[60%]">
          <img
            src="img/about.webp"
            alt="about section image"
            className="absolute left-0 top-0 size-full object-cover h-[100%] w-[100%] rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
