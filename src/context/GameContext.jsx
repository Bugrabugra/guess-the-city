import React from "react";
import { createContext, useState } from "react";
import { COUNTDOWN_SECONDS } from "../constants";

export const GameContext = createContext({});

const ContextProvider = ({ children }) => {
  const [countdown, setCountdown] = useState(COUNTDOWN_SECONDS);
  const [isGameOn, setIsGameOn] = useState(false);
  const [clickedCity, setClickedCity] = useState("");
  const [typedCity, setTypedCity] = useState("");
  const [score, setScore] = useState(0);

  return (
    <GameContext.Provider
      value={{
        countdown,
        setCountdown,
        isGameOn,
        setIsGameOn,
        clickedCity,
        setClickedCity,
        typedCity,
        setTypedCity,
        score,
        setScore
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export default ContextProvider;
