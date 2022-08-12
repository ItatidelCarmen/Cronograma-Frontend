import Label from "../Label/Label";
import Checkbox from "./Checkbox/Checkbox";
import styles from "./Input.module.css";

export default function Input({ label = "label", type = "text" }) {
  // let inputStyle =  input !== "checkbox" ? styles.inputEntrada : styles.toggleCheckbox;
  // let inputStyle;
  // if (input !== "checkbox") {
  //   inputStyle = styles.inputEntrada;
  // } else {
  //   inputStyle = styles.toggleCheckbox;
  // }

  return (
    <div className={`${styles.input}`}>
      <Label label={label} />
      {/* <input type={input} className={inputStyle} /> */}
      {type === "checkbox" ? (
        <Checkbox />
      ) : (
        <input type={type} className={`${styles.inputEntrada}`} />
      )}
    </div>
  );
}
