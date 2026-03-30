import { useSearchParams } from "next/navigation";
import React from "react";
import { PARTICIPANTS } from "../util";
import { FullImageSlide } from "./FullImageSlide";

export const DynamicNameSlide = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get("q");

  const name = React.useMemo(() => {
    if (!query) return "Bạn";
    return PARTICIPANTS.get(query) || "Bạn";
  }, [query]);

  return (
    <div className="relative flex justify-center items-center">
      <FullImageSlide slideOrder={2} />
      <p className="absolute top-[19.5vh] text-xl sm:top-[20vh]">{name}</p>
    </div>
  );
};
