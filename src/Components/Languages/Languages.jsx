import style from "./Languages.module.css";
const Languages = ({ availableTheam, setAvailableTheam }) => {
  const handleTheamChange = () => {
    if (availableTheam === "React") {
      setAvailableTheam("JavaScript");
    } else {
      setAvailableTheam("React");
    }
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
          onClick={handleTheamChange}
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
          onClick={handleTheamChange}
        >
          JavaScript
        </div>
      </div>
    </div>
  );
};

export default Languages;