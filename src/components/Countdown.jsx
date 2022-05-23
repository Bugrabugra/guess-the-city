import React, { useEffect, useContext, useRef } from "react";
import { GameContext } from "../context/GameContext";
import { motion, useAnimation } from "framer-motion";

const TIMEOUT = 1000;

const Countdown = () => {
  const { countdown, setCountdown, isGameOn, setIsGameOn } =
    useContext(GameContext);
  const intervalRef = useRef(null);
  const controls = useAnimation();

  useEffect(() => {
    if (isGameOn) {
      intervalRef.current = setInterval(() => {
        setCountdown((prevState) => {
          if (prevState > 1) {
            controls.start({ scale: [1, 1.2, 1] });
            return prevState - 1;
          } else {
            // setIsGameOn(false);
            return "X";
          }
        });
      }, TIMEOUT);
    }

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [intervalRef, isGameOn]);

  return (
    <motion.div
      initial={false}
      animate={controls}
      transition={{
        duration: 1,
        type: "tween",
        stiffness: 20
      }}
      className="w-14 h-14 text-primaryLight bg-primaryDark font-bold text-4xl flex justify-center items-center rounded-lg border-white border-2 shadow-amber-900/40 shadow-xl z-0"
    >
      {countdown}
    </motion.div>
  );
};

export default Countdown;
