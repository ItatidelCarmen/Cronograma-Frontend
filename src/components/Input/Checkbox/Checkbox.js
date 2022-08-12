import styles from "./Checkbox.module.css";
export default function Checkbox() {
  return (
    <label className={styles.mycheckbox}>
      <input type="checkbox" />
      <span></span>
    </label>
  );
}
