import SkeletonImage from "./SkeletonImage";
import SkeletonText from "./SkeletonText";

function SkeletonCard() {
  return (
    <div
      className="rounded-card bg-secondaryLightContainer
       dark:bg-secondaryDarkContainer text-secondaryLightContainerOn
        dark:text-secondaryDarkContainerOn p-4
        flex flex-col justify-center items-center m-2 w-11/12 gap-10"
    >
      <div className="flex w-5/6 flex-col items-center">
        <div className="hidden w-2/3 md:flex flex-col gap-10 pl-6">
          <SkeletonText />
        </div>
        <div className="hidden w-1/2 md:flex flex-col gap-10 pl-6 mt-4">
          <SkeletonText />
          <SkeletonText />
        </div>
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
