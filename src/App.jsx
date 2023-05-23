import React,{useState} from "react";

const App = () => {

  const [todo,setTodo] = useState("")
  const [InCompleteTodos, setInCompleteTodos] = useState([
    "うんこ",
    "ハゲ"
  ])
  const [CompleteTodos, setCompleteTodos] = useState([
    "うんち",
    "鼻くそ"
  ])

  const ChangeTodoText = (e) => {
    setTodo(e.target.value)
  }

  const AddTodo = () => {
    // inputがブランクでも追加ボタンを押したらタスクが入力されてしまうので以下の文を追加する
    if (todo === "") return;
    const NewInCompleteTodo = [...InCompleteTodos, todo]
    setInCompleteTodos(NewInCompleteTodo)
    setTodo("")
  }

// 削除ボタン　-------------------
const onClickDeleteTodo = (index) => {
  const newTodo = [...InCompleteTodos]
  newTodo.splice(index,1)

  setInCompleteTodos(newTodo)
}

// 完了ボタン　-------------------
const onClickCompleteTodo = (index) => {
  const newTodo = [...InCompleteTodos]
  newTodo.splice(index, 1)
  setInCompleteTodos(newTodo)

  // 削除したものを完了リストに追加する
  const NewCompleteTodos = [...CompleteTodos, InCompleteTodos[index]]
  setCompleteTodos(NewCompleteTodos)
}

// 完了ボタン　-------------------
  const onClickReturnTodo = (index) => {
    const newTodo = [...CompleteTodos]
    newTodo.splice(index, 1)
    setCompleteTodos(newTodo)

    const NewInCompleteTodo = [...InCompleteTodos, CompleteTodos[index]]
    setInCompleteTodos(NewInCompleteTodo)
}

  return (
    <>
      {/* 追加セクション */}
      <section>
        <div>
          <input
            type="text"
            placeholder="TODOを入力"
            value={todo}
            onChange={ChangeTodoText}
          />

          <button onClick={AddTodo}>追加</button>
        </div>
      </section>

      {/* 未完了のTODO */}
      <section>
        <h1>未完了のTODO</h1>
        <ul>
          {InCompleteTodos.map((todo,index) => {
            return (
              <li key={todo}>
                <div>
                  <p>{todo}</p>
                  <button onClick={() => onClickCompleteTodo(index)}>完了</button>
                  <button onClick={() => onClickDeleteTodo(index)}>削除</button>
                </div>
              </li>
            );
          })}
        </ul>
      </section>

      {/* 完了のTODO */}
      <section>
        <h1>完了のTODO</h1>
        <ul>
          {CompleteTodos.map((todo,index) => {
            return (
              <li key={todo}>
                <div>
                  <p>{todo}</p>
                  <button onClick={() => onClickReturnTodo(index)}>戻す</button>
                </div>
              </li>
              )
          })}
        </ul>
      </section>

    </>
  )
}

export default App;
