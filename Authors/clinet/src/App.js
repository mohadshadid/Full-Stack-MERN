import './App.css';
import Main from './views/Main';
import { Routes, Route } from 'react-router-dom';
import AddAuthor from './views/AddAuthor'
import Update from './views/Update';



function App() {
  return (
    <div className="App">

<Routes>
             <Route element={<Main/>} path="/" />
             <Route element={<AddAuthor/>} path="/new" />
             <Route path="/edit/:id" element={<Update />} />
             
         </Routes>
    </div>
  );
}

export default App;
