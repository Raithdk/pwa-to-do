import React, { Suspense, lazy} from 'react';
import './App.css';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Frontpage from './components/Frontpage'


const Todo = lazy(() => import("./components/ToDo"))
const ToDo_Done = lazy(() => import("./components/ToDo_Done"))

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Suspense fallback="Loading">
        <Link to="/">Home</Link> | <Link to="ToDo">Todo</Link> | <Link to="Done">Done</Link>
          <Routes>
            <Route index element={<Frontpage/>} />
            <Route path="/ToDo" element={<Todo/>} />
            <Route path="/Done" element={<ToDo_Done/>} />
          </Routes>
          </Suspense>
      </BrowserRouter>
    
      
    </div>
  );
}

export default App;
