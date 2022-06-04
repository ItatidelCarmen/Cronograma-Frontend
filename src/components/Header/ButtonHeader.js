import styles from "./ButtonHeader.module.css";
export default function ButtonHeader({
  children,
  title = "Debes poner un subtitulo",
}) {
  return (
    <nav className={styles.nav}>
      {children}
      <span className={styles.titleButton}>{title}</span>
    </nav>
  );
}
