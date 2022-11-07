import React, { Suspense, lazy} from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Frontpage from './components/Frontpage'


const Todo = lazy(() => import("./components/Todo"))

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Suspense fallback="Loading">
        <Link to="/">Home</Link> | <Link to="Todo">Todo</Link>
          <Routes>
            <Route index element={<Frontpage/>} />
            <Route path="/Todo" element={<Todo/>} />
          </Routes>
          </Suspense>
      </BrowserRouter>
    
      
    </div>
  );
}

export default App;
