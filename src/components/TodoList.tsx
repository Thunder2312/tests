import React from 'react'
import './styles.css'
import type { Todo } from '../model.ts';
import SingleTodo from './SingleTodo.tsx';

interface Props{
    todos:Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}
const TodoList: React.FC<Props> = ({todos,setTodos }: Props) => {
  return (
    <div className="container">
      <div className="todos">
      <span className="todos___heading">
        Active Tasks
      </span>
      {
        todos.map((todo)=> (
          <SingleTodo 
            todo={todo}
            key={todo.id}
            setTodos={setTodos} todos={todos}/>
        ))
      }
      </div>
      <div className="todos remove">
      <span className="todos___heading">
      Completed tasks
      </span>
      </div>
    </div>
  )
}

export default TodoList
