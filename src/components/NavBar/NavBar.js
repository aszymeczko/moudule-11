import styles from "./NavBar.module.scss";
import Container from "../Container/Container";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  const links = [
    { name: "Home", route: "/" },
    { name: "Favorite", route: "/favorite" },
    { name: "About", route: "/about" },
  ];
  return (
    <nav className={styles.navbar}>
      <Container>
        <div className={styles.navigation}>
          <Link to={"/"}>
            <i className="fa fa-home"></i>
          </Link>

          <ul>
            {links.map((link) => (
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? styles.linkActive : undefined
                  }
                  to={link.route}
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </nav>
  );
};

export default NavBar;
