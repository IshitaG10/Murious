import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Event from "./Pages/Components/EventCards/EVENTS/EVENTS";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="event" element={<Event />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;