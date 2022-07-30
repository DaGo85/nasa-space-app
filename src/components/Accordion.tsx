import { useState } from "react";

// todo: Change color of button for more contrast

function Accordion({ children, item, index }: any) {
  const [isActive, setIsActive] = useState(index === 0 ? true : false);
  return (
    <div
      className={`${
        isActive ? "flex-col" : "flex-row"
      } flex justify-between items-center
       bg-primaryLightContainer text-primaryLightContainerOn 
        dark:bg-secondaryDarkContainer
        dark:text-secondaryDarkContainerOn
        border-primaryLightContainerOn
         dark:border-secondaryDarkContainerOn gap-4 py-4 rounded border-2 px-4`}
      onClick={() => setIsActive(!isActive)}
    >
      <div>{item.title}</div>
      <div
        className="font-bold text-4xl bg-primaryLight dark:bg-primaryDark border-primaryLightContainerOn
         dark:border-secondaryDarkContainerOn w-12 h-12 rounded-full flex justify-center items-center border-2"
      >
        {isActive ? "-" : "+"}
      </div>
      {isActive && children}
    </div>
  );
}
export default Accordion;
