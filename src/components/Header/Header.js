import ButtonHeader from "./ButtonHeader";
import Title from "../Title/Title";
import { FaPlusSquare, FaBars } from "react-icons/fa";
import styles from "./Header.module.css";
export default function Header() {
  return (
    <header className={styles.cabecera}>
      <Title title="Rutinas" />
      <div className={styles.grupoBotones}>
        <ButtonHeader title="Menú">
          <FaBars />
        </ButtonHeader>
        <ButtonHeader title="Add">
          <FaPlusSquare />
        </ButtonHeader>
      </div>
    </header>
  );
}
