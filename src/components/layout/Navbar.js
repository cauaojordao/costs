import { Link } from "react-router-dom";
import Container from "./Container";
import styles from "./Navbar.module.css";
import logo from "../../img/costs_logo.png";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Container >
        <Link to="/">
          <img src={logo} alt="logo"></img>
        </Link>
        <ul className={styles.list}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contact">Contato</Link>
          </li>
          <li>
            <Link to="/empresa">Empresa</Link>
          </li>
          <li>
            <Link to="/projects">Projetos</Link>
          </li>
        </ul>
      </Container>
    </nav>
  );
}

export default Navbar;
