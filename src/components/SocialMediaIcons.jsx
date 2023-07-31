import linkedin from "../assets/linkedin.png";
import github from "../assets/icons8-github-64.png";
import twitter from "../assets/twitter.png";

const SocialMediaIcons = () => {
    return (
        <div
            className="flex justify-center md:justify-start my-10 gap-7"
        >
            <a
                className="hover:opacity-50 transition duration-500"
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
            >
                <img alt="linkedin-link" src={linkedin} className="h-7 w-7" />
            </a>

            <a
                className="hover:opacity-50 transition duration-500"
                href="https://www.github.com"
                target="_blank"
                rel="noreferrer"
            >
                <img alt="github-link" src={github} className="h-7 w-7" />
            </a>

            <a
                className="hover:opacity-50 transition duration-500"
                href="https://www.twitter.com"
                target="_blank"
                rel="noreferrer"
            >
                <img alt="twitter-link" src={twitter} className="" />
            </a>
        </div>
    )
}


export default SocialMediaIcons;