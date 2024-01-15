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
          <li className="mb-2">
            <a href="/about" onClick={() => setIsOpen(false)}>about</a>
          </li>
          <li className="mb-2">
            <a href="/services" onClick={() => setIsOpen(false)}>services</a>
          </li>
          <li className="mb-2">
            <a href="/contact" onClick={() => setIsOpen(false)}>contact</a>
          </li>
          <li className="mb-2">
            <a href="https://lin.ee/YEKMoqp" target="_blank" rel="noopener noreferrer">
              <FaLine size={20} color={'#ccc'} />
            </a>
          </li>
          <li className="mb-2">
            <a href="https://twitter.com/kazutech1" target="_blank" rel="noopener noreferrer">
              <FaXTwitter size={20} color={'#ccc'} />
            </a>
          </li>
          <li className="mb-2">
            <a href="https://www.instagram.com/yuuumi.desu" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={20} color={'#ccc'} />
            </a>
          </li>
          <li className="mb-2">
            <a href="/privacy" onClick={() => setIsOpen(false)}>プライバシーポリシー</a>
          </li>
        </ul>
      </div>
    </>
  );
};
