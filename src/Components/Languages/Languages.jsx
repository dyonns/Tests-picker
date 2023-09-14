import style from "./Languages.module.css";
const Languages = ({
  availableTheam,
  setAvailableTheam,
  setAvailableItems,
  ReactQuestions,
  JSQuestions,
  HTMLQuestions,
  setSelectedItems,
  setItemColors,
  setQuestionsFinished,
}) => {
  const handleReactTheam = () => {
    setAvailableTheam("React");
    setAvailableItems([...ReactQuestions]);
    setSelectedItems([]);
    setItemColors([]);
    setQuestionsFinished(false);
  };
  const handleJSTheam = () => {
    setAvailableTheam("JavaScript");
    setAvailableItems([...JSQuestions]);
    setSelectedItems([]);
    setItemColors([]);
    setQuestionsFinished(false);
  };
  const handleHTMLTheam = () => {
    setAvailableTheam("HTML");
    setAvailableItems([...HTMLQuestions]);
    setSelectedItems([]);
    setItemColors([]);
    setQuestionsFinished(false);
  };

  return (
    <div className={style.box}>
      <div className={style.language}>
        <div
          className={
            availableTheam === "React"
              ? style.languageActive
              : style.languageNone
          }
          onClick={handleReactTheam}
        >
          React
        </div>
      </div>
      <div className={style.language}>
        <div
          className={
            availableTheam === "JavaScript"
              ? style.languageActive
              : style.language
          }
          onClick={handleJSTheam}
        >
          JavaScript
        </div>
      </div>
      <div className={style.language}>
        <div
          className={
            availableTheam === "HTML"
              ? style.languageActive
              : style.languageNone
          }
          onClick={handleHTMLTheam}
        >
          HTML/CSS
        </div>
      </div>
    </div>
  );
};

export default Languages;
