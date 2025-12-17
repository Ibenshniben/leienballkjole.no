import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductList from './components/ProductList';
import InfoSections from './components/InfoSections';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <ProductList />
        <InfoSections />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
