import { BrowserRouter, Routes, Route } from 'react-router';
import { MainLayout } from './layouts/main-layout';
import { HomePage } from './pages/home';
import { AboutPage } from './pages/about';
import { ContactPage } from './pages/contact';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
