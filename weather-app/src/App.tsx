import React from "react";
import HomeScreen from "./screens/HomeScreen/HomeScreen";
import { Route, Routes } from "react-router-dom";
import NotFound from "./components/NotFound/NotFound";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomeScreen />}>
          <Route path="today" element={<NotFound />} />
          <Route path="week" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
