import { FaDiscord, FaGithub, FaTwitter, FaTwitch } from "react-icons/fa6";

const linksArray = [
  { href: "https://discord.com", icon: <FaDiscord /> },
  { href: "https://twitter.com", icon: <FaTwitter /> },
  { href: "https://github.com", icon: <FaGithub /> },
  { href: "https://twitch.com", icon: <FaTwitch /> },
];

const Footer = () => {
  return (
    <footer className="bg-violet-300 w-screen py-4  text-black">
      <div className="container mx-auto flex flex-col items-center justify-between md:flex-row px-4 gap-4 ">
        <p className="text-center text-sm md:text-left">
          &copy; Nova 2025. All rights reserved
        </p>

        {/* links goes here */}
        <div className="flex justify-center gap-4 md:justify-start">
          {linksArray.map((link, i) => (
            <a
              key={i}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black transition-colors duration-300 ease-in-out hover:text-white"
            >
              {link.icon}
            </a>
          ))}
        </div>

        <a
          href="#privacy-policy"
          className="text-sm text-center hover:underline md:text-right transition-all duration-300 ease-in-out"
        >
          Privacy Policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
