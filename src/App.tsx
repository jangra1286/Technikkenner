import { Routes, Route, BrowserRouter } from "react-router-dom";
import  Home  from "./components/Home/Home";
import  Layout  from "./components/layouts/layout";
import './App.css';
import AktuelleWerbung from "./components/CurrentAdvertising/AktuelleWerbung";

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>} >
          <Route path="/" element={<Home />} />
          <Route path="/AktuelleWerbung" element={<AktuelleWerbung/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
