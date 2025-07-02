import React from 'react'
import Cards from './Compoent/Cards'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Feedback from './Compoent/Feedback'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Cards />} />
        <Route path="/feedback" element={<Feedback />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
