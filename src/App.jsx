import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";
import Recipes from "./pages/Recipes";
import AIRecipe from "./pages/AIRecipe";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/logIn" element={<LogIn />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/makeRecipe" element={<AIRecipe />} />
      </Routes>
    </Router>
  );
}

export default App;
