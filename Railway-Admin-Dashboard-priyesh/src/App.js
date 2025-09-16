import './App.css'
import MainDash from './components/MainDash/MainDash';
import RightSide from './components/RigtSide/RightSide';
import Sidebar from './components/Sidebar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TrainsPage from './pages/TrainsPage';
import RoutesPage from './pages/RoutesPage';
import StationsPage from './pages/StationsPage';
import AnalyticsPage from './pages/AnalyticsPage';
import ProfilePage from './pages/ProfilePage';
import TopBar from './components/TopBar/TopBar';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="AppGlass">
          <Sidebar/>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            <TopBar/>
            <Routes>
              <Route path="/" element={<MainDash/>} />
              <Route path="/trains" element={<TrainsPage/>} />
              <Route path="/routes" element={<RoutesPage/>} />
              <Route path="/stations" element={<StationsPage/>} />
              <Route path="/analytics" element={<AnalyticsPage/>} />
              <Route path="/profile" element={<ProfilePage/>} />
            </Routes>
          </div>
          <RightSide/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
