import { BrowserRouter, Routes, Route } from "react-router-dom";
import Todos from "./pages/Todos";
import Detail from "./pages/Detail";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Todos />} />
          <Route path="/:id" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
