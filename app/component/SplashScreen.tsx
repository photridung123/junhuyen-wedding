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
      className={`fixed inset-0 z-50 flex items-center justify-center cursor-pointer transition-all duration-700 ${
        isClosing ? "opacity-0 scale-105" : "opacity-100 scale-100"
      } bg-transparent`}
    >
      {/* Background image + gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to bottom right, rgba(255, 224, 230, 0.4), rgba(254, 243, 199, 0.4)), url('/asset/imgs/bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center -translate-y-20 md:-translate-y-32">
        {/* Wedding Invitation */}
        <p
          className={`text-2xl md:text-4xl tracking-widest font-semibold mb-3 text-rose-400 transition-all duration-500 ${
            clicked ? "opacity-0 translate-y-2" : "opacity-100"
          }`}
        >
          Wedding Invitation
        </p>

        {/* Jun & Huyen */}
        <h1
          className={`text-6xl md:text-8xl font-light text-rose-700 mb-4 transition-all duration-500 ${
            clicked ? "scale-95 opacity-0" : "scale-100 opacity-100"
          }`}
        >
          Jun & Huyen
        </h1>

        {/* Tap / Nhấn để mở */}
        <p
          className={`text-2xl md:text-4xl font-semibold text-rose-300 transition-all duration-500 ${
            clicked ? "opacity-0" : "opacity-100 animate-softPulse"
          }`}
        >
          Nhấn để mở 💌 / Tap to open 💌
        </p>
      </div>

      {/* Ripple effect */}
      {clicked && (
        <span className="absolute flex items-center justify-center">
          <span className="w-32 h-32 rounded-full bg-rose-200/40 animate-ripple" />
        </span>
      )}
    </div>
  );
}