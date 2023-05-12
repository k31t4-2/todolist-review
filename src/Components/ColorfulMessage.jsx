import React from "react";

export const ColorfulMessage = (props) => {

  // 毎回、props.ooと書くのは面倒なので、
  // 分割代入でpropsを渡してあげることで、
  // props名だけで使用できる
  const {color,fontSize} = props

  const contentStyle = {
    // color: color,の時は省略できる
    color,
    fontSize
  }

  return (
    <>
      <h1 style={contentStyle}>
        {props.message}
      </h1>
    </>
  )
}
