import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import WeightChart from "./WeightChart";
import Info from "./Info";
import NoCarb from "./NoCarb";

const weightData = [
  { date: "2020-08-26", weight: 79.7 },
  { date: "2020-08-26", weight: 78.7 },
  { date: "2025-09-11", weight: 79.3 },
  { date: "2026-01-11", weight: 82.7 },
  { date: "2026-01-18", weight: 83.4 },
  { date: "2026-01-19", weight: 82.3 },
];

function App() {
  return (
    <Router>
      <nav
        className="app-nav"
        style={{
          padding: "0.75rem 1.5rem",
          borderBottom: "1px solid #eee",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <Link to="/" style={{ marginRight: "1rem", textDecoration: "none", color: "inherit" }}>
          Weight
        </Link>
        <Link to="/info" style={{ marginRight: "1rem", textDecoration: "none", color: "inherit" }}>
          Info
        </Link>
        <Link to="/no-carb" style={{ textDecoration: "none", color: "inherit" }}>
          No Carbs
        </Link>
      </nav>
      <Routes>
        <Route
          path="/"
          element={
            <div style={{ width: "900px", height: "600px", margin: "0 auto", padding: "1rem" }}>
              <WeightChart dataPoints={weightData} />
            </div>
          }
        />
        <Route path="/info" element={<Info />} />
        <Route path="/no-carb" element={<NoCarb />} />
      </Routes>
    </Router>
  );
}

export default App;
