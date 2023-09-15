import { useState } from 'react'
import './App.css'
import List from './components/List'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Create from './components/Create'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <h1>TODO 📝</h1>
      <a href="/list">List</a><br />
      <a href="/create">Create</a>

      <Routes>

        <Route exact path="/list" element={<List />} />
        <Route exact path="/create" element={<Create />} />
      </Routes>
    </Router>
  )
}

export default App
