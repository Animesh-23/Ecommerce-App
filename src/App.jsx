import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Landing from "./components/Landing";
import Groceries from "./components/Groceries";
import Everything from "./components/Everything";
import Juice from "./components/Juice";
const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/everything" element={<Everything />} />
        <Route path="/juice" element={<Juice />} />
        <Route path="/groceries" element={<Groceries />} />
        <Route path="/" element={<Landing />} />
      </Routes>
    </Router>
  );
};

export default App;
