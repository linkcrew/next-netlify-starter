import { FaBars, FaLine, FaXTwitter, FaInstagram } from "react-icons/fa6"
import React from 'react';

export default function Header({ toggleDrawer }) {
  return (
    <header className="flex justify-between sticky top-0 bg-neutral text-white p-4 h-20 header-index">
      {/* コーポレートロゴ */}
      <nav className="flex items-center h-full">
        <a href="/" className="flex items-center h-full hover:text-gray-300">
          <img src="corporate_logo.svg" width="30px" height="30px"></img>
        </a>
      </nav>

      {/*　ナビゲーションリンク */}
      <ul className="hidden md:flex items-center h-full">
        <li className="ml-6">
          <a href="/about" className="hover:text-gray-300">about</a>
        </li>
        <li className="ml-6">
          <a href="/services" className="hover:text-gray-300">services</a>
        </li>
        <li className="ml-6">
          <a href="/contact" className="hover:text-gray-300">contact</a>
        </li>
        <li className="ml-6">
          <a href="https://lin.ee/YEKMoqp" target="_blank" rel="noopener noreferrer">
            <FaLine size={30} color={'#ccc'} />
          </a>
        </li>
        <li className="ml-6">
          <a href="https://twitter.com/kazutech1" target="_blank" rel="noopener noreferrer">
            <FaXTwitter size={30} color={'#ccc'} />
          </a>
        </li>
        <li className="ml-6">
          <a href="https://www.instagram.com/yuuumi.desu" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={30} color={'#ccc'} />
          </a>
        </li>
      </ul>

      {/* ハンバーガーアイコン */}
      <button
        className="p-2 md:hidden"
        onClick={toggleDrawer}
      >
        <FaBars size={30} color={'#ccc'} />
      </button>
    </header >
  )
}
