function ToolBar({ handleDate }: any) {
  return (
    <div className="flex flex-row items-between justify-between">
      <div className="flex items-center justify-center">
        <div
          className="inline-flex shadow-md hover:shadow-lg focus:shadow-lg"
          role="toolbar"
        >
          <button
            onClick={() => handleDate(0)}
            className="rounded-l inline-block px-6 py-2.5 bg-secondaryLightContainer dark:bg-tertiary text-secondaryLightContainerOn dark:text-tertiaryOn font-medium text-xs leading-tight uppercase hover:bg-lightOutline dark:hover:bg-darkOutline focus:bg-lightOutline dark:focus:bg-darkOutline focus:outline-none focus:ring-0 active:bg-backgroundLight dark:active:bg-backgroundDark transition duration-150 ease-in-out"
          >
            1
          </button>
          <button
            onClick={() => handleDate(1)}
            className=" inline-block px-6 py-2.5 bg-secondaryLightContainer dark:bg-tertiary text-secondaryLightContainerOn dark:text-tertiaryOn font-medium text-xs leading-tight uppercase hover:bg-lightOutline dark:hover:bg-darkOutline focus:bg-lightOutline dark:focus:bg-darkOutline focus:outline-none focus:ring-0 active:bg-backgroundLight dark:active:bg-backgroundDark transition duration-150 ease-in-out"
          >
            2
          </button>
          <button
            onClick={() => handleDate(2)}
            className=" inline-block px-6 py-2.5 bg-secondaryLightContainer dark:bg-tertiary text-secondaryLightContainerOn dark:text-tertiaryOn font-medium text-xs leading-tight uppercase hover:bg-lightOutline dark:hover:bg-darkOutline focus:bg-lightOutline dark:focus:bg-darkOutline focus:outline-none focus:ring-0 active:bg-backgroundLight dark:active:bg-backgroundDark transition duration-150 ease-in-out"
          >
            3
          </button>
          <button
            onClick={() => handleDate(3)}
            className=" inline-block px-6 py-2.5 bg-secondaryLightContainer dark:bg-tertiary text-secondaryLightContainerOn dark:text-tertiaryOn font-medium text-xs leading-tight uppercase hover:bg-lightOutline dark:hover:bg-darkOutline focus:bg-lightOutline dark:focus:bg-darkOutline focus:outline-none focus:ring-0 active:bg-backgroundLight dark:active:bg-backgroundDark transition duration-150 ease-in-out"
          >
            4
          </button>
          <button
            onClick={() => handleDate(4)}
            className=" inline-block px-6 py-2.5 bg-secondaryLightContainer dark:bg-tertiary text-secondaryLightContainerOn dark:text-tertiaryOn font-medium text-xs leading-tight uppercase hover:bg-lightOutline dark:hover:bg-darkOutline focus:bg-lightOutline dark:focus:bg-darkOutline focus:outline-none focus:ring-0 active:bg-backgroundLight dark:active:bg-backgroundDark transition duration-150 ease-in-out"
          >
            5
          </button>
          <button
            onClick={() => handleDate(5)}
            className=" inline-block px-6 py-2.5 bg-secondaryLightContainer dark:bg-tertiary text-secondaryLightContainerOn dark:text-tertiaryOn font-medium text-xs leading-tight uppercase hover:bg-lightOutline dark:hover:bg-darkOutline focus:bg-lightOutline dark:focus:bg-darkOutline focus:outline-none focus:ring-0 active:bg-backgroundLight dark:active:bg-backgroundDark transition duration-150 ease-in-out"
          >
            6
          </button>
          <button
            onClick={() => handleDate(6)}
            className=" rounded-r inline-block px-6 py-2.5 bg-secondaryLightContainer dark:bg-tertiary text-secondaryLightContainerOn dark:text-tertiaryOn font-medium text-xs leading-tight uppercase hover:bg-lightOutline dark:hover:bg-darkOutline focus:bg-lightOutline dark:focus:bg-darkOutline focus:outline-none focus:ring-0 active:bg-backgroundLight dark:active:bg-backgroundDark transition duration-150 ease-in-out"
          >
            7
          </button>
        </div>
      </div>
    </div>
  );
}
export default ToolBar;
