import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
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
import Images from './pages/Images';

function App() {
  return (
    <Router>
      <Routes>
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
          <Route path="images" element={<Images />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
