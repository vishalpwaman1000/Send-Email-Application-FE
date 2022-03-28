import './App.css'
// import { BrowserRouter, Routes, Route } from 'react-router-dom'
import EmailTemplat from './components/EmailTemplat.js'

export default function App() {
  return (
    <div className="App">
      {/* <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<EmailTemplat />} />
        </Routes>
      </BrowserRouter> */}
      <EmailTemplat />
    </div>
  )
}
