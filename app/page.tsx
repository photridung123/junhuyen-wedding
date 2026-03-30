"use client";

import { FullImageSlide, MapSlide } from "@/app/component";
import { useEffect, useRef, useState } from "react";
import SplashScreen from "./component/SplashScreen";
import WishForm from "./component/WishForm";

export type SlideType = "Static" | "Custom";

export interface SlideTemplate {
  type: SlideType;
  customRender?: React.ReactNode;
}

const SLIDE_TEMPLATE: SlideTemplate[] = [
  { type: "Static" },
  { type: "Static" },
  { type: "Static" },
  { type: "Static" },
  { type: "Static" },
  { type: "Static" },
  { type: "Static" },
  { type: "Static" },
  {
    type: "Custom",
    customRender: <MapSlide />,
  },
  { type: "Custom", customRender: <WishForm /> },
];

export default function MainScreen() {
  const [isClient, setIsClient] = useState(false);
  const [entered, setEntered] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleEnter = () => {
    setEntered(true);

    // 🎵 play sau khi transition
    setTimeout(() => {
      const audio = audioRef.current;
      if (!audio) return;

      try {
        audio.volume = 0;
        audio.play();

        // 🌸 fade in (đã fix lỗi volume)
        let v = 0;
        const fade = setInterval(() => {
          v = Math.min(v + 0.03, 1); // 🔒 clamp tránh crash
          audio.volume = v;

          if (v >= 1) {
            clearInterval(fade);
          }
        }, 100);
      } catch (e) {}
    }, 300);
  };

  if (!isClient) return null;

  return (
    <>
      {/* 🎵 Audio global */}
      <audio ref={audioRef} loop>
        <source src="/asset/musics/1.mp3" type="audio/mpeg" />
      </audio>

      {/* 💌 Splash */}
      {!entered && <SplashScreen onEnter={handleEnter} />}

      {/* 🌸 Main content */}
      {entered &&
        SLIDE_TEMPLATE.map((slide: SlideTemplate, index: number) => (
          <div key={index}>
            {slide.customRender ? (
              slide.customRender
            ) : (
              <FullImageSlide slideOrder={index} />
            )}
          </div>
        ))}
    </>
  );
}
