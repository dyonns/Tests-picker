import styles from "./Counter.module.css";
const Counter = ({ greenItemCount, redItemCount }) => {
  return (
    <div className={styles.box}>
      <div className={styles.counter}>
        <p>Правильні відповіді: {greenItemCount}</p>
      </div>
      <div className={styles.counter}>
        <p>Помилки: {redItemCount}</p>
      </div>
    </div>
  );
};

export default Counter;
