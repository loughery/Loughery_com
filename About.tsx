import { useState } from 'react';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Books from './pages/Books';
import About from './pages/About';
import Writing from './pages/Writing';
import Contact from './pages/Contact';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={setCurrentPage} />;
      case 'books':
        return <Books />;
      case 'about':
        return <About />;
      case 'writing':
        return <Writing />;
      case 'contact':
        return <Contact />;
      default:
        return <Home onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-cream">
      <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
      {renderPage()}
    </div>
  );
}

export default App;
