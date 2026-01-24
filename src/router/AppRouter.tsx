import { Routes, Route } from 'react-router-dom';
import Home from '@/pages/Home';
import Detail from '@/pages/Detail/Detail';

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/podcast/:id" element={<Detail />} />
    </Routes>
  );
}
