import { Routes, Route, BrowserRouter } from "react-router-dom";

import HomePage from "./components/HomePage";
import JobPosting from "./components/JobPosting";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/JobPosting/:id" element={<JobPosting />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;