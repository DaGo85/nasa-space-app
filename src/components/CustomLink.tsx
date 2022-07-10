import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { CustomLinkI } from "../../ts/interfaces/global_interfaces";

export default function CustomLink({ to, children, ...props }: CustomLinkI) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <div
      className={
        isActive ? "shadow-2xl text-primaryLightOn dark:text-primaryDarkOn" : ""
      }
    >
      <Link to={to} {...props}>
        {children}
      </Link>
    </div>
  );
}
