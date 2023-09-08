import { useState } from "react";
import { useSpeechSynthesis } from "react-speech-kit";

const Speech = () => {
  const [highlightedText, setHighlightedText] = useState("");
  const [showSpeechSettings, setShowSpeechSettings] = useState(false);

  const [voiceIndex, setVoiceIndex] = useState(null);
  const onEnd = () => {
    setHighlightedText("");
  };

  const { speak, cancel, speaking, supported, voices } = useSpeechSynthesis({
    onEnd,
  });
  const voice = voices[voiceIndex] || null;
  return (
    <>
      {supported && (
        <div className="speechMenu">
          {!speaking ? (
            <div onClick={() => speak({ text: highlightedText })}>123</div>
          ) : (
            <div onClick={cancel}>123</div>
          )}
          <div onClick={() => setShowSpeechSettings(true)}>123</div>
        </div>
      )}
      <div className="speechSettings">
        <select
          name="voice"
          value={voiceIndex || ""}
          onChange={(e) => {
            setVoiceIndex(e.target.value);
          }}
        >
          {voices.map((option, index) => (
            <option key={option.voiceURI} value={index}>
              {`${option.lang} - ${option.name} ${
                option.default ? "- Default" : ""
              }`}
            </option>
          ))}
        </select>
      </div>
      <div onClick={() => speak({ text: highlightedText, voice })}> </div>
    </>
  );
};

export default Speech;
