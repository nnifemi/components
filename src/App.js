import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import Button from './components/Button';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

function App() {
    const bannerContent = { 
        title: 'Welcome to FashionCentral!', 
        text: 'These are some of our models below', 
        button1Text: 'Shop Now', 
        button1Style: 'primary',
        button2Text: 'Learn More',
        button2Style: 'secondary'
    };
    const galleryContent = { 
        imageUrls: ['https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'https://images.unsplash.com/photo-1512068549487-5e79d74c7fc3?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'https://images.unsplash.com/photo-1521402966881-852a3b2551fc?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'https://images.unsplash.com/photo-1554033842-d4f5ad6b1863?q=80&w=1966&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'] 
    };
  
    return (
        <div className="App">
            <Header />
            <Banner {...bannerContent} />
            <Gallery {...galleryContent} />
            <Footer />
        </div>
    );
}

export default App;