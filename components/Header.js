import { FaLine, FaXTwitter, FaInstagram } from "react-icons/fa6"

export default function Header() {
  return (
    <header className="w-full bg-gray-800 text-white p-4 h-20">
      <nav className='h-full'>
        <ul className="flex justify-end items-center h-full">
          <li className="ml-6">
            <a href="about" className="hover:text-gray-300">about</a>
          </li>
          <li className="ml-6">
            <a href="services" className="hover:text-gray-300">services</a>
          </li>
          <li className="ml-6">
            <a href="contact" className="hover:text-gray-300">contact</a>
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
      </nav>
    </header>
  )
}
