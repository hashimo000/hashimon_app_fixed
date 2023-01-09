/*eslint react-hooks/exhaustive-deps:off*/
import React, { useState } from "react";
import "./styles.css";

export const App = () => {
  const [faceShowFlag2, setFaceShowFlag2] = useState(false);
  const [faceShowFlag3, setFaceShowFlag3] = useState(false);
  const [faceShowFlag4, setFaceShowFlag4] = useState(false);
  const [faceShowFlag5, setFaceShowFlag5] = useState(false);
  const [faceShowFlag6, setFaceShowFlag6] = useState(false);
  const [faceShowFlag7, setFaceShowFlag7] = useState(false);
  const [faceShowFlag8, setFaceShowFlag8] = useState(false);
  const onClickCountUp = () => {
    var num = Math.floor(Math.random() * 21);
    if (num <= 10) {
      faceShowFlag2 || setFaceShowFlag2(true);
    } else {
      faceShowFlag2 && setFaceShowFlag2(false);
    }
    console.log(num);
    if (num === 11) {
      faceShowFlag3 || setFaceShowFlag3(true);
    } else {
      faceShowFlag3 && setFaceShowFlag3(false);
    }
    if (num === 12) {
      faceShowFlag4 || setFaceShowFlag4(true);
    } else {
      faceShowFlag4 && setFaceShowFlag4(false);
    }
    if (num > 15) {
      faceShowFlag5 || setFaceShowFlag5(true);
    } else {
      faceShowFlag5 && setFaceShowFlag5(false);
    }
    if (num === 14) {
      faceShowFlag6 || setFaceShowFlag6(true);
    } else {
      faceShowFlag6 && setFaceShowFlag6(false);
    }
    if (num === 13) {
      faceShowFlag7 || setFaceShowFlag7(true);
    } else {
      faceShowFlag7 && setFaceShowFlag7(false);
    }
    if (num === 15) {
      faceShowFlag8 || setFaceShowFlag8(true);
    } else {
      faceShowFlag8 && setFaceShowFlag8(false);
    }
  };

  return (
    <>
      <h1 style={{ color: "red" }}>ボタンを押してアイテムをゲットしろ！！！</h1>
      <h2 style={{ color: "yellow" }}>☟☟☟</h2>
      <button onClick={onClickCountUp}>
        <p>プッシュ！</p>
      </button>
      <br />
      {faceShowFlag2 && <p style={{ color: "white" }}>石ころをゲット</p>}
      {faceShowFlag3 && <h2 style={{ color: "silver" }}>銀をゲット！！！</h2>}
      {faceShowFlag4 && (
        <h1 style={{ color: "gold" }}>金をゲット！！！！！！！！！！！</h1>
      )}
      {faceShowFlag5 && <p style={{ color: "gray" }}>鉄鉱石をゲット</p>}
      {faceShowFlag6 && <h3 style={{ color: "orange" }}>銅をゲット！！</h3>}
      {faceShowFlag7 && (
        <h2 style={{ color: "purple" }}>黒曜石をゲット！！！！！！</h2>
      )}
      {faceShowFlag8 && <p>ハズレ(-_-)zzz</p>}
    </>
  );
};
export default App;
