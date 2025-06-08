import React from 'react'
import type { Todo } from '../model.ts'
import {AiFillEdit} from 'react-icons/ai'
type Props = {
    todo: Todo,
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}
const SingleTodo = ({todo,todos,setTodos}: Props) => {
  return (
    <form className='todos__single'>
        <span className='todos__single--text'>{todo.todo}</span>

        <div>
            <span className='icon'>
                <AiFillEdit/>
            </span>
            <span></span>
            <span></span>
        </div>

    </form>
  )
}

export default SingleTodo
