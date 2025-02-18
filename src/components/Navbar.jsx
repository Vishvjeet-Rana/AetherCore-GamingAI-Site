import { useEffect, useRef, useState } from "react";
import Buttton from "./Buttton";
import { TiLocationArrow } from "react-icons/ti";

const navItems = ["Nexus", "Prologue", "Vault", "About", "Contact"];

const Navbar = () => {
  const navContainerRef = useRef(null);
  const audioElementRef = useRef(null);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [isIndicatorActive, setIsIndicatorActive] = useState(false);

  const toggleAudioIndicator = () => {
    setIsAudioPlaying((prev) => !prev);

    setIsIndicatorActive((prev) => !prev);
  };

  useEffect(() => {
    if (isAudioPlaying) {
      audioElementRef.current.play();
    } else {
      audioElementRef.current.pause();
    }
  }, [isAudioPlaying]);

  return (
    <div
      ref={navContainerRef}
      className="h-16 fixed inset-x-0 sm:inset-x-6 top-4 z-50 transition-all border-none duration-700"
    >
      <header className="absolute top-1/2 w-full -translate-y-1/2">
        <nav className="flex size-full items-center justify-between p-4">
          {/* here are the items of navbar */}
          <div className="flex items-center gap-4">
            <img src="/img/logo.png" alt="logo image" className="w-10" />

            <Buttton
              id="product-button"
              title="Products"
              rightIcon={<TiLocationArrow />}
              containerClass="!bg-blue-50 items-center justify-center gap-1 sm:flex hidden sm:block"
            />
          </div>

          {/* right side items of the navbar */}
          <div className="flex h-full items-center">
            <div className="hidden md:block">
              {navItems.map((item, index) => (
                <a
                  href={`#${item.toLowerCase()}`}
                  className="nav-hover-btn px-4"
                  key={index}
                >
                  {item}
                </a>
              ))}
            </div>

            {/* audio button */}
            <button
              className="ml-10 space-x-0.5 flex items-center cursor-pointer"
              onClick={toggleAudioIndicator}
            >
              <audio
                ref={audioElementRef}
                className="hidden"
                src="/audio/loop.mp3"
                loop
              />
              {[1, 2, 3, 4].map((bar) => (
                <div
                  key={bar}
                  className={`indicator-line ${
                    isIndicatorActive ? "active" : ""
                  }`}
                  style={{
                    "--animation-order":
                      bar /* Set CSS variable for animation delay */,
                    animationDelay: `${
                      bar * 0.1
                    }s` /* This will work as fallback */,
                  }}
                />
              ))}
            </button>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
