"use client";
import { useState } from "react";

export default function SplashScreen({ onEnter }: { onEnter: () => void }) {
  const [isClosing, setIsClosing] = useState(false);
  const [clicked, setClicked] = useState(false);

  const handleEnter = () => {
    if (clicked) return;

    setClicked(true);
    setIsClosing(true);

    setTimeout(() => {
      onEnter();
    }, 800);
  };

  return (
    <div
      onClick={handleEnter}
      className={`fixed inset-0 z-50 flex items-center justify-center cursor-pointer 
      transition-all duration-700
      ${isClosing ? "opacity-0 scale-105" : "opacity-100 scale-100"}
      bg-rose-50/80 backdrop-blur-lg`}
    >
      <div className="relative z-10 text-center">
        <p
          className={`text-sm tracking-widest mb-3 text-rose-400 transition-all duration-500 ${
            clicked ? "opacity-0 translate-y-2" : "opacity-100"
          }`}
        >
          Wedding Invitation
        </p>

        <h1
          className={`text-4xl md:text-5xl font-light text-rose-700 mb-4 transition-all duration-500 ${
            clicked ? "scale-95 opacity-0" : "scale-100 opacity-100"
          }`}
        >
          Jun & Huyen
        </h1>

        <p
          className={`text-xs text-rose-300 transition-all duration-500 ${
            clicked ? "opacity-0" : "opacity-100 animate-softPulse"
          }`}
        >
          Tap to open 💌
        </p>
      </div>

      {/* ripple */}
      {clicked && (
        <span className="absolute flex items-center justify-center">
          <span className="w-32 h-32 rounded-full bg-rose-200/40 animate-ripple" />
        </span>
      )}
    </div>
  );
}