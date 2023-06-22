import './App.css';
import Main from './views/Main';
import { Routes, Route } from 'react-router-dom';
import Detail from './views/Detail';
import Update from './views/Update'


function App() {
  return (
    <div className="App">
           <Routes>
             <Route element={<Main/>} path="/" />
             <Route element={<Detail/>} path="/add/:id" />
             <Route element={<Update/>} path="/add/:id/edit" />
             <Route element={<Update/>} path="/add/:id/edit" />
             

         </Routes> 
      
    </div>
  );
}

export default App;
