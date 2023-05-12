import React, { useEffect, useState } from "react";
import { ColorfulMessage } from "./Components/ColorfulMessage";

const App = () => {
  // console.log("first");
  const [num, setNum] = useState(0)
  const [faceShowFlag,setFaceShowFlag] = useState(true)

  const ClickPlus = () => {
    setNum(num + 1)
  }
  const ClickMinus = () => {
    setNum(num - 1)
  }
  const ClickTimes = () => {
    setNum(num * 2)
  }
  const ClickReset = () => {
    setNum(0)
  }

  const onClickShowFlag = () => {
    // !マークをつけると反対という意味になるので、true,falseには向いている
    setFaceShowFlag(!faceShowFlag);
  }

  // useEffectを使う理由としては、処理の分離ができたり、
  // 特定の時だけ読み込ませるようにできる。
  useEffect(() => {
    if (num % 3 === 0) {
      // 左辺がfalseの場合、右辺を実行する
      faceShowFlag || setFaceShowFlag(true)
    } else {
      // 左辺がtrueの場合、右辺を実行する
      faceShowFlag && setFaceShowFlag(false)
    }
    // エラーが起きているのは、useEffect内に含まれている関数（faceShowFlag）も[]内に含まなくていいのか？と促しているため
  },[num])


  return (
    <>

      <ColorfulMessage
        color="red"
        message="Hello"
        fontSize="50px"
        />

      <ColorfulMessage
        color="blue"
        message="World"
        fontSize="10px"
      />

      <p>{num}</p>
      <button onClick={ClickPlus}>+</button>
      <button onClick={ClickMinus}>-</button>
      <button onClick={ClickTimes}>x</button>
      <button onClick={ClickReset}>Reset</button>
      <br/>
      <br/>

      {/* &&の使い方を知る */}
      {/* 左辺がtrueの場合、右辺が返される。 */}
      {faceShowFlag && <p>( ´Д`)y━･~~</p>}
      <button onClick={onClickShowFlag}>ON / OFF</button>

    </>
  );
}

export default App;
