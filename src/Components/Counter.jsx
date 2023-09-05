import styles from "../style.module.css";
const Counter = ({ greenItemCount, redItemCount }) => {
  return (
    <>
      <div className={styles.counter}>
        <p>Правильні відповіді: {greenItemCount}</p>
      </div>
      <div className={styles.counter}>
        <p>Помилки: {redItemCount}</p>
      </div>
    </>
  );
};

export default Counter;
