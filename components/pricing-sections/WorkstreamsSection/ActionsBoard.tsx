import Image from "next/image";

import arrowDownIcon from "@/assets/img/workstreamsSection/icons/arrow-down.svg";
import CreateSegment from "./CreateSegment";
import DistributeSegment from "./DistributeSegment";
import ConvertSegment from "./ConvertSegment";
import DotPatternBackground from "@/components/ui/DotPatternBackground";
import HalfCircle from "@/components/icons/HalfCircle";

function ActionsBoard() {
  return (
    <div className="relative">
      <div className="px-5 lg:px-20 pb-5 lg:pb-20">
        <div className="flex mt-5 lg:mt-[3.4rem] relative">
          <div className="w-8 lg:w-14 relative flex-shrink-0">
            <Image
              src={arrowDownIcon}
              alt="Arrow Down"
              width={56}
              height={56}
              className="flex-grow flex-shrink-0"
            />
            <div className="absolute top-6 lg:top-14 left-1/2 -translate-x-1/2 w-0.5 lg:w-1 h-[calc(100%-7.5rem)] lg:h-[calc(100%-20rem)] bg-[#33FF9D] z-[-1]">
              <HalfCircle className="absolute -bottom-[0.8rem] lg:bottom-0 -right-[2.3rem] lg:-right-12 text-[#33FF9D] scale-[0.5] lg:scale-100" />
            </div>
          </div>
          <div className="relative z-[2]">
            <CreateSegment />
            <DistributeSegment />
            <ConvertSegment />
          </div>
        </div>
      </div>

      <div className="hidden lg:block opacity-10">
        <DotPatternBackground
          dotStartingWidthPx={1}
          dotWidthPxIncreasePerRow={undefined}
          dotsSeparationPx={undefined}
          dotPatternTopPaddingPx={1600}
        />
      </div>
    </div>
  );
}

export default ActionsBoard;
