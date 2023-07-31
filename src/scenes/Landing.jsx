import useMediaQuery from "../hooks/useMediaQuery";
import {motion} from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import SocialMediaIcons from "../components/SocialMediaIcons"


const Landing = ({setSelectedPage}) => {
    // const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

    return (
        <section
            id="home"
            className="md:flex md:justify-between md:items-center md:h-full gap-16 py-10"
        >
            {/* Image Section */}
            <div className="md:order-2 flex justify-center basis-3/5 ">

            </div>

            {/* Main Section */}
            <div className="z-30 basis-2/5 mt-12 md:mt-32">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: .8 }}
                    variants={{
                        hidden: { opacity: 0, x: -50},
                        visible: { opacity: 1, x: 0}
                    }}
                >
                    <p className="text-6xl font-playfair z-10 text-center md:text-start">
                        Andy {""}
                        <span className="xs:relative xs:text-deep-blue xs:font-semibold z-20 
                            xs:before:content-brush before:absolute before:-left-[40px]
                            before:-top-[120px] before:z-[-1]"
                        >
                            Chung
                        </span>
                    </p>
                    <p className="mt-10 mb-7 text-sm text-center md:text-start py-10">
                        I am a yameaner who likes to do yameaner stuff i wish we can wiokrk together
                        blah blah and have funcommunity bullshit and more stuff like that!
                    </p>
                </motion.div>


                <motion.div
                    className="flex mt-5 justify-center md:justify-start"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: .8, delay: .2 }}
                    variants={{
                        hidden: { opacity: 0, x: -50},
                        visible: { opacity: 1, x: 0}
                    }}
                >
                    <AnchorLink
                        className="bg-gradient-rainblue text-deep-blue rounded-sm py-3 px-7 font-semibold
                        hover:bg-blue hover:text-white transition duration-500 font-playfair"
                        onClick={() => setSelectedPage("contact")}
                        href="#contact"
                        
                    >
                        Contact Me
                    </AnchorLink>
                    <AnchorLink
                        className="rounded-r-sm bg-gradient-rainblue py-0.5 pr-0.5"
                        onClick={() => setSelectedPage("contact")}
                        href="#contact"
                    >
                        <div className="bg-deep-blue hover:text-red transition duration-500 w-full h-full flex items-center justify-center px-10 font-playfair">
                        Let's talk.
                        </div>
                    </AnchorLink>
                </motion.div>

                <motion.div
                    className="flex mt-5 justify-center md:justify-start"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: .8, delay: .5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50},
                        visible: { opacity: 1, x: 0}
                    }}
                >
                    <SocialMediaIcons />
                </motion.div>
            </div>
        </section>
    )
}


export default Landing;