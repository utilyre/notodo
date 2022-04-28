import { useRef, useState, useEffect } from 'react'

const useTodos = (key) => {
  const isFirstRun = useRef(true)
  const [todos, setTodos] = useState([])

  const add = (note) => {
    const lastId = todos.length > 0 ? todos[todos.length - 1].id : 0

    setTodos([
      ...todos,
      {
        id: lastId + 1,
        note: note,
        done: false,
        createdAt: Date.now(),
      },
    ])
  }

  const del = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const edit = (id, changes) => {
    const todo = todos.find((todo) => todo.id === id)
    const index = todos.indexOf(todo)

    setTodos([
      ...todos.slice(0, index),
      { ...todo, ...changes },
      ...todos.slice(index + 1),
    ])
  }

  useEffect(() => {
    const cache = localStorage.getItem(key)
    if (cache !== null) setTodos(JSON.parse(cache))
  }, [])

  useEffect(() => {
    if (isFirstRun.current) return
    localStorage.setItem(key, JSON.stringify(todos))
  }, [todos])

  useEffect(() => {
    if (isFirstRun.current) isFirstRun.current = false
  }, [])

  return [todos, add, del, edit]
}

export default useTodos
