import SocialMediaIcons from "../components/SocialMediaIcons";

const Footer = () => {
    return (
        <footer className="h-64 bg-red pt-10">
            <div className="2-5/6 mx-auto">
                <SocialMediaIcons />
                <div className="md:flex justify-center md:justify-between text-center">
                    <p className="font-playfiar font-semibold text-2xl text-yellow">ANDY CHUNG</p>
                    <p className="font-playfair text-md text-yellow">2023 CHUNG. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;