import { SideNav, SideNavItem } from '@leafygreen-ui/side-nav';
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function Navigation ({ className }) {
  const location = useLocation();

  return (
    <SideNav aria-label="Navigation Bar" className={className}>
      <SideNavItem aria-label="Home" as={Link} active={location.pathname === "/"} to="/">Home</SideNavItem>
      <SideNavItem aria-label="Page 1" as={Link} active={location.pathname === "/app/page1"} to="/app/page1">Short URLs</SideNavItem>
      <SideNavItem aria-label="Logout" as={Link} active={location.pathname === "/logout"} to="/logout">Logout</SideNavItem>
    </SideNav>
  );
}