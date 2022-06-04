import styles from "./Title.module.css";
export default function Title({ title = "title" }) {
  return <h2 className={styles.h2}>{title}</h2>;
}
