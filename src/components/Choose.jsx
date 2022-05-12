import React, { useState, useContext } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CLICKING, TYPING } from "../constants";
import { GameContext } from "../context/GameContext";

const Choose = ({ setGameType }) => {
  const [showModal, setShowModal] = useState(true);

  const { setIsGameOn } = useContext(GameContext);

  const onChoose = (gameType) => {
    setGameType(gameType);
    setShowModal(false);
    setIsGameOn(true);
  };

  const backdrop = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 }
  };

  const modal = {
    hidden: {
      y: "-100vh",
      opacity: 0
    },
    visible: {
      y: "-50px",
      opacity: 1,
      transition: { delay: 0.5 }
    }
  };

  return (
    <>
      <AnimatePresence exitBeforeEnter={true}>
        {showModal && (
          <motion.div
            className="absolute inset-0 flex justify-center items-center z-10 w-full h-full backdrop-blur-md bg-white/30"
            variants={backdrop}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              variants={modal}
              className="w-96 h-48 p-4 rounded-lg bg-gradient-to-bl from-cyan-500 to-emerald-500 z-20 shadow-amber-900/40 shadow-xl"
            >
              <h3 className="text-center text-2xl font-bold text-primaryLight">
                Guess the City
              </h3>
              <h2 className="text-center text-primaryLight font-bold">by</h2>
              <div className="flex justify-around items-center mt-2">
                <button onClick={() => onChoose(TYPING)} className="choose-btn">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                    className="fill-primaryLight mx-auto h-10 w-full"
                  >
                    <path d="M512 448H64c-35.35 0-64-28.65-64-64V128c0-35.35 28.65-64 64-64h448c35.35 0 64 28.65 64 64v256C576 419.3 547.3 448 512 448zM128 180v-40C128 133.4 122.6 128 116 128h-40C69.38 128 64 133.4 64 140v40C64 186.6 69.38 192 76 192h40C122.6 192 128 186.6 128 180zM224 180v-40C224 133.4 218.6 128 212 128h-40C165.4 128 160 133.4 160 140v40C160 186.6 165.4 192 172 192h40C218.6 192 224 186.6 224 180zM320 180v-40C320 133.4 314.6 128 308 128h-40C261.4 128 256 133.4 256 140v40C256 186.6 261.4 192 268 192h40C314.6 192 320 186.6 320 180zM416 180v-40C416 133.4 410.6 128 404 128h-40C357.4 128 352 133.4 352 140v40C352 186.6 357.4 192 364 192h40C410.6 192 416 186.6 416 180zM512 180v-40C512 133.4 506.6 128 500 128h-40C453.4 128 448 133.4 448 140v40C448 186.6 453.4 192 460 192h40C506.6 192 512 186.6 512 180zM128 276v-40C128 229.4 122.6 224 116 224h-40C69.38 224 64 229.4 64 236v40C64 282.6 69.38 288 76 288h40C122.6 288 128 282.6 128 276zM224 276v-40C224 229.4 218.6 224 212 224h-40C165.4 224 160 229.4 160 236v40C160 282.6 165.4 288 172 288h40C218.6 288 224 282.6 224 276zM320 276v-40C320 229.4 314.6 224 308 224h-40C261.4 224 256 229.4 256 236v40C256 282.6 261.4 288 268 288h40C314.6 288 320 282.6 320 276zM416 276v-40C416 229.4 410.6 224 404 224h-40C357.4 224 352 229.4 352 236v40C352 282.6 357.4 288 364 288h40C410.6 288 416 282.6 416 276zM512 276v-40C512 229.4 506.6 224 500 224h-40C453.4 224 448 229.4 448 236v40C448 282.6 453.4 288 460 288h40C506.6 288 512 282.6 512 276zM128 372v-40C128 325.4 122.6 320 116 320h-40C69.38 320 64 325.4 64 332v40C64 378.6 69.38 384 76 384h40C122.6 384 128 378.6 128 372zM416 372v-40C416 325.4 410.6 320 404 320h-232C165.4 320 160 325.4 160 332v40C160 378.6 165.4 384 172 384h232C410.6 384 416 378.6 416 372zM512 372v-40C512 325.4 506.6 320 500 320h-40C453.4 320 448 325.4 448 332v40C448 378.6 453.4 384 460 384h40C506.6 384 512 378.6 512 372z" />
                  </svg>
                  <div>Typing</div>
                </button>

                <button
                  onClick={() => onChoose(CLICKING)}
                  className="choose-btn"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 384 512"
                    className="fill-primaryLight mx-auto h-10 w-full"
                  >
                    <path d="M0 352c0 88.38 71.63 160 160 160h64c88.38 0 160-71.63 160-160V224H0V352zM176 0H160C71.63 0 0 71.62 0 160v32h176V0zM224 0h-16v192H384V160C384 71.62 312.4 0 224 0z" />
                  </svg>
                  <div>Clicking</div>
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Choose;
