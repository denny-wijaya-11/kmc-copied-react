import React, { useState } from 'react';
import './App.css';

function App() {
  // Logika untuk Mobile Nav (menggantikan script.js)
  const [isNavOpen, setIsNavOpen] = useState(false);

  // Logika untuk Portfolio Filter (menggantikan script.js)
  const [activeFilter, setActiveFilter] = useState('all');

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleFilterClick = (filterName) => {
    setActiveFilter(filterName);
  };

  return (
    <>
      <header className="site-header">
        <div className="container header-inner">
          <a className="logo" href="#" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <img src="/images/logo-removebg-preview.png" alt="Kreasi Mitra Cimanggu Logo" height="40" style={{ borderRadius: '4px' }} />
            Kreasi Mitra Cimanggu
          </a>
          <nav className="main-nav" id="mainNav" style={{ display: isNavOpen ? 'block' : '' }}>
            <ul>
              <li><a href="#">Beranda</a></li>
              <li><a href="#layanan">Layanan</a></li>
              <li><a href="#material">Material</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="https://wa.me/6289530467043" target="_blank" rel="noopener noreferrer">Cara Pemesanan</a></li>
              <li><a href="#kontak">Kontak</a></li>
            </ul>
          </nav>
          <button className="nav-toggle" id="navToggle" aria-label="Toggle menu" onClick={toggleNav}>☰</button>
        </div>
      </header>

      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-content">
            <p className="eyebrow">JASA POTONG CNC ROUTER & LASER CUTTING</p>
            <h1>POTONG PRESISI <span className="accent">HASIL MAKSIMAL</span></h1>
            <p className="lead">Melayani pemotongan berbagai material dengan teknologi CNC Router dan Laser Cutting modern untuk hasil yang rapi, cepat, dan akurat.</p>
            <div className="hero-cta">
              <a className="btn btn-primary" href="#kontak">KONSULTASI GRATIS</a>
              <a className="btn btn-outline" href="#kontak">KIRIM DESAIN SEKARANG</a>
            </div>
          </div>
          <div className="hero-media">
            <div className="hero-image" style={{ backgroundImage: "url('/images/CNC Router.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
            </div>
          </div>
        </div>
        <div className="hero-gallery container">
          <div className="thumb" style={{ backgroundImage: "url('/images/CNC Router.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
          <div className="thumb" style={{ backgroundImage: "url('/images/Laser Cutting.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
          <div className="thumb" style={{ backgroundImage: "url('/images/acrilyc.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
        </div>
      </section>

      <section className="features container">
        <div className="feature">
          <div className="feature-icon">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="3"></circle><line x1="12" y1="2" x2="12" y2="5"></line><line x1="12" y1="19" x2="12" y2="22"></line><line x1="2" y1="12" x2="5" y2="12"></line><line x1="19" y1="12" x2="22" y2="12"></line></svg>
          </div>
          <h4>PRESISI TINGGI</h4>
          <p>Menggunakan mesin CNC & Laser modern dengan akurasi maksimal.</p>
        </div>
        <div className="feature">
          <div className="feature-icon">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
          </div>
          <h4>PENGERJAAN CEPAT</h4>
          <p>Estimasi jelas dan tepat waktu sesuai kebutuhan Anda.</p>
        </div>
        <div className="feature">
          <div className="feature-icon">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>
          </div>
          <h4>HARGA KOMPETITIF</h4>
          <p>Harga bersaing untuk kualitas terbaik di kelasnya.</p>
        </div>
        <div className="feature">
          <div className="feature-icon">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
          </div>
          <h4>BISA CUSTOM</h4>
          <p>Melayani custom desain dari satuan hingga produksi massal.</p>
        </div>
        <div className="feature">
          <div className="feature-icon">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
          </div>
          <h4>TIM BERPENGALAMAN</h4>
          <p>Dikerjakan oleh tenaga profesional berpengalaman dan terpercaya.</p>
        </div>
        <div className="feature">
          <div className="feature-icon">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
          </div>
          <h4>KONSULTASI GRATIS</h4>
          <p>Bantu desain hingga file siap produksi secara gratis.</p>
        </div>
      </section>

      <section id="layanan" className="services container">
        <div className="section-header">
          <h2 className="section-title">LAYANAN <span className="accent">KAMI</span></h2>
          <p className="section-sub">Solusi lengkap untuk kebutuhan cutting dan desain Anda</p>
        </div>
        <div className="service-cards">
          <article className="service-card" style={{ backgroundImage: "url('/images/CNC router cutting.png')" }}>
            <div className="service-card-overlay">
              <div className="service-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
              </div>
              <h3>CNC ROUTER CUTTING</h3>
              <ul>
                <li>Furniture Custom</li>
                <li>Partisi Ruangan</li>
                <li>Interior Komersial</li>
                <li>Signage</li>
                <li>Dekorasi Dinding</li>
              </ul>
            </div>
          </article>
          <article className="service-card" style={{ backgroundImage: "url('/images/Laser Cutting.png')" }}>
            <div className="service-card-overlay">
              <div className="service-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
              </div>
              <h3>LASER CUTTING</h3>
              <ul>
                <li>Acrylic Cutting</li>
                <li>MDF Cutting</li>
                <li>Plywood Cutting</li>
                <li>PVC Board Cutting</li>
                <li>Ornamen Custom</li>
              </ul>
            </div>
          </article>
          <article className="service-card" style={{ backgroundImage: "url('/images/Proses design CAD.png')" }}>
            <div className="service-card-overlay">
              <div className="service-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>
              </div>
              <h3>JASA DESAIN CAD</h3>
              <ul>
                <li>File CNC</li>
                <li>Vector Design</li>
                <li>Gambar Produksi</li>
                <li>Optimasi Material</li>
              </ul>
            </div>
          </article>
        </div>
      </section>

      <section id="material" className="materials container">
        <h2 className="section-title">MATERIAL YANG DAPAT DIPROSES</h2>
        <p className="section-sub">Berbagai pilihan material untuk kebutuhan Anda</p>
        <div className="material-grid">
          <div className="mat">MDF</div>
          <div className="mat">Multiplex</div>
          <div className="mat">Plywood</div>
          <div className="mat">Acrylic</div>
          <div className="mat">PVC Board</div>
          <div className="mat">Polycarbonate</div>
        </div>
      </section>

      <section id="portfolio" className="portfolio container">
        <h2 className="section-title">HASIL PEKERJAAN KAMI</h2>
        <p className="section-sub">Beberapa hasil project yang telah kami kerjakan</p>
        <div className="portfolio-filters">
          <button className={`filter ${activeFilter === 'all' ? 'active' : ''}`} onClick={() => handleFilterClick('all')}>Semua</button>
          <button className={`filter ${activeFilter === 'furniture' ? 'active' : ''}`} onClick={() => handleFilterClick('furniture')}>Furniture Custom</button>
          <button className={`filter ${activeFilter === 'interior' ? 'active' : ''}`} onClick={() => handleFilterClick('interior')}>Interior</button>
          <button className={`filter ${activeFilter === 'laser' ? 'active' : ''}`} onClick={() => handleFilterClick('laser')}>Laser Cutting</button>
        </div>
        <div className="portfolio-grid" id="portfolioGrid">
          { (activeFilter === 'all' || activeFilter === 'furniture') && (
            <div className="port-item" data-type="furniture" style={{ backgroundImage: "url('/images/Rak kabinet custom.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
          )}
          { (activeFilter === 'all' || activeFilter === 'interior') && (
            <div className="port-item" data-type="interior" style={{ backgroundImage: "url('/images/interior.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', gridColumn: '1 / -1', height: '400px' }}></div>
          )}
          { (activeFilter === 'all' || activeFilter === 'laser') && (
            <div className="port-item" data-type="laser" style={{ backgroundImage: "url('/images/Laser Cutting.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
          )}
          { (activeFilter === 'all' || activeFilter === 'furniture') && (
            <div className="port-item" data-type="furniture" style={{ backgroundImage: "url('/images/Partisi ruangan.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
          )}
          { (activeFilter === 'all' || activeFilter === 'laser') && (
            <div className="port-item" data-type="laser" style={{ backgroundImage: "url('/images/Produk2.jpeg')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
          )}
        </div>
        <div className="portfolio-cta">
          <a className="btn" href="#portfolio">LIHAT PORTFOLIO LENGKAP</a>
        </div>
      </section>

      <footer id="kontak" className="site-footer">
        <div className="container footer-inner">
          <div>
            <h3>Kreasi Mitra Cimanggu</h3>
            <p>Jasa potong CNC Router & Laser Cutting — Siap bantu proyek Anda</p>
          </div>
          <div>
            <h4>Lokasi</h4>
            <div style={{ marginTop: '10px', borderRadius: '8px', overflow: 'hidden' }}>
              <iframe src="https://maps.google.com/maps?q=Jl.%20Melati%20No.%2032&t=&z=15&ie=UTF8&iwloc=&output=embed" width="100%" height="150" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              <a href="https://maps.app.goo.gl/Ej9jbZxtB7WyXGGEA" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)', textDecoration: 'none', fontWeight: 600 }}>📍 Buka di Google Maps</a>
            </p>
          </div>
          <div>
            <h4>Kontak</h4>
            <p>WhatsApp: <a href="https://wa.me/6289530467043" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)', textDecoration: 'none', fontWeight: 600 }}>+62 895-3046-7043</a></p>
          </div>
        </div>
        <div className="copyright">© 2026 Kreasi Mitra Cimanggu. All rights reserved.</div>
      </footer>
    </>
  );
}

export default App;
