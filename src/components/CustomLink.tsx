import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function CustomLink({ to, children, ...props }: any) {
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
