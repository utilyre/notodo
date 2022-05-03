import { useRef, useState, useEffect } from 'react'

import styles from './Desk.module.css'
import { Todo } from '../../components'
import { useTodos } from '../../hooks'

const Desk = () => {
  const domTodoTobe = useRef()
  const [todos, addTodo, delTodo, editTodo] = useTodos('todos')
  const [todoTobe, setTodoTobe] = useState('')

  useEffect(() => {
    domTodoTobe.current.focus()
  }, [])

  const onSubmit = (e) => {
    e.preventDefault()

    addTodo(todoTobe)
    setTodoTobe('')
  }

  return (
    <main className={styles.container}>
      <form
        onSubmit={onSubmit}
        className={styles.form}
      >
        <input
          type='text'
          required
          placeholder='Watcha wanna do?'
          ref={domTodoTobe}
          value={todoTobe}
          onChange={(e) => setTodoTobe(e.target.value)}
          className={styles.todoTobe}
        />

        {/* <button */}
        {/*   type='submit' */}
        {/*   className={styles.add} */}
        {/* > */}
        {/*   Add */}
        {/* </button> */}
      </form>

      {todos.map((todo) =>
        <Todo
          key={todo.id}
          todo={todo}
          delTodo={delTodo}
          editTodo={editTodo}
        />
      )}
    </main>
  )
}

export default Desk
