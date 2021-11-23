import './App.css';
import { BrowserRouter as  Router,Routes, Route } from "react-router-dom";
// import { Switch } from "react-router-dom";
import EmailSignIn from "./components/EmailSignIn.js";
import EmailTemplat from "./components/EmailTemplat.js";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/SignIn" element={<EmailSignIn/>} />
          <Route exact path="/" element={<EmailTemplat/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
