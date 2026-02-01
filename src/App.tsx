import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Updates from './pages/Updates';
import UpdateDetail from './pages/UpdateDetail';
import Darshan from './pages/Darshan';
import Events from './pages/Events';
import EventDetail from './pages/EventDetail';
import Videos from './pages/Videos';
import Satsang from './pages/Satsang';
import Audios from './pages/Audios';
import Meditation from './pages/Meditation';
import Publication from './pages/Publication';
import Calendar from './pages/Calendar';
import Practices from './pages/Practices';
import PracticeDetail from './pages/PracticeDetail';
import Download from './pages/Download';
import Wallpapers from './pages/Images';
import AdminLayout from './layouts/AdminLayout';
import AdminDashboard from './pages/admin/AdminDashboard';
import Inquiries from './pages/admin/Inquiries';
import UpdatesManager from './pages/admin/UpdatesManager';
import DarshanManager from './pages/admin/DarshanManager';
import EventsManager from './pages/admin/EventsManager';
import VideosManager from './pages/admin/VideosManager';
import AudiosManager from './pages/admin/AudiosManager';
import SatsangManager from './pages/admin/SatsangManager';
import PracticesManager from './pages/admin/PracticesManager';
import PublicationsManager from './pages/admin/PublicationsManager';
import Login from './pages/Login';
import { AuthProvider } from './hooks/useAuth';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <AuthProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/login" element={<Login />} />

          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="updates" element={<Updates />} />
            <Route path="updates/:id" element={<UpdateDetail />} />
            <Route path="darshan" element={<Darshan />} />
            <Route path="events" element={<Events />} />
            <Route path="events/:id" element={<EventDetail />} />
            <Route path="videos" element={<Videos />} />
            <Route path="satsang" element={<Satsang />} />
            <Route path="audios" element={<Audios />} />
            <Route path="meditation" element={<Meditation />} />
            <Route path="publication" element={<Publication />} />
            <Route path="calendar" element={<Calendar />} />
            <Route path="practices" element={<Practices />} />
            <Route path="practices/:id" element={<PracticeDetail />} />
            <Route path="download" element={<Download />} />
            <Route path="wallpapers" element={<Wallpapers />} />
          </Route>

          {/* Protected Admin Routes */}
          <Route element={<ProtectedRoute />}>
            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<AdminDashboard />} />
              <Route path="inquiries" element={<Inquiries />} />
              <Route path="updates" element={<UpdatesManager />} />
              <Route path="darshan" element={<DarshanManager />} />
              <Route path="events" element={<EventsManager />} />
              <Route path="videos" element={<VideosManager />} />
              <Route path="audios" element={<AudiosManager />} />
              <Route path="satsang" element={<SatsangManager />} />
              <Route path="practices" element={<PracticesManager />} />
              <Route path="publications" element={<PublicationsManager />} />
              <Route path="*" element={<div className="p-4">Page not found</div>} />
            </Route>
          </Route>

          <Route path="*" element={<div className="min-h-screen flex items-center justify-center font-outfit text-2xl">404 - Page Not Found</div>} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
