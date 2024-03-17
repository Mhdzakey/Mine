import "./App.css";

import { Routes, Route, Link, NavLink } from "react-router-dom";
import Home from "./components/Home";
import Support from "./components/Support";
import NotFound from "./components/NotFound";
import About from "./components/About";
import MainHeader from "./components/MainHeader";

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/support">Support</NavLink>
          </li>
          <li>
            <NavLink to="/labs">Labs</NavLink>
          </li>
        </ul>
        {/* <ul>
          <li><Link to= "/">Home</Link></li>
          <li><Link to= "/about">About</Link></li>
          <li><Link to= "/support">Support</Link></li>
          <li><Link to= "/labs">Labs</Link></li>
        </ul> */}
      </nav>
      <Routes>
        <Route path="/" element={<MainHeader />}>
          {/* Detault Route */}
          <Route index element={<Home/>}/> 
          <Route path="/support" element={<Support />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
