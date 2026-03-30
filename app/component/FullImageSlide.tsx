import Image from "next/image";
import { SRC_PICTURE } from "../util";

export const FullImageSlide = ({ slideOrder }: { slideOrder: number }) => {
  return (
    <div className="flex justify-center items-center">
      
      {/* 📱 Mobile */}
      <div className="sm:hidden">
        <Image
          src={SRC_PICTURE.full[slideOrder]}
          alt={`full-picture-${slideOrder}`}
          width={500}
          height={500}
          className="object-cover w-full h-auto"
          loading="lazy"
        />
      </div>

      {/* 💻 Desktop */}
      <div className="hidden sm:block">
        <div className="relative w-[500px] aspect-[3/4]">
          <Image
            src={SRC_PICTURE.full[slideOrder]}
            alt={`full-picture-${slideOrder}`}
            fill
            className="object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};