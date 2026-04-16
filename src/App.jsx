import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProductGrid from "./components/ProductGrid";
import ProductDetail from "./components/ProductDetail";
import About from "./components/About";
import Footer from "./components/Footer";
import Location from "./components/Location";
import Review from "./components/Review";
import FloatingWhatsApp from "./components/FloatingWhatsapp";

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <FloatingWhatsApp />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <About />
                <ProductGrid />
                <Review />
                <Location />
              </>
            }
          />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
