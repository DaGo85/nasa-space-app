import SkeletonIcon from "./SkeletonIcon";
import SkeletonText from "./SkeletonText";
// todo: replace + with icon component

function SkeletonAccordionApod() {
  return (
    <div
      className="bg-secondaryLightContainer
       dark:bg-secondaryDarkContainer text-secondaryLightContainerOn
        dark:text-secondaryDarkContainerOn border-primaryLightContainerOn
         dark:border-secondaryDarkContainerOn p-4
        flex flex-row justify-between items-center rounded border-2 m-2 w-11/12 h-full"
    >
      <div className="w-2/5 flex items-center  ">
        <SkeletonText />
      </div>
      <SkeletonIcon />
    </div>
  );
}
export default SkeletonAccordionApod;
