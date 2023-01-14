import React from "react";
import HomeScreen from "./screens/HomeScreen/HomeScreen";
import { Route, Routes } from "react-router-dom";
import NotFound from "./components/NotFound/NotFound";
import WeekWeatherDetails from "./components/WeekWeatherDetails/WeekWeatherDetails";
import TodayWeatherDetails from "./components/TodayWeatherDetails/TodayWeatherDetails";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomeScreen />}>
          <Route path="today" element={<TodayWeatherDetails />} />
          <Route path="week" element={<WeekWeatherDetails />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
