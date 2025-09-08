import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
}

const Layout = ({ children, title = "DimDim Sum - Dim Sum Halal Terlezat", description = "Menyajikan dim sum berkualitas dengan cita rasa autentik dan halal. Dibuat dengan bahan-bahan segar pilihan untuk kepuasan pelanggan." }: LayoutProps) => {
  return (
    <>
      {/* Meta tags would typically be handled by a head manager in a real app */}
      <div className="min-h-screen bg-background flex flex-col">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;