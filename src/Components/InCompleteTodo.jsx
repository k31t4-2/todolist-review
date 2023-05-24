import React from "react";

export const InCompleteTodo = (props) => {

  const style = {
    backgroundColor: "orange",
    minHeight: "200px"
  }

  const {I,OCC,OCD} = props

  return (
          <section style={style}>
        <h1>未完了のTODO</h1>
        <ul>
          {I.map((todo,index) => {
            return (
              <li key={todo}>
                <div>
                  <p>{todo}</p>
                  <button onClick={() => OCC(index)}>完了</button>
                  <button onClick={() => OCD(index)}>削除</button>
                </div>
              </li>
            );
          })}
        </ul>
      </section>
  )
}
