import React, { useContext } from "react";
import { GameContext } from "../context/GameContext";

const Result = () => {
  const { score, setIsGameOn } = useContext(GameContext);

  const bestScore = () => {
    const scoreFromLocalStorage = parseInt(
      localStorage.getItem("guess-the-city-score")
    );

    return (
      <div>
        Bugüne kadarki en yüksek skorunuz:{" "}
        <span className="text-sky-500 font-bold">
          {scoreFromLocalStorage ? scoreFromLocalStorage : "yok =("}
        </span>
      </div>
    );
  };

  const message = () => {
    if (score === 0) {
      return (
        <div className="text-xl">
          Tüh! <span className="text-pink-500 font-bold">{score}</span> puan ama
          olsun.
          <br />
          {bestScore()}
          <br />
          Bi' daha deneyin bakalım?
        </div>
      );
    } else if (score > 0 && score < 3) {
      return (
        <div className="text-xl">
          Fena değil! Puanınız{" "}
          <span className="text-pink-500 font-bold">{score}</span> !
          <br />
          {bestScore()}
          <br />
          Yeniden oynamak ister misiniz?
        </div>
      );
    } else {
      return (
        <div className="text-xl">
          Müthiş! Puanınız{" "}
          <span className="text-pink-500 font-bold">{score}</span> !
          <br />
          {bestScore()}
          <br />
          Yeni bir rekor denemesi?
        </div>
      );
    }
  };

  return (
    <div className="absolute top-1/2 left-1/2 -translate-y-40 -translate-x-1/2 bg-gradient-to-b from-slate-600 to-slate-800 rounded-lg shadow-xl p-4 text-primaryLight flex flex-col justify-center items-center text-center space-y-4 z-30">
      {message()}
      <button className="mt-4" onClick={() => setIsGameOn(false)}>
        <svg
          className="fill-primaryLight mx-auto h-10 w-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path d="M449.9 39.96l-48.5 48.53C362.5 53.19 311.4 32 256 32C161.5 32 78.59 92.34 49.58 182.2c-5.438 16.81 3.797 34.88 20.61 40.28c16.97 5.5 34.86-3.812 40.3-20.59C130.9 138.5 189.4 96 256 96c37.96 0 73 14.18 100.2 37.8L311.1 178C295.1 194.8 306.8 223.4 330.4 224h146.9C487.7 223.7 496 215.3 496 204.9V59.04C496 34.99 466.9 22.95 449.9 39.96zM441.8 289.6c-16.94-5.438-34.88 3.812-40.3 20.59C381.1 373.5 322.6 416 256 416c-37.96 0-73-14.18-100.2-37.8L200 334C216.9 317.2 205.2 288.6 181.6 288H34.66C24.32 288.3 16 296.7 16 307.1v145.9c0 24.04 29.07 36.08 46.07 19.07l48.5-48.53C149.5 458.8 200.6 480 255.1 480c94.45 0 177.4-60.34 206.4-150.2C467.9 313 458.6 294.1 441.8 289.6z" />
        </svg>
      </button>
    </div>
  );
};

export default Result;
