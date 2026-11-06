import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Parts from "./pages/Parts.jsx";
import Builder from "./pages/Builder.jsx";
import Forum from "./pages/Forum.jsx";
import NotFound from "./pages/NotFound.jsx";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="parts" element={<Parts />} />
        <Route path="builder" element={<Builder />} />
        <Route path="forum" element={<Forum />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
