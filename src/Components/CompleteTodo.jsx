import React from "react";

export const CompleteTodo = (props) => {

  const style = {
    backgroundColor: "skyblue",
    minHeight: "200px"
  }

  const { A,B } = props;

  return (
          <section style={style}>
        <h1>完了のTODO</h1>
        <ul>
          {A.map((todo,index) => {
            return (
              <li key={todo}>
                <div>
                  <p>{todo}</p>
                  <button onClick={() => B(index)}>戻す</button>
                </div>
              </li>
              )
          })}
        </ul>
      </section>
  )
}
