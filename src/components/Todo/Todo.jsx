import { MdDone, MdRemove } from 'react-icons/md'

import styles from './Todo.module.css'
import { padZeros } from '../../utils'

const Todo = ({ todo, delTodo, editTodo }) => {
  const date = new Date(todo.createdAt)

  const year = date.getFullYear()
  const month = padZeros(date.getMonth())
  const day = padZeros(date.getDate())
  const hour = padZeros(date.getHours())
  const minute = padZeros(date.getMinutes())

  const toggleDone = () => {
    editTodo(todo.id, { done: !todo.done })
  }

  return (
    <div className={styles.container}>
      <span className={styles.date}>{`${year}/${month}/${day} ${hour}:${minute}`}</span>
      <MdRemove
        onClick={() => delTodo(todo.id)}
        className={styles.remove}
      />

      <div className={`${styles.card} ${todo.done ? styles.done : ''}`}>
        <h3 className={styles.note}>{todo.note}</h3>
        <MdDone
          onClick={toggleDone}
          className={styles.icon}
        />
      </div>
    </div >
  )
}

export default Todo
