function ButtonBackgroundCard({ children }: any) {
  return (
    <div className="relative h-[200px] w-[300px] border-2 rounded flex border-tertiaryLightContainerOn dark:border-primaryDarkContainerOn hover:scale-105 ">
      <svg
        className="bg-primaryLight fill-slate-100 absolute z-[1] top-0 left-0"
        id="visual"
        viewBox="0 0 900 600"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
      >
        <rect x="0" y="0" width="900" height="600" fill="#001829"></rect>
        <g fill="none" stroke="#297EA6" stroke-width="4">
          <path
            d="M0 -111.4L25 -34.4L105.9 -34.4L40.5 13.1L65.5 90.1L0 42.5L-65.5 90.1L-40.5 13.1L-105.9 -34.4L-25 -34.4Z"
            transform="translate(792 493)"
          ></path>
          <path
            d="M0 -49.1L11 -15.2L46.7 -15.2L17.8 5.8L28.8 39.7L0 18.7L-28.8 39.7L-17.8 5.8L-46.7 -15.2L-11 -15.2Z"
            transform="translate(678 214)"
          ></path>
          <path
            d="M0 -67L15 -20.7L63.7 -20.7L24.3 7.9L39.4 54.2L0 25.6L-39.4 54.2L-24.3 7.9L-63.7 -20.7L-15 -20.7Z"
            transform="translate(5 554)"
          ></path>
          <path
            d="M0 -69.8L15.7 -21.6L66.4 -21.6L25.4 8.2L41.1 56.5L0 26.7L-41.1 56.5L-25.4 8.2L-66.4 -21.6L-15.7 -21.6Z"
            transform="translate(315 314)"
          ></path>
          <path
            d="M0 -83.1L18.6 -25.7L79 -25.7L30.2 9.8L48.8 67.2L0 31.7L-48.8 67.2L-30.2 9.8L-79 -25.7L-18.6 -25.7Z"
            transform="translate(127 76)"
          ></path>
        </g>
      </svg>
      <div className="z-10 flex flex-row items-center justify-between w-full px-4">
        {children}
      </div>
    </div>
  );
}
export default ButtonBackgroundCard;
