import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Join from './Component/Join/Join';


function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Join/>}/>
          <Route path="/chat"/>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
