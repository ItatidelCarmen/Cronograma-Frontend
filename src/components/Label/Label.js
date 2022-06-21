import styles from "./Label.module.css";
export default function Label({ label = "label" }) {
  return <label className={styles.label}>{label}</label>;
}
