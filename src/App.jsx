import { useEffect, useState } from "react";
import styles from "./style.module.css";
const allItems = [
  "Для чого потрібний Virtual DOM у React?",
  "Яка різниця між virtual DOM та shadow DOM?",
  "Яка різниця між state та props?",
  "Яка різниця між класовим та функціональним компонентом?",
  "Які методи життєвого циклу є в React?",
  "Як оновити state у класовому компоненті?",
  "Чому setState асинхронна функція?",
  "Що потрібно зробити, щоб компонент оновився?",
  "Як запобігти зайвому оновленню компонента?",
  "Яка особливість PureComponent?",
  "Для чого потрібні key?",
  "Для чого потрібний компонент Fragment?",
  "Для чого потрібні портали?",
  "Що таке refs?",
  "Що таке context?",
  "Для чого потрібні render props?",
  "Що таке HOCs?",
  "Як реалізувати компонент запобіжника (Error Boundary)?",
  "Які можливості надають хуки?",
  "Які правила використання хуків?",
  "Для чого потрібний useEffect?",
  "Що таке лінива ініціалізація стану в useState та useReducer?",
  "Чим відрізняється useEffect від useLayoutEffect?",
  "Чим useRef відрізняється від createRef?",
  "Для чого потрібні useMemo та useCallback?",
  "Для чого потрібний redux",
  "Що таке redux middleware?",
  "Поясніть redux data flow",
  "Де потрібно робити side effects в redux?",
  "Що таке next() функція в redux middleware?",
  "Для чого потрібні redux селектори",
  "Чим відрізняється action від action creator?",
];

const App = () => {
  const [availableItems, setAvailableItems] = useState([...allItems]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [itemColors, setItemColors] = useState([]);
  const [questionsFinished, setQuestionsFinished] = useState(false);
  const [greenItemCount, setGreenItemCount] = useState(0);

  useEffect(() => {
    const greenCount = itemColors.filter((color) => color === "green").length;
    setGreenItemCount(greenCount);
  }, [itemColors]);

  const handleRandomClick = () => {
    if (availableItems.length === 0) {
      setQuestionsFinished(true);
      return;
    }

    const randomIndex = Math.floor(Math.random() * availableItems.length);
    const randomItem = availableItems[randomIndex];

    const newAvailableItems = [...availableItems];
    newAvailableItems.splice(randomIndex, 1);

    setSelectedItems([...selectedItems, randomItem]);
    setAvailableItems(newAvailableItems);

    setItemColors([...itemColors, "black"]);
  };

  const handleReloud = () => {
    setSelectedItems([]);
    setItemColors([]);
    setQuestionsFinished(false);
    setAvailableItems([...allItems]);
  };

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

  const handleItemClickNormal = (index) => {
    const updatedColors = [...itemColors];
    updatedColors[index] = "black";
    setItemColors(updatedColors);
  };

  return (
    <div className={styles.box}>
      <div>
        <div onClick={handleRandomClick} className={styles.button2}>
          Згенерувати питання
        </div>
        <div onClick={handleReloud} className={styles.button2}>
          Оновити
        </div>
      </div>
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
              <div onClick={() => handleItemClickNormal(index)}>{item}</div>
            </li>
          ))}
        </ul>
        {questionsFinished && (
          <div className={styles.message}>
            Всі питання вже використані. Немає можливості додавати нові.
          </div>
        )}
      </div>
      <div className={styles.counter}>
        <p>Правильні відповіді: {greenItemCount}</p>
      </div>
    </div>
  );
};

export default App;
