
import './App.css';
import {Routes,Route,Link} from "react-router-dom";
import Home from './components/Home'
import Numb from './components/Numb'


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:num" element={<Numb />} />
        <Route path="/:num/:color1/:color2" element={<Numb />} />

      </Routes>
    </div>
  );
}

export default App;
