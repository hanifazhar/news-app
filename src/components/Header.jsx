import { useState } from 'react';
import logo from '../assets/img/logo.png';
import book1 from '../assets/img/book1.jpg';
import book2 from '../assets/img/book2.jpg';
import book3 from '../assets/img/book3.jpg';

const Header = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [book1, book2, book3];

  const nextImage = () => {
    setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <header className="w-full">
      <div className="relative z-10 px-16 py-4 flex justify-between items-center">
        <img src={logo} className="w-[70px] h-[70px]" alt="Logo" />
        <div className="text-white font-poppins flex space-x-8 items-center font-semibold">
          <a href="#">Beranda</a>
          <a href="#">Produk</a>
          <a href="#">FAQ</a>
          <a href="#">Kontak</a>
        </div>
      </div>

      <div className="absolute top-0 w-full ">
        <div className="h-[600px] overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-40 z-1"></div>
          <img
            src={images[currentImage]}
            alt={`Book ${currentImage + 1}`}
            className="w-full h-full object-cover transition-all duration-500 ease-in-out"
          />
        </div>

        <button
          onClick={prevImage}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
        >
          &lt;
        </button>
        <button
          onClick={nextImage}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
        >
          &gt;
        </button>
      </div>
    </header>
  );
};

export default Header;
