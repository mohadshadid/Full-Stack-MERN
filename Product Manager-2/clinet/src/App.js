import './App.css';
import Main from './views/Main';
import { Routes, Route } from 'react-router-dom';
import Detail from './views/Detail';


function App() {
  return (
    <div className="App">
           <Routes>
             <Route element={<Main/>} path="/" />
             <Route element={<Detail/>} path="/add/:id" />
         </Routes> 
      
    </div>
  );
}

export default App;
