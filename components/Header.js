import { FaLine, FaXTwitter, FaInstagram } from "react-icons/fa6";

export default function Header() {
  return (
    <header className="w-full flex justify-between bg-gray-800 text-white p-4 h-20">
      {/* コーポレートロゴ */}
      <nav className="flex items-center h-full">
        <a href="/" className="flex items-center h-full hover:text-gray-300">
          <img src="corporate_logo.svg" width="30px" height="30px"></img>
        </a>
      </nav>
      {/*　ナビゲーションリンク */}
      <ul className="flex items-center h-full">
        <li className="ml-6">
          <a href="/about" className="hover:text-gray-300 border-r-2 p-2">
            about
          </a>
        </li>
        <li className="ml-6">
          <a href="/about" className="hover:text-gray-300 border-r-2 p-2">
            services
          </a>
        </li>
        <li className="ml-6">
          <a href="/about" className="hover:text-gray-300 border-r-2 p-2">
            contact
          </a>
        </li>
        <li className="ml-6">
          <a
            href="https://lin.ee/YEKMoqp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLine size={30} color={"#ccc"} />
          </a>
        </li>
        <li className="ml-6">
          <a
            href="https://twitter.com/kazutech1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaXTwitter size={30} color={"#ccc"} />
          </a>
        </li>
        <li className="ml-6">
          <a
            href="https://www.instagram.com/yuuumi.desu"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={30} color={"#ccc"} />
          </a>
        </li>
      </ul>
    </header>
  );
}
