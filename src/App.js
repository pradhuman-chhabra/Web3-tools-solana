// import logo from './logo.svg';
import "./App.css";
import Header from "./components/Header";
import { Footer } from "./components/Footer";
import Home from "./pages/Home";
import Vision from "./pages/Vision";
import Workflow from "./pages/Workflow";
import Team from "./pages/Team";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Testimonials from "./pages/Testimonials";
function App() {
  return (
    <div className="App">
      {/* <Link /> */}
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<Home />} />
          </Route>
          <Route path="Vision" element={<Vision />} />
          <Route path="Workflow" element={<Workflow />} />
          <Route path="Testimonials" element={<Testimonials />} />
          <Route path="Team" element={<Team />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
