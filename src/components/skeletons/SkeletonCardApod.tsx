import SkeletonIcon from "./SkeletonIcon";
import SkeletonImage from "./SkeletonImage";
import SkeletonText from "./SkeletonText";

function SkeletonCard() {
  return (
    <div
      className="bg-secondaryLightContainer
       dark:bg-secondaryDarkContainer text-secondaryLightContainerOn
        dark:text-secondaryDarkContainerOn border-primaryLightContainerOn
         dark:border-secondaryDarkContainerOn p-4
        flex flex-col justify-center items-center m-2 w-11/12 gap-10 rounded border-2"
    >
      <div className="flex w-5/6 flex-col items-center">
        <div className="hidden w-2/3 md:flex flex-col gap-10 pl-6">
          <SkeletonText />
        </div>
        <SkeletonIcon />
        <div className="hidden w-1/2 md:flex flex-col gap-4 pl-6 mt-4">
          <SkeletonText />
          <SkeletonText />
        </div>
        <hr className="text-primaryLightContainerOn dark:text-secondaryDarkContainerOn w-full mt-4" />
        <div className="flex flex-col w-5/6 gap-10 items-center">
          <SkeletonImage />
        </div>
        <div className="flex flex-col w-5/6 gap-10 items-center mt-8">
          <SkeletonText />
          <SkeletonText />
          <SkeletonText />
          <SkeletonText />
        </div>
      </div>
    </div>
  );
}
export default SkeletonCard;
