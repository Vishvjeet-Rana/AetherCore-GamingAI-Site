import React, { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

const AnimatedTitle = ({ title, containerClass }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const elements = gsap.utils.toArray(".animated-word");

      gsap.set(elements, { opacity: 0, y: 20 }); // Initial hidden state

      const titleAnimation = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "bottom 60%",
          toggleActions: "play none none reverse",
        },
      });

      titleAnimation.to(elements, {
        ease: "power2.out",
        stagger: 0.05,
        opacity: 1,
        y: 0,
        rotationX: 0,
        rotationY: 0,
      });
    }, containerRef);

    return () => ctx.revert();
  }, [title]);

  return (
    <div ref={containerRef} className={`animated-container ${containerClass}`}>
      {title.split(/<br\s*\/?>/).map((line, index) => (
        <div
          key={index}
          className="flex justify-center items-center text-center mx-auto flex-wrap gap-2"
        >
          {line.split(" ").map((word, i) => (
            <span
              key={i}
              className="animated-word opacity-0"
              dangerouslySetInnerHTML={{ __html: word }}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default AnimatedTitle;
