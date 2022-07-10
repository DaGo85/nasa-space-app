import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Footer() {
  const [isOpen, setIsOpen] = useState(false);

  const rocket = {
    start: {
      y: -100,
      transition: { duration: 1, ease: "easeIn" },
    },
    landing: {
      y: 0,
      transition: {
        duration: 1,
        ease: "easeIn",
      },
    },
  };

  const turn = {
    start: {
      rotate: 180,
      transition: { duration: 0.5, ease: "easeIn", delay: 1 },
    },
    landing: {
      rotate: 0,
      transition: { duration: 0.5, ease: "easeIn", delay: 0.4 },
    },
  };

  return (
    <footer>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: 100 }}
            transition={{ duration: 1, ease: "easeIn" }}
            exit={{ height: 0 }}
            className="w-full h-24 bg-lightVariantSurface/75 dark:bg-darkVariantSurface/75
         flex-col items-center justify-center bottom-0 gap-2 fixed flex"
          >
            <h5 className="text-md">
              This App was created by{" "}
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primaryLightOn dark:text-primaryDarkOn
                hover:text-primaryLightContainerOn hover:dark:text-primaryDarkContainerOn underline"
              >
                {" "}
                D. Goergens
              </a>{" "}
            </h5>
            <div className="flex flex-col md:flex-row gap-1 text-xs">
              <div className="font-bold">
                A challenge from{" "}
                <a
                  href="https://www.frontendmentor.io/home"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="dark:text-primaryDarkOn
                hover:text-primaryLightContainerOn hover:dark:text-primaryDarkContainerOn underline"
                >
                  {" "}
                  Frontend Mentor
                </a>
                .
              </div>{" "}
              <div>
                The code can be found here:{" "}
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="dark:text-primaryDarkOn
                hover:text-primaryLightContainerOn hover:dark:text-primaryDarkContainerOn underline"
                >
                  {" "}
                  Github
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.div
        className="fixed right-3 bottom-1"
        onClick={() => setIsOpen(!isOpen)}
        variants={rocket}
        animate={isOpen ? "start" : "landing"}
      >
        <motion.button variants={turn} animate={isOpen ? "start" : "landing"}>
          <svg
            className="w-12 -rotate-90 fill-primaryLight 
            dark:fill-primaryDark hover:fill-primaryLight/60 
            dark:hover:fill-primaryDark/60"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 512"
          >
            <path d="M129.1 480H128V384H352L245.2 448.1C210.4 468.1 170.6 480 129.1 480zM352 128H128V32H129.1C170.6 32 210.4 43.03 245.2 63.92L352 128zM104 128C130.2 128 153.4 140.6 168 160H456C525.3 160 591 182.7 635.2 241.6C641.6 250.1 641.6 261.9 635.2 270.4C591 329.3 525.3 352 456 352H168C153.4 371.4 130.2 384 104 384H96V480H80C53.49 480 32 458.5 32 432V384H40C17.91 384 0 366.1 0 344V168C0 145.9 17.89 128 39.96 128H32V80C32 53.49 53.49 32 80 32H96V128H104zM476.4 208C473.1 208 472 209.1 472 212.4V299.6C472 302 473.1 304 476.4 304C496.1 304 512 288.1 512 268.4V243.6C512 223.9 496.1 208 476.4 208z" />
          </svg>
        </motion.button>
      </motion.div>
    </footer>
  );
}
export default Footer;
