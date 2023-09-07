import { useEffect, useState } from "react";
import styles from "./style.module.css";
import QuastionList from "./Components/QuastionList";
import Buttons from "./Components/Buttons/Buttons";
import Counter from "./Components/Counter/Counter";
import Stream from "./Components/Stream/Stream";
import Languages from "./Components/Languages/Languages";
const ReactQuestions = [
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

const JSQuestions = [
  "Які типи даних присутні в JavaScript?",
  "Які перебираючі методи масивів ви знаєте?",
  "Що таке this?",
  "Що таке прототип об'єкта?",
  "Чим відрізняється функція конструктор та клас?",
  "Що таке Promise?",
  "Для чого потрібна async/await функція?",
  "Як обробляти помилки в async/await функціях?",
  "Як працює прототипне наслідування в JavaScript?",
  "Як створити об'єкт у якому не буде прототипу?",
  "Як перевірити чи є властивість об'єкта особистою властивістю або це властивість прототипу?",
];

const App = () => {
  const [availableTheam, setAvailableTheam] = useState("React");
  const [availableItems, setAvailableItems] = useState(
    availableTheam === "React" ? [...ReactQuestions] : [...JSQuestions]
  );
  const [selectedItems, setSelectedItems] = useState([]);
  const [itemColors, setItemColors] = useState([]);
  const [greenItemCount, setGreenItemCount] = useState(0);
  const [redItemCount, setRedItemCount] = useState(0);
  const [questionsFinished, setQuestionsFinished] = useState(false);

  useEffect(() => {
    const greenCount = itemColors.filter((color) => color === "green").length;
    setGreenItemCount(greenCount);
    const redCount = itemColors.filter((color) => color === "red").length;
    setRedItemCount(redCount);
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

    if (availableTheam === "React") {
      setAvailableItems([...ReactQuestions]);
    } else {
      setAvailableItems([...JSQuestions]);
    }
  };

  return (
    <div className={styles.box}>
      <div style={{ display: "flex" }}>
        <div className={styles.box_buttons}>
          <Buttons
            handleRandomClick={handleRandomClick}
            handleReloud={handleReloud}
          />
          <Counter
            greenItemCount={greenItemCount}
            redItemCount={redItemCount}
          />
        </div>
        <QuastionList
          questionsFinished={questionsFinished}
          selectedItems={selectedItems}
          itemColors={itemColors}
          setItemColors={setItemColors}
        />
      </div>

      <div>
        <Languages
          availableTheam={availableTheam}
          setAvailableTheam={setAvailableTheam}
        />

        <Stream />
      </div>
    </div>
  );
};

export default App;
