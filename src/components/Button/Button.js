import Label from "../Label/Label";
import styles from "./Button.module.css";

export default function Button({ text = "llena texto", color = "success" }) {
  const style = () => {
    if (color === "success") {
      return styles.colorSuccess;
    }
    else if (color === "danger") {
      return styles.colorDanger;
    } else {
      return "";
    }
  };
  return (
    <button className={`${styles.button} ${style()}`}>
      <Label label={text} />
    </button>
  );
}
