import gitHubIcon from '../assets/github.svg';
import linkedInIcon from '../assets/linkedin.svg';

const Footer = () => {
  return (
    <div className="flex gap-4 w-full items-end justify-center">
      <div className="text-white">
        <p className="font-oswald">@{new Date().getFullYear()} AhmedAlharees </p>
      </div>
      <a href="https://github.com/AhmedAlharees" target="_blank">
        <img src={gitHubIcon} alt="github" className="w-full" />
      </a>
      <a
        href="https://www.linkedin.com/in/ahmed-alharees-1331b72b8/"
        target="_blank"
      >
        <img src={linkedInIcon} alt="linkedin" className="w-full" />
      </a>
    </div>
  );
};

export default Footer;
