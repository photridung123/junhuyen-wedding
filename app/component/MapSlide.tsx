import { SRC_GG_MAP } from "../util";
import { FullImageSlide } from "./FullImageSlide";

export const MapSlide = () => {
  return (
    <div className="relative">
      <FullImageSlide slideOrder={8} />

      {/* 📍 Map */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2">
        <iframe
          src={SRC_GG_MAP}
          className="w-[80vw] h-[25vh] sm:w-[19.2vw]"
          allowFullScreen
          loading="lazy"
        />
      </div>
    </div>
  );
};