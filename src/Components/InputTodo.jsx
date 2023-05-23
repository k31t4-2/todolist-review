import React from "react";

export const InputTodo = (props) => {

  const {todoText,onChange,onClick} = props
  return (
      <section>
        <div>
          <input
            type="text"
            placeholder="TODOを入力"
            value={todoText}
            onChange={onChange}
          />

          <button onClick={onClick}>追加</button>
        </div>
      </section>
  )
}
