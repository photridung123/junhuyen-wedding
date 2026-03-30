import { useMemo } from "react";
import { FullImageSlide } from "./FullImageSlide";
import { WEDDING_DATE, getSecondsCountdown } from "../util";
import { CountdownTimer } from "./CountdownTimer";

export const CountdownSlide = () => {
  const initialSeconds = useMemo(() => {
    const targetDate = new Date(WEDDING_DATE);
    return getSecondsCountdown(targetDate);
  }, [WEDDING_DATE]);

  return (
    <div className="relative flex justify-center items-center">
      <FullImageSlide slideOrder={4} />
      {initialSeconds > 0 ? (
        <div className="absolute left-7 bottom-16 sm:left-[39vw] sm:bottom-[10vh]">
          <CountdownTimer initialSeconds={initialSeconds} />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};
