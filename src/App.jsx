import { Route, Routes } from 'react-router-dom'

import { Desk } from './pages'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Desk />} />
      </Routes>
    </>
  )
}

export default App
