
import { Routes, Route } from "react-router-dom";
import TopBar from "./components /topbar/TopBar";
import HomePage from "./pages/home/Home"
import Register from "./pages/register/Register";
import Login from "./pages/login /Login"
import Single from "./pages/single/Single"
import Write from "./pages/write/Write";
import Settings from "./components /settings/Settings";

function App() {
  const currentUser = false;

  return (
    <div>
      <TopBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/posts" element={<HomePage />} />
        <Route
          path="register" // Removed the leading slash
          element={currentUser ? <HomePage /> : <Register />}
        />
        <Route path="/login" element={currentUser ? <HomePage /> : <Login />} />
        <Route path="/post/:id" element={<Single />} />
        <Route path="/write" element={currentUser ? <Write /> : <Login />} />
        <Route
          path="/settings"
          element={currentUser ? <Settings /> : <Login />}
        />
      </Routes>
    </div>
  );
}

export default App;
