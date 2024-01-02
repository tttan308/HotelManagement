import { Routes, Route } from "react-router-dom";
import PublicLayout from "./layouts/PublicLayout";
import { Home, About, Service, Profile, RoomDetail, Login, Signup, Rooms } from "./pages";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<PublicLayout />}>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/service' element={<Service />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/rooms' element={<Rooms />} />
          <Route path='/rooms/:id' element={<RoomDetail />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
        </Route>
      </Routes>
    </div>
  );
}
