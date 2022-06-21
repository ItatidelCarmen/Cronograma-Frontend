import Input from "../components/Input/Input";
import Title from "../components/Title/Title";
import styles from "./AddRoutine.module.css";

export default function AddRoutine() {
  return (
    <main className={styles.main}>
      <Title title="Nueva Rutina" />
      <Input label="Título:" />
    </main>
  );
}
