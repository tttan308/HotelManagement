import { Routes, Route } from "react-router-dom";
import PublicLayout from "./layouts/PublicLayout";
import { Home, About, Service, Profile } from "./pages";
import Rooms from "./pages/Rooms";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/rooms" element={<Rooms />} />
        </Route>
      </Routes>
    </div>
  );
}
