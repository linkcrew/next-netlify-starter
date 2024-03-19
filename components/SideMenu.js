import { FaTimes } from "react-icons/fa"
import { FaLine, FaXTwitter, FaInstagram } from "react-icons/fa6"
import React from 'react';

export default function SideMenu({ isOpen, setIsOpen }) {
  const handleOverlayClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* オーバーレイ */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={handleOverlayClick}
        ></div>
      )}

      {/* ドロワーメニュー */}
      <div
        className={`fixed top-0 right-0 h-full bg-white shadow-lg z-50 transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        style={{ width: '320px' }}
      >
        {/* メニューアイテム */}
        <button onClick={() => setIsOpen(false)} className="text-xl">
          <FaTimes size={30} color={'#ccc'} />
        </button>

        <ul className="flex flex-col p-4">
          <a href="/" onClick={() => setIsOpen(false)}>
            <li className="mb-2 text-xl size-8">top</li>
          </a>
          <a href="/about" onClick={() => setIsOpen(false)}>
            <li className="mb-2 text-xl size-8">about</li>
          </a>
          <a href="/services" onClick={() => setIsOpen(false)}>
            <li className="mb-2 text-xl size-8">services</li>
          </a>
          <a href="/contact" onClick={() => setIsOpen(false)}>
            <li className="mb-2 text-xl size-8">contact</li>
          </a>
          <li className="mb-2 text-xl size-8">
            <div className="flex flex-row gap-x-2">
              <a href="https://lin.ee/YEKMoqp" target="_blank" rel="noopener noreferrer">
                <FaLine size={30} color={'#ccc'} />
              </a>
              <a href="https://twitter.com/kazutech1" target="_blank" rel="noopener noreferrer">
                <FaXTwitter size={30} color={'#ccc'} />
              </a>
              <a href="https://www.instagram.com/yuuumi.desu" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={30} color={'#ccc'} />
              </a>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};
