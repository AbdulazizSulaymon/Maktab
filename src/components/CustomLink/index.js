import { useResolvedPath, useMatch, Link } from "react-router-dom";

const CustomLink = ({ children, to, child }) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  console.log(resolved, match);
  console.log(children);

  return <Link to={to}>{children}</Link>;
};

export default CustomLink;
