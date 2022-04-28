import { useState, useEffect } from 'react'

const useTodos = (key) => {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    const cache = localStorage.getItem(key)
    if (cache !== null) setTodos(JSON.parse(cache))
  }, [])

  return [todos]
}

export default useTodos
