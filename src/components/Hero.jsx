import React, { useState, useRef } from "react";
import Buttton from "./Buttton";
import { TiLocationArrow } from "react-icons/ti";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Hero = () => {
  const [currentIndex, setcurrentIndex] = useState(1);
  const [hasClicked, sethasClicked] = useState(false);
  const [isLoading, setisLoading] = useState(true);
  const [loadedVideo, setloadedVideo] = useState(0);

  const totalVideos = 3;
  const nextVideoRef = useRef(null);

  const handleVideoLoad = () => {
    setloadedVideo((prev) => prev + 1);
  };

  useGSAP(
    () => {
      if (hasClicked) {
        gsap.set("#next-video", { visibility: "visible" });

        gsap.to("#next-video", {
          transformOrigin: "center center",
          duration: 1,
          ease: "power1.inOut",
          scale: 1,
          width: "100%",
          height: "100%",
          onStart: () => nextVideoRef.current.play(),
        });

        gsap.from("#current-video", {
          transform: "center center",
          duration: 1.5,
          scale: 0,
          ease: "power1.inOut",
        });
      }
    },
    {
      dependencies: [currentIndex],
      revertOnUpdate: true,
    }
  );

  // logic behind minivideo player upcoming videos
  // 0 % 4 = 0 + 1 => 1
  // 1 % 4 = 1 + 1 => 2
  // 2 % 4 = 2 + 1 => 3
  // 3 % 4 = 3 + 1 => 4
  // 4 % 4 = 0 + 1 => 1
  const upcomingVideoIndex = (currentIndex % totalVideos) + 1;

  const handleMiniVideoClick = () => {
    sethasClicked(true);

    setcurrentIndex(upcomingVideoIndex);
  };

  const getVideoSrc = (index) => `videos/hero-${index}.mp4`;

  return (
    <div className="relative overflow-x-hidden h-dvh w-screen ">
      {/* main div which containes video in hero section */}
      <div
        id="video-frame"
        className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75"
      >
        <div>
          {/* this div gonna hold the minivideo player container */}
          <div className="mask-clip-path z-50 overflow-hidden absolute-center absolute size-64 cursor-pointer rounded-lg">
            {/* mini video player through we can play videos according to our choice after clicking it  */}
            <div
              onClick={handleMiniVideoClick}
              className="origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100"
            >
              <video
                loop
                muted
                id="current-video"
                className="origin-center size-64 scale-150 object-center object-cover"
                ref={nextVideoRef}
                src={getVideoSrc(upcomingVideoIndex)}
                onLoadedData={handleVideoLoad}
              />
            </div>
          </div>

          <video
            ref={nextVideoRef}
            src={getVideoSrc(currentIndex)}
            loop
            muted
            id="next-video"
            className="absolute absolute-center z-20 size-64 object-cover object-center invisible"
          />

          <video
            src={getVideoSrc(
              currentIndex === totalVideos - 1 ? 1 : currentIndex
            )}
            loop
            muted
            autoPlay
            className="absolute top-0 left-0 object-center object-cover size-full"
            onLoadedData={handleVideoLoad}
          />
        </div>

        {/* this is bottom heading of hero sectioin */}
        <h1 className="special-font hero-heading absolute bottom-5 right-5 z-40 text-blue-75">
          G<b>a</b>ming
        </h1>

        {/* this gonna be section for upper heading & stuff of hero section */}
        <div className="absolute top-0 left-0 z-40 size-full">
          <div className="mt-25 px-5 sm:px-10">
            <h1 className="special-font hero-heading text-blue-100">
              redefi<b>n</b>
              <b>e</b>d
            </h1>
            <p className="mb-5 max-w-64 font-robert-regular text-blue-100">
              Enter the Metagame Layer <br />
              Unleash the Play Economy
            </p>

            <Buttton
              title="Watch Trailer"
              id="watch-trailer"
              leftIcon={<TiLocationArrow />}
              containerClass="!bg-yellow-300 flex-center gap-1"
            />
          </div>
        </div>
      </div>

      <h1 className="special-font hero-heading absolute bottom-5 right-5  text-blue-75">
        G<b>a</b>ming
      </h1>
    </div>
  );
};

export default Hero;
