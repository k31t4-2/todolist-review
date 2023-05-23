import React, { useState } from "react";
import { InputTodo } from "./Components/InputTodo";
import { InCompleteTodo } from "./Components/InCompleteTodo";
import { CompleteTodo } from "./Components/CompleteTodo";

const App = () => {

  const [todo,setTodo] = useState("")
  const [InCompleteTodos, setInCompleteTodos] = useState([])
  const [CompleteTodos, setCompleteTodos] = useState([])

  const ChangeTodoText = e => setTodo(e.target.value);

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
      <InputTodo
        todoText={todo}
        onChange={ChangeTodoText}
        onClick={AddTodo}
      />

      <InCompleteTodo
        I={InCompleteTodos}
        OCC={onClickCompleteTodo}
        OCD={onClickDeleteTodo}
      />

      <CompleteTodo
        A = {CompleteTodos}
        B = {onClickReturnTodo}
      />

    </>
  )
}

export default App;
