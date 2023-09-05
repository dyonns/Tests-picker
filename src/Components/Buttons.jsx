import styles from "../style.module.css";

const Buttons = ({ handleRandomClick, handleReloud }) => {
  return (
    <div>
      <div onClick={() => handleRandomClick()} className={styles.button2}>
        Згенерувати питання
      </div>
      <div onClick={() => handleReloud()} className={styles.button2}>
        Оновити
      </div>
    </div>
  );
};

export default Buttons;
