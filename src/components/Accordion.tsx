import { useState } from "react";

function Accordion({ children, item, index }: any) {
  const [isActive, setIsActive] = useState(index === 0 ? true : false);
  return (
    <div
      className={`${isActive ? "flex-col" : "flex-row"} flex justify-between 
       bg-primaryLightContainer text-primaryLightContainerOn 
        dark:bg-secondaryDarkContainer
        dark:text-secondaryDarkContainerOn
        border-primaryLightContainerOn
         dark:border-secondaryDarkContainerOn gap-4 py-4 rounded border-2 px-4`}
      onClick={() => setIsActive(!isActive)}
    >
      <div>{item.title}</div>
      <div>{isActive ? "-" : "+"}</div>
      {isActive && children}
    </div>
  );
}
export default Accordion;
