import { useEffect, useState } from "react";
import styles from "./style.module.css";
import QuastionList from "./Components/QuastionList";
import Buttons from "./Components/Buttons/Buttons";
import Counter from "./Components/Counter/Counter";
import Stream from "./Components/Stream/Stream";
import Languages from "./Components/Languages/Languages";

const ReactQuestions = [
  "Що таке Redux Thunk, createAsyncThunk, extraReducers?",
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
  "Що таке екземпляр класу",
  "Які типи даних присутні в JavaScript?",
  "Які перебираючі методи масивів ви знаєте?",
  "Що таке this?",
  "Що таке прототип об'єкта?",
  "Чим відрізняється функція конструктор та клас? Що потрібно зробити, щоб метод класу потрапив до його екземпляра?",
  "Що таке Promise?",
  "Для чого потрібна async/await функція?",
  "Як обробляти помилки в async/await функціях?",
  "Як працює прототипне наслідування в JavaScript?",
  "Як створити об'єкт у якому не буде прототипу?",
  "Як перевірити чи є властивість об'єкта особистою властивістю або це властивість прототипу?",
  "Чи є в JavaScript множинне наслідування?",
  "Як заборонити змінювати об'єкт?",
  "Що таке event loop?",
  "Що потрібно зробити, щоб метод класу потрапив до його екземпляра?",
  "Чи можна підмінити контекст виклику стрілочної функції?",
  "Чи можна змінити контекст функції, яку повернув метод bind?",
  "Як можна підмінити контекст виклику функції?",
  "Що таке IIFE?",
  "Що таке NaN?",
  "Яка різниця між null та undefined?",
  "Чим відрізняється строга і нестрога рівність (=== та ==)?",
  "Чому результатом порівняння двох схожих об'єктів є false?",
  "Як перевірити 2 об'єкти на ідентичність?",
  "Як зробити копію об'єкта?",
  "Чим відрізняються змінні var, let та const? ",
  "Що таке підняття (hoisting)? ",
  "Що таке область видимості (Scope)?",
  "Як дізнатися чи є об'єкт масивом?",
  "Як об'єднати масиви?",
  "Як дізнатися чи знаходиться елемент у масиві?",
  "Чим Function Declaration відрізняється від Function Expression?",
  "Яким буде значення змінної var, якщо звернутися до неї до її оголошення?",
  "Чим стрілочна функція відрізняється від звичайної?",
  "Що таке лексичне оточення (Lexical Environment)?  Що є глобальним лексичним оточенням?",
  "Що таке замикання (Closures)? Для чого використовують замикання?",
  "Чи існує аналог arguments для стрілочної функції?",
  "Що таке дескриптори властивостей об'єкта?",
  "Для чого потрібен метод Promise.all?",
  "Для чого потрібен метод Promise.race?",
];

const HTMLQuestions = [
  "Для чого потрібно вказувати DOCTYPE?",
  "Що буде, якщо не вказати DOCTYPE на початку документа?",
  "Для чого потрібні мета-теги?",
  "Чим відрізняється блоковий елемент від рядкового?",
  "Чому деякі символи можуть відображатися у вигляді квадратів?",
  "Які типи заголовків є в HTML?",
  "Що таке семантична верстка?",
  "Що таке потік HTML-документа?",
  "Як підключити JavaScript до сторінки?",
  "Яка різниця між <script>, <script async> та <script defer>?",
  "Яка різниця між reset.css та normalize.css?",
  "Що таке critical CSS?",
  "Що таке специфічність селекторів CSS?",
  "Яка різниця між псевдокласом і псевдоелементом в CSS?",
  "Що робить властивість box-sizing?",
  "Які види позиціонування елементів на сторінці ви знаєте?",
  "Що робить властивість z-index?",
  "Яка різниця між px, em, rem?",
  "Яка різниця між гумовою, адаптивною та респонсивною версткою?",
  "Яка різниця між visibility:hidden та display:none?",
  "Для чого потрібне правило @supports?",
  "Яка різниця між Progressive Enhancement та Graceful Degradation?",
  "Що таке repaint та reflow?",
  "Яка різниця між cookie, sessionStorage та localStorage?",
  "Яка різниця між відносним та абсолютним шляхом?",
  "Коли використовувати <button>, а коли <a>?",
  "Для чого потрібний атрибут type у кнопки?",
  "Для чого потрібний тег <base>?",
  "Яка різниця між checkbox та radio?",
  "Що таке наслідування стилів в CSS?",
  "Що таке каскадність в CSS?",
  "Яка різниця між контентними та декоративними зображеннями?",
  "Чому у <img> та <input> немає псевдоелементів ::before, ::after?",
  "Для чого потрібна функція calc в CSS?",
  "Що таке flex-вісь?",
  "Що таке flex-контейнер та flex-елемент?",
  "Які відмінності у mobile first та desktop first підходів?",
  "Які переваги svg перед png або jpeg?",
  "Яка різниця між rgb, rgba та hex?",
];

const App = () => {
  const [availableTheam, setAvailableTheam] = useState("React");
  const [availableItems, setAvailableItems] = useState(
    availableTheam === "React"
      ? [...ReactQuestions]
      : availableTheam === "JavaScript"
      ? [...JSQuestions]
      : [...HTMLQuestions]
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
    } else if (availableTheam === "JavaScript") {
      setAvailableItems([...JSQuestions]);
    } else if (availableTheam === "HTML") {
      setAvailableItems([...HTMLQuestions]);
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
          setAvailableItems={setAvailableItems}
          ReactQuestions={ReactQuestions}
          JSQuestions={JSQuestions}
          HTMLQuestions={HTMLQuestions}
          setSelectedItems={setSelectedItems}
          setItemColors={setItemColors}
          setQuestionsFinished={setQuestionsFinished}
        />

        <Stream />
        {/* <Speech /> */}
      </div>
    </div>
  );
};

export default App;
