import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';

import { Outlet } from 'react-router';

export const MainLayout = () => (
  <div className="min-h-screen flex flex-col bg-phimBg">
    <Header />
    <main className="flex-1 w-full max-w-7xl mx-auto px-2 sm:px-4 py-4"><Outlet /></main>
    <Footer />
  </div>
);
