import { Routes, Route, BrowserRouter } from "react-router-dom";
import  Home  from "./components/Home";
import  Layout  from "./components/layouts/layout";
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>} >
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
