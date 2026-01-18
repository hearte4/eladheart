import WeightChart from "./WeightChart";
import { useState } from "react";

function App() {
  const [weights] = useState([
    { date: "2020-08-26", weight: 79.7 },
    { date: "2020-08-26", weight: 78.7 },
    { date: "2025-09-11", weight: 79.3 },
    { date: "2026-01-11", weight: 82.7 },
    { date: "2026-01-18", weight: 83.4 },
  ]);

  return (
    <div style={{ width: "900px", height: "600px", margin: "0 auto" }}>
      <WeightChart dataPoints={weights} />
    </div>
  );
}

export default App;
