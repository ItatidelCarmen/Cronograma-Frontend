import Label from "../Label/Label";
import styles from "./Input.module.css";

export default function Input({ label = "label", input = "checkbox" }) {
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
      <input
        type={input}
        className={`${styles.inputEntrada} ${styles.toggleCheckbox}`}
        // className={
        //   input !== "checkbox" ? styles.inputEntrada : styles.toggleCheckbox
        // }
      />
      <div class={styles.toggleSwitch}></div>
    </div>
  );
}
