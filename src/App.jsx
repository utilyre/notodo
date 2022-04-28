import { Route, Routes } from 'react-router-dom'

import { Desk } from './pages'

const App = () => {
  return (
    <>
      <main>
        <Routes>
          <Route path='/' element={<Desk />} />
        </Routes>
      </main>
    </>
  )
}

export default App
