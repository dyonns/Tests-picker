import styles from "../style.module.css";

const QuastionList = ({
  questionsFinished,
  selectedItems,
  itemColors,
  setItemColors,
}) => {
  const handleItemClickTrue = (index) => {
    const updatedColors = [...itemColors];
    updatedColors[index] = "green";
    setItemColors(updatedColors);
  };

  const handleItemClickFalse = (index) => {
    const updatedColors = [...itemColors];
    updatedColors[index] = "red";
    setItemColors(updatedColors);
  };

  const handleItemClickNeutral = (index) => {
    const updatedColors = [...itemColors];
    updatedColors[index] = "black";
    setItemColors(updatedColors);
  };
  return (
    <div className={styles.list}>
      <h3 className={styles.header}>Обрані елементи:</h3>
      <ul style={{ paddingLeft: 0 }}>
        {selectedItems.map((item, index) => (
          <li
            key={index}
            className={styles.item}
            style={{ color: itemColors[index] }}
          >
            <div
              className={styles.item_true}
              onClick={() => handleItemClickTrue(index)}
            ></div>
            <div
              className={styles.item_false}
              onClick={() => handleItemClickFalse(index)}
            ></div>
            <div onClick={() => handleItemClickNeutral(index)}>{item}</div>
          </li>
        ))}
      </ul>
      {questionsFinished && (
        <div className={styles.message}>
          Всі питання вже використані. Немає можливості додавати нові.
        </div>
      )}
    </div>
  );
};

export default QuastionList;
