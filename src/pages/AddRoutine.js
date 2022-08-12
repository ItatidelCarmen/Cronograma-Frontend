import Button from "../components/Button/Button";
import Input from "../components/Input/Input";
import Title from "../components/Title/Title";
import styles from "./AddRoutine.module.css";

export default function AddRoutine() {
  return (
    <main className={styles.main}>
      <Title title="Nueva Rutina" />
      <Input label="Título:" />
      <Input label="Estático:" type="checkbox" />
      <Input label="Hora de inicio:" type="time" />
      <Input label="Hora de finalización:" type="time" />
      <Button text="Guardar Tarea" color="success" />
    </main>
  );
}
