import Main from "./components/Main";
import './App.scss'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes
} from "react-router-dom";
import Screen2 from "./components/Screens/Screen2/Screen2";
function App() {
  return (
    <div>
        <Router>
          <Routes>
          <Route exact path="/" element={ <Main/>} / >
          <Route path="/upload" element={<Screen2/>} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
