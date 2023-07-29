import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";
import hamburger from "../assets/menu-icon.svg";
import close from "../assets/icons8-close-50.png";

const Link = ({ page, selectedPage, setSelectedPage }) => {
    const lowerCasePage = page.toLowerCase();
    return (
        <AnchorLink 
        className={`${selectedPage === lowerCasePage ? "text-yellow" : ""} hover:text-yellow transition duration-500`}
        href={`#${lowerCasePage}`}
        onClick={() => setSelectedPage(lowerCasePage)}
        >
            {page}
        </AnchorLink>
    )
}


const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }) => {
    const [isMenuToggled, setIsMenuToggled] = useState(false);
    const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");
    const navbarBackground = isTopOfPage ? "" : "bg-red";

    return (
        <nav className={`${navbarBackground} z-40 w-full fixed top-0 py-6`}>
            <div className="flex items-center justify-between mx-auto w-5/6">
                <h4 className="font-playfair text-3xl font-bold">AC</h4>

                {isAboveSmallScreens ? (
                    <div className="flex justify-between gap-16 font-opensans text-sm font-semibold">
                        <Link 
                            page="home"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Link 
                            page="skills"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Link 
                            page="projects"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Link 
                            page="contact"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                    </div>
                ) : (
                    <button
                        className="rounded-full bg-red p-2"
                        onClick={() => setIsMenuToggled(!isMenuToggled)}
                    >
                        <img alt="menu-icon" src={hamburger} />
                    </button>
                )}
                {/* Mobile Menu Popup */}
                {!isAboveSmallScreens && isMenuToggled && (
                    <div className="fixed right-0 bottom-0 h-full bg-blue w-[300px]">
                        {/* Close Icon */}
                        <div className="flex justify-end p-12">
                            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                                <img alt="close-icon" src={close} />
                            </button>
                        </div>
                        {/* Menu Items */}
                        <div className="flex flex-col gap-10 ml-[33%] text-2xl text-deep-blue">
                            <Link 
                                page="home"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                            <Link 
                                page="skills"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                            <Link 
                                page="projects"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                            <Link 
                                page="contact"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                        </div>
                    </div>
                )}

            </div>
        </nav>
    )
}

export default Navbar;