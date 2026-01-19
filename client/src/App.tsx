import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WeightChart from "./WeightChart";
// import Home from "./Home"; // <-- commented out

function App() {
  return (
    <Router>
      <Routes>
        {/* Root route */}
        {/* <Route path="/" element={<Home />} /> */}

        {/* /weight route */}
        <Route
          path="/weight"
          element={
            <div style={{ width: "900px", height: "600px", margin: "0 auto" }}>
              <WeightChart
                dataPoints={[
                  { date: "2020-08-26", weight: 79.7 },
                  { date: "2020-08-26", weight: 78.7 },
                  { date: "2025-09-11", weight: 79.3 },
                  { date: "2026-01-11", weight: 82.7 },
                  { date: "2026-01-18", weight: 83.4 },
                  { date: "2026-01-19", weight: 82.7 },
                ]}
              />
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
