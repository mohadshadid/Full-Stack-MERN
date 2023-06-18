import logo from './logo.svg';
import './App.css';
import Search from './component/Search';

import {
  Routes,
  Route,
  Link
} from "react-router-dom";
import Pepole from './component/Pepole';
import Planet from './component/Planet';
function App() {
  return (
    <div className="App">
      <Search />
      <Routes>
        <Route path="/people/:id" element={<Pepole/>}/>
        <Route path="/planets/:id" element={<Planet/>}/>
      </Routes>
    </div>
  );
}

export default App;
