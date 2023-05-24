import React from "react";

export const InputTodo = (props) => {

  const style = {
    backgroundColor: "#c1ffff",
    padding: "10px",
  }

  const {todoText,onChange,onClick,disabled} = props

  return (
      <section style={style}>
        <div>
          <input
            type="text"
            placeholder="TODOを入力"
            value={todoText}
          onChange={onChange}
          disabled={disabled}
          />

          <button disabled={disabled} onClick={onClick}>追加</button>
        </div>
      </section>
  )
}
