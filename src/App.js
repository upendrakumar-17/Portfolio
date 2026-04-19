import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import './layout/Section.css';
import './layout/Subsection.css';
import Home from './pages/Home';
import NotFound from "./pages/NotFound";
import Loading from "./pages/Loading";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/l" element={<Loading/>}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
