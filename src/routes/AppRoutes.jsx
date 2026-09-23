import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home"; 
import { Destination } from "../pages/Destination";

export function AppRoutes() { 
  return (
    <Routes>
      <Route path="/" element={ <Home/> } />
      <Route path="/destination" element={ <Destination/> }/> 
    </Routes>
  );
} 