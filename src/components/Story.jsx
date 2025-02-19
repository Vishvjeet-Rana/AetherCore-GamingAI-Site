import React, { useRef } from "react";
import AnimatedTitle from "./AnimatedTitle";
import gsap from "gsap";
import RoundedCorners from "./RoundedCorners";

const Story = () => {
  const frameRef = useRef(null);

  const handleMouseLeave = () => {
    const element = frameRef.current;

    if (element) {
      gsap.to(element, {
        duration: 0.3,
        rotateX: 0,
        rotateY: 0,
        ease: "power1.inOut",
      });
    }
  };

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const element = frameRef.current;

    if (!element) return;

    const rect = element.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    gsap.to(element, {
      duration: 0.3,
      rotateX,
      rotateY,
      transformPerspective: 500,
    });
  };

  return (
    <section id="story" className="bg-black min-h-dvh w-screen text-blue-50">
      <div className="pb-24 py-10 flex flex-col items-center size-full">
        <p className="font-general text-sm md:text-[10px] uppercase">
          the multiversal ip world
        </p>

        {/* animated title goes here */}
        <div className="relative size-full">
          <AnimatedTitle
            title={"The st<b>o</b>ry of a <br/>hidden Real<b>m</b>"}
            containerClass={`mt-5 pointer-events-none mix-blend-differnce relative z-10 text-center text-6xl sm:text-8xl special-font`}
            sectionId="#story"
          />

          {/* image of story section */}
          <div className="story-img-container">
            <div className="story-img-mask">
              <div className="story-img-mask">
                <img
                  onMouseEnter={handleMouseLeave}
                  onMouseLeave={handleMouseLeave}
                  onMouseUp={handleMouseLeave}
                  onMouseMove={handleMouseMove}
                  ref={frameRef}
                  src="/img/entrance.webp"
                  alt="story section image"
                  className="object-contain"
                />
              </div>
            </div>

            <RoundedCorners />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
