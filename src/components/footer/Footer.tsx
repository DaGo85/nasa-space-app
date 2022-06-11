function Footer() {
  return (
    <footer className="w-screen h-24 bg-gradient-to-r from-card to-text flex flex-col items-center justify-center absolute bottom-0 gap-2">
      <h5 className="text-md">
        This App was created by{" "}
        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-para hover:text-but"
        >
          {" "}
          D. Goergens
        </a>{" "}
      </h5>
      <div className="flex flex-col md:flex-row gap-1 text-xs">
        <div className="font-bold ">
          A challenge from{" "}
          <a
            href="https://www.frontendmentor.io/home"
            target="_blank"
            rel="noopener noreferrer"
            className="text-para hover:text-but"
          >
            {" "}
            Frontend Mentor
          </a>
          .
        </div>{" "}
        <div>
          The code can be found here:{" "}
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-para hover:text-but"
          >
            {" "}
            Github
          </a>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
