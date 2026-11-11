import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Parts from "./pages/Parts";
import Builder from "./pages/Builder";
import Forum from "./pages/Forum";
import NotFound from "./pages/NotFound";

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
