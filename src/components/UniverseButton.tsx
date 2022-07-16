import { UniverseButtonI } from "../../ts/interfaces/global_interfaces";

const icons = {
  New: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-10 w-10 mr-2"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
      />
    </svg>
  ),
  Info: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-10 w-10 mr-2"
      viewBox="0 0 512 512"
      stroke="currentColor"
      fill="white"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 400c-18 0-32-14-32-32s13.1-32 32-32c17.1 0 32 14 32 32S273.1 400 256 400zM325.1 258L280 286V288c0 13-11 24-24 24S232 301 232 288V272c0-8 4-16 12-21l57-34C308 213 312 206 312 198C312 186 301.1 176 289.1 176h-51.1C225.1 176 216 186 216 198c0 13-11 24-24 24s-24-11-24-24C168 159 199 128 237.1 128h51.1C329 128 360 159 360 198C360 222 347 245 325.1 258z"
      />
    </svg>
  ),
};

function UniverseButton({ setter, text, icon }: any) {
  return (
    <button
      onClick={() => setter()}
      className="inline-flex items-center px-4 py-2 bg-primaryLight dark:bg-primaryDark hover:bg-primaryLight/60
          dark:hover:bg-primaryDark/60 border-primaryLightOn dark:border-primaryDarkOn
          hover:border-primaryDarkOn dark:hover:border-primaryLightOn text-sm font-medium rounded-md "
    >
      {/* @ts-ignore */}
      {icon && icons[icon]}
      {text}
    </button>
  );
}
export default UniverseButton;
