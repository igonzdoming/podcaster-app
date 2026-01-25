import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Detail from '../pages/Detail/Detail';
import NotFound from '@/pages/NotFound';

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/podcast/:id" element={<Detail />} />
      <Route path="/podcast/:id/episode/:episodeId" element={<Detail />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
