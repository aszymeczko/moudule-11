import styles from "./NavBar.module.scss";
import Container from "../Container/Container";

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <Container>
        <div className={styles.navigation}>
          <a href={"/"}>
            <i className="fa fa-home"></i>
          </a>

          <ul>
            <li>
              <a href={"/"}>Home</a>
            </li>
            <li>
              <a href={"/favorite"}>Favorite</a>
            </li>
            <li>
              <a href={"/about"}>About</a>
            </li>
          </ul>
        </div>
      </Container>
    </nav>
  );
};

export default NavBar;
