import { useEffect, useRef, useState } from "react";
import style from "./Stream.module.css";

const Stream = () => {
  const [error, setError] = useState();
  const [isEnabled, setEnabled] = useState(false);
  const videoRef = useRef(null);
  const streamRef = useRef(null);

  const startStream = () => {
    navigator.mediaDevices
      .getUserMedia({
        audio: false,
        video: true,
      })
      .then((stream) => {
        streamRef.current = stream;
        videoRef.current.srcObject = streamRef.current;
        videoRef.current.onloadedmetadata = () => videoRef.current.play();
      })
      .catch((err) => {
        setError(err.name);
      });
  };

  const stopStream = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
    }
  };

  useEffect(() => {
    setError(null);
    stopStream();
    if (isEnabled) {
      startStream();
    }
  }, [isEnabled]);

  return (
    <div className={style.box}>
      <button onClick={() => setEnabled(!isEnabled)} className={style.button1}>
        {isEnabled ? "Off" : "ON"}
      </button>
      <video
        playsInline
        muted
        autoPlay
        ref={videoRef}
        // className={!isEnabled && style.off}
      ></video>
      {error && (
        <div className={style.error}>
          Помилка: "{error}"! Потрібен дозвіл для використання камери.
        </div>
      )}
    </div>
  );
};

export default Stream;
