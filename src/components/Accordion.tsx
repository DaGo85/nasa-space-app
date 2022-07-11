import { useState } from "react";

function Accordion({ item, index }: any) {
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
      {isActive && (
        <span className="items-center flex flex-col gap-4">
          <hr className="text-primaryLightContainerOn dark:text-secondaryDarkContainerOn w-full" />
          {item.copyright ? <h4>Author: {item.copyright}</h4> : <div></div>}
          <h4>Date: {item.date}</h4>
          <img src={item.url} alt="Astronomic picture of the day" />
          <p>{item.explanation}</p>
        </span>
      )}
    </div>
  );
}
export default Accordion;
