import { Link } from "react-router-dom";

function DividerButton({ link, name }: any) {
  return (
    <Link to={link} className="flex items-center my-4 w-2/3">
      <span
        aria-hidden="true"
        className="flex-grow bg-lightOutline dark:bg-darkOutline rounded h-[3px]"
      ></span>
      <button
        className="px-4 py-1 text-xl font-bold text-center text-primaryLightContainerOn
           dark:text-primaryDarkContainerOn bg-primaryLightContainer dark:bg-primaryDarkContainer 
          border border-lightOutline dark:border-darkOutline rounded-md shadow-sm hover:bg-primaryLightOn
          dark:hover:bg-primaryDarkOn focus:outline-black"
      >
        {name}
      </button>
      <span
        aria-hidden="true"
        className="flex-grow bg-lightOutline dark:bg-darkOutline rounded  h-[3px]"
      ></span>
    </Link>
  );
}
export default DividerButton;
