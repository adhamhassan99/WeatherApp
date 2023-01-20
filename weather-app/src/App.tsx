import React from "react";
import HomeScreen from "./screens/HomeScreen/HomeScreen";
import { Route, Routes } from "react-router-dom";
import WeekWeatherDetails from "./components/WeekWeatherDetails/WeekWeatherDetails";
import TodayWeatherDetails from "./components/TodayWeatherDetails/TodayWeatherDetails";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const queryClient = new QueryClient();
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<HomeScreen />}>
            <Route path="today" element={<TodayWeatherDetails />} />
            <Route path="week" element={<WeekWeatherDetails />} />
          </Route>
        </Routes>
      </QueryClientProvider>
    </div>
  );
}

export default App;
