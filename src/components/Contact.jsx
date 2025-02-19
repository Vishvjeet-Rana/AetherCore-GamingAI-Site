import React from "react";
import Buttton from "./Buttton";

const ImageClipBox = ({ src, clipClass }) => {
  return (
    <div className={clipClass}>
      <img src={src} />
    </div>
  );
};

const Contact = () => {
  return (
    <div className="min-h-96 w-screen px-10 my-20">
      <div className="relative rounded-lg bg-black py-24 text-blue-50 sm:overflow-hidden">
        <div className="absolute -left-20 top-0 hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96">
          <ImageClipBox
            src={"img/contact-1.webp"}
            clipClass={"contact-clip-path-1"}
          />

          <ImageClipBox
            src={"img/contact-2.webp"}
            clipClass={"contact-clip-path-2 lg:translate-y-40 translate-y-60"}
          />
        </div>

        <div className="absolute -top-40 left-20 w-60 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80">
          <ImageClipBox
            src={"img/swordman-partial.webp"}
            clipClass={"absolute md:scale-125"}
          />

          <ImageClipBox
            src={"img/swordman.webp"}
            clipClass={"sword-man-clip-path md:scale-125"}
          />
        </div>

        {/* text goes here */}
        <div className="flex flex-col items-center text-center">
          <p className="text-[10px] font-general uppercase">Join AetherCore</p>
          <p className="special-font mt-10 w-full font-zentry text-5xl leading-[0.9] md:text-[6rem]">
            Let's b<b>u</b>ild the <br /> <b>n</b>ew er<b>a</b> of <br /> ga
            <b>m</b>ing tog<b>e</b>ther
          </p>

          <Buttton
            title={"Contact US"}
            containerClass={"cursor-pointer mt-10"}
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
