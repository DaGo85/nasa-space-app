import { useState } from "react";

function Accordion({ item, index }: any) {
  const [isActive, setIsActive] = useState(index === 0 ? true : false);
  return (
    <div key={index + Date.now()} onClick={() => setIsActive(!isActive)}>
      <div>{item.title}</div>
      <div>{isActive ? "-" : "+"}</div>
      {isActive && (
        <span>
          <h3>{item.title}</h3>
          <h4>Author: {item.copyright}</h4>
          <h4>Date: {item.date}</h4>
          <img src={item.url} alt="Astronomic pictur of the day" />
          <p>{item.explanation}</p>
        </span>
      )}
    </div>
  );
}
export default Accordion;
