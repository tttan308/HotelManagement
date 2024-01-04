import { Routes, Route, useLocation, useEffect, useState } from "react-router-dom";
import PublicLayout from "./layouts/PublicLayout";

import { TailSpin } from 'react-loader-spinner';
import { Home, About, Service, Profile, RoomDetail, Login, Signup } from "./pages";
import Rooms from "./pages/Rooms";


export default function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <div>
      {loading && (
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh'
        }}>
          <TailSpin
            type="TailSpin"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={500} //3 secs
          />
        </div>
      )}

      <Routes>
        <Route path='/' element={<PublicLayout />}>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/service' element={<Service />}
          <Route path='/profile' element={<Profile />} />
          <Route path='/rooms' element={<Rooms />} />
          <Route path='/rooms/:id' element={<RoomDetail />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} /> */}
          <Route path='/contact' element={<Contact />} />
        </Route>
      </Routes>
    </div>
  );
}