import React from "react";
import { TiLocationArrow } from "react-icons/ti";

const BentoCard = ({ src, title, description, isComingSoon }) => {
  return (
    <div className="relative size-full">
      <video
        src={src}
        loop
        muted
        autoPlay
        className="absolute size-full left-0 top-0 object-cover object-center"
      />
      {/* title goes here */}
      <div className="relative size-full flex flex-col z-10 justify-between p-5 text-blue-50">
        <div>
          <h1 className="bento-title special-font">{title}</h1>
          {description && (
            <p className="mt-3 max-w-64 text-xs md:text-base">{description}</p>
          )}
        </div>
      </div>
    </div>
  );
};

const Features = () => {
  return (
    <section className="bg-black pb-52">
      <div className="px-3 md:px-10 mx-auto container">
        <div className="px-5 py-32">
          <p className="font-circular-web text-lg text-blue-50">
            Into the Metagame Layer
          </p>

          <p className="font-circular-web text-lg text-blue-50 max-w-md opacity-50">
            Immerse yourself in a rich and ever-expanding universe where a
            vibrant array of products converge into an interconnected overlay
            experience on your world.
          </p>
        </div>

        {/* Bento layout starts from here */}
        <div className="border-hsla rounded-xl relative mb-7 w-full overflow-hidden h-96 md:h-[65vh]">
          <BentoCard
            src="videos/feature-1.mp4"
            title={
              <>
                radia<b>n</b>t
              </>
            }
            description="A cross-platform metagame app, turning your activities across Web2 and Web3 games into a rewarding adventure."
          />
        </div>

        {/* other bento cards with grid layout */}
        <div className="grid grid-cols-2 grid-rows-3 h-[135vh] gap-7">
          {/* first card */}
          <div className="border-hsla rounded-xl bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
            <BentoCard
              src="videos/feature-2.mp4"
              title={
                <>
                  zig<b>m</b>a
                </>
              }
              description="An anime and gaming-inspired NFT collection - the IP primed for expansion."
            />
          </div>

          {/* second bento card */}
          <div className="rounded-xl border-hsla bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0">
            <BentoCard
              src="videos/feature-3.mp4"
              title={
                <>
                  n<b>e</b>xus
                </>
              }
              description="A gamified social hub, adding a new dimension of play to social interaction for Web3 communities."
            />
          </div>
          {/* third bento card */}
          <div className="rounded-xl border-hsla bento-tilt_1 me-14 md:col-span-1 md:me-0">
            <BentoCard
              src="videos/feature-4.mp4"
              title={
                <>
                  az<b>u</b>re
                </>
              }
              description="A cross-world AI Agent - elevating your gameplay to be more fun and productive."
            />
          </div>

          {/* last two elements goes here */}
          {/* first element */}
          <div className="bento-tilt_2">
            <div className=" rounded-xl flex flex-col size-full p-5 bg-violet-300 justify-between">
              <h1 className="bento-title special-font mx-w-64 text-black">
                M<b>o</b>re Comi<b>n</b>g So<b>o</b>n!
              </h1>
              <TiLocationArrow className="scale-[5] m-5 self-end" />
            </div>
          </div>

          {/* second element */}
          <div className="rounded-xl bento-tilt_2">
            <video
              src="videos/feature-5.mp4"
              muted
              loop
              autoPlay
              className="size-full object-center object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
