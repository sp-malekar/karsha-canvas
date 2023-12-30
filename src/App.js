// src/App.js
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ImageGallery from './components/ImageGallery';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="container mx-auto my-8">
        <ImageGallery />
      </main>
      <Footer />
    </div>
  );
}

export default App;
